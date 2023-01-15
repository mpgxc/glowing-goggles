import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './create-customer.dto';
import { UpdateCustomerDto } from './update-customer.dto';

@Injectable()
export class CustomersService {
  async create(createCustomerDto: CreateCustomerDto) {
    return `This action create a new customer`;
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: string) {
    return `This action returns a #${id} customer`;
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: string) {
    return `This action removes a #${id} customer`;
  }
}
