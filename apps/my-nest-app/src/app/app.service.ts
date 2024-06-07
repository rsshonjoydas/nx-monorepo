import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly message: string = 'Hello API';

  getData(): { message: string } {
    return { message: this.message };
  }
}
