import { LogInDTO } from './../dto/logIn.dto';
import { LogInService } from './log-in.service';
import { Controller, Get, Post, Body, HttpCode, Res, HttpStatus } from '@nestjs/common';

@Controller('login')
export class LogInController {
    constructor(private logInService: LogInService){}

    @Get()
    baseLine() {
        return this.logInService.logInLanding()
    }

    @Get('new')
    newthing(){
        this.logInService.addItem()
    }

    @Post() 
    @HttpCode(200)
    async logInAttempt(@Body() logInDTO: LogInDTO) {
        let x = await this.logInService.logInAttempt(logInDTO)
        if (x===true) {
            console.log('It workes')
            return ("It works")
        } else {
            console.log('It doest work')
            return ("Its fucked")
        }

    }
}
