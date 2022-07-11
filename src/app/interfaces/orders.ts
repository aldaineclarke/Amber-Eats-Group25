import { OrderItem } from "./orderItem";

export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    deliveryOption: string;
    tenderType: string;
  }
