import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { ProgramDto } from './program-dto';
import Program from './program.entity';

@Injectable()
export class ProgramService {
    constructor(private readonly helperService: HelperService) { }
    @InjectRepository(Program)
    private programRepository: Repository<Program>

    async createProgram(pgrm: ProgramDto) {
        const pgrmdata = this.programRepository.create(pgrm);
        return this.helperService.jsonReponse(
            true, await this.programRepository.save(pgrmdata));
    }


    async listAllPgrm(): Promise<any> {
        return this.helperService.jsonReponse(
            true, await this.programRepository.find());
    }
}
