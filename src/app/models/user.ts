import { ObjectId } from 'mongodb';

export class User {
  _id?: ObjectId;
  sname?: string = '';
  lname?: string = '';
  username?: string = '';
  email?: string = '';
  age?: number = 0;
  experience?: number = 0;
  password?: string = '';
  createdAt?: Date = new Date();
}
