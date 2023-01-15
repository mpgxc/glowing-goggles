import { Injectable } from '@nestjs/common';
import { CreateBettorDto } from './create-bettor.dto';
import { UpdateBettorDto } from './update-bettor.dto';

@Injectable()
export class BettorService {
  create(createBettorDto: CreateBettorDto) {
    return 'This action adds a new bettor';
  }

  findAll() {
    return `This action returns all bettor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bettor`;
  }

  update(id: number, updateBettorDto: UpdateBettorDto) {
    return `This action updates a #${id} bettor`;
  }

  remove(id: number) {
    return `This action removes a #${id} bettor`;
  }
}
