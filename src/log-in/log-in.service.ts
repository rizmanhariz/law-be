import { LogInDTO } from './../dto/logIn.dto';
import { Injectable, UnauthorizedException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogIn } from 'src/interfaces/logIn.interface';
import { createHmac, createHash } from 'crypto';
import hashKeys from 'src/configs/hash.keys';
import { JwtService } from '@nestjs/jwt';
// import { sign } from 'jwt';



@Injectable()
export class LogInService {
    constructor(
        @InjectModel('users') private readonly logInModel: Model<LogIn>, 
        private readonly jwtService: JwtService) {}

    async logInLanding(){
        await this.logInModel.find({}, (err,user)=> {
            if (err) { console.log("its errer",err)} else {
                console.log("its user",user)
            }
        })
    }

    async logInAttempt(logInDTO: LogInDTO) {
        let inUsername = createHash('sha256')
        .update(logInDTO.username)
        .digest('hex')

        let inPassword = createHash('sha256')
        .update(logInDTO.password)
        .digest('hex')


        let dbRet = await this.logInModel.findOne({username:inUsername, password:inPassword})
        
        if (dbRet===null) {
            // throw new UnauthorizedException("Invalid password")
            throw new HttpException("Hang anak babi", 432)
        } else {
            const payload = {subject: dbRet._id}
            return {
                token: this.jwtService.sign(payload)
            }
        }
    }


    async addItem() {
    }

}
