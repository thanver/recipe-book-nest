import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/user/dto/login-dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) { }

    async validateUser(username: string, pass: string): Promise<any> {
        console.log(username);
        const user = await this.usersService.findOne(username);
        
        const hash = this.hashValue(pass);
        if (user && await bcrypt.compare(pass, hash)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    hashValue(value: string) {
        return bcrypt.hashSync(value, 10);
    }
    login(loginUserDto: LoginUserDto) {
        return this.validateUser(loginUserDto.username, loginUserDto.password)
    }
}
