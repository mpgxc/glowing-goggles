import { Entity, EntityProps } from '../commons/entity';

export type Contacts = {
  type: 'email' | 'phone';
  contact: string;
};

export type SocialLinks = {
  type:
    | 'instagram'
    | 'facebook'
    | 'tiktok'
    | 'telegram'
    | 'youtube'
    | 'blog'
    | 'others';
  link: string;
};

export type CustomerPropsInput = {
  name: string;
  email: string;
  avatar: string;
  password: string;
  document: string;
  phoneNumber: string;
};

export type CustomerPropsIgnore = {
  bio: string;
  avatar: string;
  socialMediaLinks: SocialLinks[];
  additionalContacts: Contacts[];
};

export type CustomerFullProps = CustomerPropsInput & CustomerPropsIgnore;

export class Customer extends Entity<CustomerFullProps> {
  static build(props: CustomerPropsInput): Customer {
    return new Customer({
      ...props,
      bio: '',
      avatar: '',
      socialMediaLinks: [],
      additionalContacts: [],
    });
  }

  static parse(props: EntityProps<CustomerFullProps>): Customer {
    return new Customer(props, props.id);
  }
}
