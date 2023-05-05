import { Controller, Get, Post, Body, Res, Headers } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/v1/send')
  async send(
	@Body() body,
	@Headers('header_start') header_start, 
	@Headers('header_end') header_end,  
	@Headers('header_total') header_total,
	@Res() res: Response) {
	return res.send(this.appService.post(body.data, parseInt(header_start), parseInt(header_end), parseInt(header_total)));
  }
}
