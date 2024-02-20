import {orderService} from '../BL/service/orderService'
export const orderController =
{
    create: async (req : any, res : any) => {
        try 
        {
          res.status(200).send(orderService.create(req));
        } 
        catch (error : any) 
        {
          res.status(404).json({ error: error.message });
        }
        console.log("got to controller");
    },
    
    getOrders : async (req : any, res : any) => {
    try 
      {
        res.status(200).json(orderService.getOrders(req));
      } 
      catch (error : any) 
      {
        res.status(500).json({ error: error.message });
      }
    }
}