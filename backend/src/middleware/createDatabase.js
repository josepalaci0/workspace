// Función asincrónica para crear la base de datos si no existe
module.exports = async function createDatabase(databaseId, client) {
    const { database } = await client.databases.createIfNotExists({ id: databaseId });
    console.log('Base de datos creada:', databaseId);
    return client.database(databaseId);
}

