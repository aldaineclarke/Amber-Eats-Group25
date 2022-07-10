import { cardPayment } from "./cardPayment";

export interface User{
    id:number;
    firstName:string;
    lastName:string;
    address: string;
    email:string;
    paymentMethod: cardPayment[]
  
  }