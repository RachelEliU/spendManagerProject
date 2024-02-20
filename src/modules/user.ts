import { CreditCard } from "./creditCard"

export interface User
{
    id : string
    firstName : string
    lastName : string 
    age : number
    currentAmount : number
    accountNumber : number
    branchNumber : number
    bankName : string
    cards : CreditCard[]
}