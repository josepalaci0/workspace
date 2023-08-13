// Función asincrónica para crear el contenedor si no existe
module.exports = async function createContainer(database, containerId) {
    const containerDefinition = {
        id: containerId,
        partitionKey: { paths: ['/cedula'] },
    };
    const { container } = await database.containers.createIfNotExists(containerDefinition);
    console.log('Contenedor creado:', containerId);
    return container;
}