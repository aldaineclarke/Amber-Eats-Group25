
export interface OrderItem{
    id: number
    name: string;
    description: string;
    cost: number;
    quantity: number;
}


export interface Order{
    id:string;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    deliveryOption: string;
  }