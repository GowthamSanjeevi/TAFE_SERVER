import { Injectable, Inject } from "@nestjs/common";


@Injectable()
export class HelperService {

    validateSchema = (
        objectName: string,
        requestBody: any,
        schema: any,
    ): { data: any; error: any } => {
        ("Validating " + objectName + " JSON request");
        try {
            const { error, value } = schema.validate(requestBody, {
                stripUnknown: true,
            });
            if (error == null) {
                return { data: value, error: null };
            }
            return {
                data: null,
                error: error.details.map((msg: any) => msg.message).join(),
            };
        } catch (e) {
            console.error(e);
            return { data: null, error: e };
        }
    };

    jsonReponse(isSuccess: boolean, message: any) {
        return {
            success: isSuccess ? 1 : 0,
            data: message,
        };
    }
}