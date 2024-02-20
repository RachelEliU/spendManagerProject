export class CreditCard
{
    creditNumber : number
    validityDate : Date
    cvv : number
    constructor (creditNumber : number, validityDate : Date, cvv : number)
    {
        this.creditNumber = creditNumber;
        this.validityDate = validityDate;
        this.cvv =cvv;
    }
}