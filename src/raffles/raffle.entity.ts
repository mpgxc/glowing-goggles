import { Entity } from 'commons/entity';

export type RafflePropsInput = {};

export type RafflePropsIgnore = {};

export class Raffle extends Entity<RafflePropsInput & RafflePropsIgnore> {
  static build(): void {
    console.log('');
  }
}
