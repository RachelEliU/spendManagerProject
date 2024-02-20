import { User } from "../../modules/user";
import { dataHandler } from "../../app";
import { CreditCard } from "../../modules/creditCard";

const index = "hadaspend_accounts-hadas26"

export const userService = {
    create: async (req : any) => {
      try 
      {
        const user : User = req.body;
        validId(user.id);
        await dataHandler.createByObject(index, user)
        return user;
      } 
      catch (error : any) 
      {
        throw Error(error)
      }
    },

    createCard : async (req : any) => 
    {
        try 
        {
        const {id, credit_number, validity_date, cvv} = req.body;
        const creditCard = new CreditCard(credit_number, validity_date, cvv)
        const result  = await dataHandler.get(id);
        const user : User = result._source;
        const idToUpdate = result._id;
        user.cards.push(creditCard);
        await dataHandler.updateUser(idToUpdate,creditCard);
        return creditCard;
        } 
        catch (error : any) 
        {
          throw Error(error)
        }
    },

    getById : async (req : any)   =>
    {
        try 
        {    
            const url =req.url
            const id = url.split('/')[2];
            const result  = await dataHandler.get(id);
            const user : User = result._source;
            return user;
        }
        catch 
        {
            throw Error("Invalid id, can't find solider by this id");
        }
    },
}

async function validId(id : string)
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

