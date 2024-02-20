import { dataHandler } from "./app";

export class Validation
{
    validUser( id : any, firstName : any, lastName : any, age : any, currentAmount : any, accountNumber : any, branchNumber : any, bankName : any, cards :any)
    {
        try
        {
            this.validId(id);
            this.validName(firstName);
            this.validName(lastName);
            this.validAge(age);

        }
        catch (error : any) 
        {
            throw Error(error)
        }
    }

    async validId(id : string)
    {
        const result = await dataHandler.get(id);
        if (result !== undefined )
        {
            throw new Error("id already exist");
        }
        if (id.toString().length !== 9)
        {
           throw new Error("invalid id, id must be 9 chars");
        }
    }

    validName(name : any)
    {
        if(name === undefined)
        {
            throw new Error("name can't be empty");
        }
    }

    validAge(age : any)
    {
        if(age < 0 || age > 120)
        {
            throw new Error("age is invalid ");
        }
    }
}