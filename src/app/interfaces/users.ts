import { cardPayment } from "./cardPayment";

export interface User{
  id:number;
  firstName:string;
  lastName:string;
  email:string;
  paymentMethod: cardPayment[];
}