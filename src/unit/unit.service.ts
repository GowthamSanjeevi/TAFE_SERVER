import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { UnitDto } from './unit-dto';
import Unit from './unit.entity';

@Injectable()
export class UnitService {
    constructor(private readonly helperService: HelperService) { }
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>

    async createUnit(unit: UnitDto) {
        const unitdata = this.unitRepository.create(unit);
        return this.helperService.jsonReponse(
            true, await this.unitRepository.save(unitdata));
    }


    async listAllUnit(): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.unitRepository.find());
    }

    async getUnitById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.unitRepository.findOneBy({ id: id })
        );
    }

    async updateUnitById(id: string, data: UnitDto): Promise<any> {
        delete data["id"]
        return this.helperService.jsonReponse(
            true, await this.unitRepository.update({ id }, data));

    }

    async deleteUnitById(id: string): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.unitRepository.delete({ id }));
    }
}

