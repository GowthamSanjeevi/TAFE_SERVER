import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProgramDto } from 'src/program/program-dto';
import Program from 'src/program/program.entity';
import { HelperService } from 'src/shared/helper.sevice';
import { Repository } from 'typeorm';
import { UserDto } from './user-dto';
import User from './user.entity';




@Injectable()
export class UserService {
    constructor(private helperService: HelperService,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Program)
        private pgrmRepository: Repository<Program>
    ) { }

    async createUser(user: any) {
        return await this.usersRepository.insert(user);
    }

    async listAllUser(): Promise<any> {
        return await this.usersRepository.find();
    }

    async login(username: string, password: string): Promise<any> {
        await this.usersRepository.findBy({ username: username, password: password })
        return this.helperService.jsonReponse(true, "Login Success")
    }

    async getUserById(id: number): Promise<any> {
        return await this.usersRepository.findOneBy({ id: id });

    }

    async getUserByIdSelectField(id: number): Promise<any> {
        return await this.usersRepository.find({
            select: ["username"],
            where: [{ "id": id }]
        });
    }

    async updateUserById(id: number, data: UserDto): Promise<any> {
        return await this.usersRepository.update({ id }, data)
    }

    async createUserProgramById(id: number, pgrmDto: ProgramDto) {
        const user = await this.usersRepository.findOneBy({ id })
        if (!user) {
            return this.helperService.jsonReponse(
                false, "User Not Found");
        }
        const userPgrm = this.pgrmRepository.create(pgrmDto);
        const savePgrm = await this.pgrmRepository.save(userPgrm);
        user.program = savePgrm;
        return this.helperService.jsonReponse(
            true, await this.usersRepository.save(user));
    }
}
