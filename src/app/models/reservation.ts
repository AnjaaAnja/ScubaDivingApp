import { ObjectId } from 'mongodb';
export class Reservation {
  _id?: ObjectId;
  organizationID: string = '';
  programID: string = '';
  userID: string = '';
  date: Date;
}
