import { User } from "../modules/user";
import { userService } from "../BL/service/userService";

 export const userController = {
    status : async (req : any, res : any) => 
    {
      res.send("hello");
    },

    create: async (req : any, res : any) => 
    {
      try 
      {
        res.status(200).send(userService.create(req));
      } 
      catch (error : any) 
      {
        res.status(404).json({ error: error.message });
      }
      console.log("got to controller");
    },

    createCard: async (req : any, res : any) => 
    {
      try 
        {
          res.status(200).send(userService.createCard(req));
        } 
        catch (error : any) 
        {
          res.status(404).json({ error: error.message });
        }
    },

    getById : async (req : any , res : any) =>
    {
      try 
        {
         const user : User = await userService.getById(req);
         console.log(user);
         res.status(200).json(user);
        } 
      catch (error : any) 
        {
         res.status(500).json({ error: error.message });
        }
    }
}