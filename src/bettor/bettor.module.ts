import { Module } from '@nestjs/common';
import { BettorService } from './bettor.service';
import { BettorController } from './bettor.controller';

@Module({
  controllers: [BettorController],
  providers: [BettorService],
})
export class BettorModule {}
