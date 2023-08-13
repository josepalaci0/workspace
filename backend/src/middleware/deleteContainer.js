// Función asincrónica para eliminar el contenedor
module.exports = async function deleteContainer(database, containerId) {
    await database.container(containerId).delete();
    console.log('Contenedor eliminado:', containerId);
    return {result:containerId}
  }

 