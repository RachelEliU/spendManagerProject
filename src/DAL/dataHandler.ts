import elasticsearch from 'elasticsearch'
import { config } from '../config';
import { CreditCard } from '../modules/creditCard';

export class DataHndler
{
  client : any
  constructor()
  {
    this.client = new elasticsearch.Client({
      host: config.host,
      log: config.log,
    });

    this.client.ping({
      requestTimeout: 30000,
    }, function (error : any) {
      if (error) {
        console.error('elasticsearch cluster is down!');
      } else {
        console.log('All is well');
      }
    });   
  }

  async createByObject(indexCreate : string , object : any)
  {
    await this.client.index({
      index: indexCreate,
      body: JSON.stringify(object)});
    console.log(object);
  }

  async updateUser(idUser : string, creditCardNew : CreditCard)
  {
    await this.client.update(
    {
      index: "hadaspend_accounts-hadas26",
      id : idUser,
      body: 
      {
        script : 
        {
          source :"ctx._source.cards.add(params.creditCard)",
          lang: 'painless',
          params :
        {
           creditCard : creditCardNew
        }
        }
      }
    });
  }

  async get(idInput : string)
  {
    console.log("got to input");
    const result = await this.client.search({
      index: 'hadaspend_accounts-hadas26',
      body: {
        query: {
          match: { id: idInput }
        }
      }
    }, {
      ignore: [404],
      maxRetries: 3
    })
    return result.hits.hits[0];
  }

  async getOrders(idUser : string, month : number )
  {
    const date = new Date();
    const grater = new Date(date.getFullYear(),month,1)
    const less = new Date(date.getFullYear(),month,30)
    const result = await this.client.search(
      {
        index : 'hadaspend_accounts-hadas26',
        body: {
          query:{ 
            bool:{ 
              match: { id: idUser },
              filter:[{
                "range": {
                    "date": {
                        "gte":grater,
                        "lte": less
                    }
                }
              }]
              } 
            } 
          }  
        });
    console.log(result);
    return result;
  }
}



 