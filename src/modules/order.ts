import { Product } from "./product"
import { Paymants } from "./payments"

export  interface Order
{
    product : Product
    actualMoneyPaid: number
    date : Date
    paymentMethod : Paymants
    id : string
    accountNumber : string
}