export interface Products{
    id: number
    name: string
    price: number
    category: string
    image: string
    description: string
    
}

export class ProductCheckOut{
    id: number
    userid:number
    prodid: number
    size: string
    name: string
    price: string
    category:string
    image: string
    description: string
    qty: number
}

export class ProductPlaced{
    id: number
    userid:number
    prodid: number
    size: string
    name: string
    price: string
    category:string
    image: string
    description: string
    qty: number
    orderdate: string
    deliverydate: string
    status: string
    address: string
}
