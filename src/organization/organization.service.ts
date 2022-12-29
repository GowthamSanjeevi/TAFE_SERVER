import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { OrganizationDto } from './organization-dto';
import Organization from './organization.entity';
import { OrganizationValidator } from './organization.validation';


@Injectable()
export class OrganizationService {

    constructor(private readonly helperService: HelperService) { }
    @InjectRepository(Organization)
    private orgRepository: Repository<Organization>

    async createOrg(requestBody: OrganizationDto) {
        const validateData = this.helperService.validateSchema(
            "Organization",
            requestBody,
            OrganizationValidator,
        );
        if (validateData.error != null) {
            //send error response
            return this.helperService.jsonReponse(false, validateData.error);
        }
        const orgData = this.orgRepository.create(requestBody)
        return this.helperService.jsonReponse(
            true, await this.orgRepository.save(orgData));
    }

    async listAllOrg(): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.orgRepository.find());
    }

    async getOrgById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.orgRepository.findOneBy({ id: id })
        );
    }

    async updateOrgById(id: string, data: OrganizationDto): Promise<any> {
        delete data["id"]
        return this.helperService.jsonReponse(
            true, await this.orgRepository.update({ id }, data));

    }

    async deleteOrgById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.orgRepository.delete({ id }));
    }

}

