import { ObjectId } from 'mongodb';
export class Program {
  _id?: ObjectId;
  withBuddy: boolean = false;
  withCage: boolean = false;
  withAnimals: boolean = false;
  organizationID: string = '';
  name: string = '';
}
