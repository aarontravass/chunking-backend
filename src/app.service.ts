import { Injectable } from '@nestjs/common';
import { appendFileSync } from 'fs';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  chunks = Buffer;
  async post(
    data,
    header_start: number,
    header_end: number,
    header_total: number,
  ) {

    this.chunks.concat(data, header_total);
    appendFileSync('./new.jpg', Buffer.from(data));
    return true;
    
  }
}
