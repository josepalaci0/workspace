const { CosmosClient } = require('@azure/cosmos');
const createDatabase = require('../middleware/createDatabase');
const createContainer = require('../middleware/createContainer');
const config = require('../middleware/config');

// Instancia del cliente de Cosmos DB
const client = new CosmosClient({ endpoint: config.endpoint, key: config.key });

 module.exports = async function ContextCosmos(){
  const databaseId = 'blog';
  const containerId = 'mensajes';
    try {
        const database = await createDatabase(databaseId, client);
        
        const container = await createContainer(database, containerId); 
        
        return {database, container, client, databaseId,containerId}
      } catch (err) {
        console.error('Error:', err);
      }
    

 }