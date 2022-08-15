import { ObjectId } from "mongodb";
export class Organization {
  _id?: ObjectId;
  name: string = '';
  address: string = '';
  phone: string = '';
  imagePath: string = '';
}
