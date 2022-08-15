import { ObjectId } from 'mongodb';
import { User } from './user';
export class Comment {
  _id?: ObjectId;
  text: string = '';
  organizationID: string = '';
  user: User = new User();
}
