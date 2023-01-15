import { randomUUID } from 'node:crypto';
import { Maybe } from './maybe';

export type EntityProps<T> = T & {
  id: string;
  createdAt: Date;
  updatedAt: Maybe<Date>;
};

abstract class Entity<T = unknown> {
  protected _id: string;
  protected _props: T;
  protected _createdAt: Date;
  protected _updatedAt: Maybe<Date>;

  protected constructor(props: T, id?: string) {
    this._props = props;
    this._id = id || randomUUID();
    this._createdAt = new Date();
  }

  protected update() {
    this._updatedAt = new Date();
  }

  get props(): EntityProps<T> {
    return {
      id: this._id,
      ...this._props,
      updatedAt: this._updatedAt,
      createdAt: this._createdAt,
    };
  }

  get id(): string {
    return this._id;
  }

  get updatedAt(): Maybe<Date> {
    return this._updatedAt;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
}

export { Entity };
