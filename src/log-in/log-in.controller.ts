import { LogInDTO } from './../dto/logIn.dto';
import { LogInService } from './log-in.service';
import { Controller, Get, Post, Body, HttpCode, Res, HttpStatus, Header } from '@nestjs/common';

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
    // @Header('Access-Control-Allow-Origin','*')
    async logInAttempt(@Body() logInDTO: LogInDTO) {
        let x = await this.logInService.logInAttempt(logInDTO)

        return x
        // if (x===null) {
        //     //figure out how to return an error?
        // } else {
        //     return x
        // }

    }
}
