import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('sse')
export class SseController {
  @Get()
  sendEvents(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendEvent = (data) => {
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    let counter = 0;
    const intervalId = setInterval(() => {
      sendEvent({ message: `Hello, this is message #${counter++}` });
    }, 1000);

    res.on('close', () => {
      clearInterval(intervalId);
      res.end();
    });
  }
}
