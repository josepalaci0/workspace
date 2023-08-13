module.exports = async function deleteDatabase(databaseId,client) {
    try {    
  
      // Obtener una referencia a la base de datos
      const database = client.database(databaseId);
  
      // Eliminar la base de datos
      await database.delete();
  
      console.log(`Base de datos "${databaseId}" eliminada correctamente.`);
    } catch (error) {
      console.error('Error al eliminar la base de datos:', error);
    }
  }
  