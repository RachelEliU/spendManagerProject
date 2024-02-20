import { Order } from "../../modules/order";
import { dataHandler } from "../../app";
import { Product } from "../../modules/product";

const index = "hadaspend_purchases-26";

export const orderService = {

    create: async (req : any) => {
      try 
      {
        const {itemName, category, price, itemAmount, actualMoneyPaid, date, paymentMethod, id, accountNumber} = req.body;
        const product : Product = {itemName, category, price, itemAmount};
        const order : Order = {product, actualMoneyPaid, date, paymentMethod, id, accountNumber};
        console.log(order); 
        dataHandler.createByObject(index, order);
        return order;
      }
      catch(error : any)
      {
        throw Error(error);
      }
    },

    getOrders : async (req : any) => {
        console.log("got to servers");
        try 
        {    
            const {id, month} = req.body;  
            const sum  = await dataHandler.getOrders(id, month);
            return sum;
        }
        catch (error : any)
        {
            throw Error(error);
        }  
    }
}


