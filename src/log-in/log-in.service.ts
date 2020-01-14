import { LogInDTO } from './../dto/logIn.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogIn } from 'src/interfaces/logIn.interface';
import { createHmac, createHash } from 'crypto';
import hashKeys from 'src/configs/hashKeys';
// import { sign } from 'jwt';



@Injectable()
export class LogInService {
    constructor(@InjectModel('users') private readonly logInModel: Model<LogIn>) {}

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
            return false
        } else {
            return true
        }



    }


    async addItem() {
        // const newItem = new this.logInModel({username:'mighty', password:'number9'})
        // newItem.save()
        // console.log("ahyuck")

        const secret = '55times'
        // const hash = createHmac('sha256', secret)
        const hash = createHash('sha256')
        .update(secret)
        .digest('hex')

        console.log(hash)
    }

    tokenGenerator() {

    }

}
