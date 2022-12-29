import * as Joi from "joi";

export const OrganizationValidator = Joi.object({
    id: Joi.string(),
    name: Joi.string(),
    contact_name: Joi.string(),
    contact_no: Joi.number(),
    build_no: Joi.string(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    pincode: Joi.number(),
    area: Joi.string(),
    domain_name: Joi.string()
});
