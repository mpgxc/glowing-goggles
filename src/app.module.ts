import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { RafflesModule } from './raffles/raffles.module';
import { NotifyModule } from './notify/notify.module';
import { BettorModule } from './bettor/bettor.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CustomersModule,
    RafflesModule,
    NotifyModule,
    BettorModule,
  ],
})
export class AppModule {}
