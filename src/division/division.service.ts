import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { DivisionDto } from './division-dto';
import Division from './division-entity';

@Injectable()
export class DivisionService {

    constructor(private readonly helperService: HelperService) { }
    @InjectRepository(Division)
    private divRepository: Repository<Division>

    async createDiv(div: DivisionDto) {
        const divdata = this.divRepository.create(div);
        return this.helperService.jsonReponse(
            true, await this.divRepository.save(divdata));
    }

    async listAllDiv(): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.divRepository.find());
    }

    async getDivById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.divRepository.findOneBy({ id: id })
        );
    }

    async updateDivById(id: string, data: DivisionDto): Promise<any> {
        delete data["id"]
        return this.helperService.jsonReponse(
            true, await this.divRepository.update({ id }, data));

    }

    async deleteDivById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.divRepository.delete({ id }));
    }

}

