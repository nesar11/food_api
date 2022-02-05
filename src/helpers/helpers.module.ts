import { Module } from '@nestjs/common';
import { HelpersService } from './helpers.service';
import { HelpersController } from './helpers.controller';

@Module({
  controllers: [HelpersController],
  providers: [HelpersService]
})
export class HelpersModule {}
