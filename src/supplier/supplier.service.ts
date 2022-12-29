import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { SupplierDto } from './supplier-dto';
import Supplier from './supplier.entity';

@Injectable()
export class SupplierService {
    constructor(private readonly helperService: HelperService) { }
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>


    async createSupplier(sup: SupplierDto) {
        const supplier = this.supplierRepository.create(sup);
        return this.helperService.jsonReponse(
            true, await this.supplierRepository.save(supplier)
        )
    }

    async listAllSupplier(): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.supplierRepository.find()
        )
    }
}
