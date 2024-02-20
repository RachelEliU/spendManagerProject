import 'dotenv/config';

export const config = 
{
  name : process.env.NAME,
  host : 'http://hadasimks.westeurope.cloudapp.azure.com/elasticsearch' ,//process.env.HOST,
  log : 'trace',//process.env.LOG,
  indexUsers : process.env.INDEX_USER,
  indexOrders : process.env.INDEX_OREDER,
  port : process.env.PORT
}