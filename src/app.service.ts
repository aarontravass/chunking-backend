import { Injectable } from '@nestjs/common';
import { appendFileSync } from 'fs';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  chunks = Buffer;

  post(
    data:Record<number, number>,
    header_start: number,
    header_end: number,
    header_total: number,
  ) {
    console.log(header_end-header_start)
    console.log(Object.values(data).length)
    const arr = []
    for(let i = 0;i<10000;i++){
        arr.push(data[i]);
    }
    const buff = new Uint8Array(arr);
    // this.chunks.concat(data, header_total);
    appendFileSync('./new.jpg', buff);
    return 'true';
    
  }
}
