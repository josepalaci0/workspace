const items = {
    Andersen: {
      id: 'Anderson.1',
      País: 'USA',
      clavePartición: 'USA',
      apellidoPaterno: 'Andersen',
      padres: [
        {
          primerNombre: 'Thomas'
        },
        {
          primerNombre: 'Mary Kay'
        }
      ],
      hijos: [
        {
          primerNombre: 'Henriette Thaulow',
          género: 'femenino',
          grado: 5,
          mascotas: [
            {
              nombre: 'Fluffy'
            }
          ]
        }
      ],
      dirección: {
        estado: 'WA',
        condado: 'King',
        ciudad: 'Seattle'
      }
    },
    Wakefield: {
      id: 'Wakefield.7',
      clavePartición: 'Italia',
      País: 'Italia',
      padres: [
        {
          apellidoFamiliar: 'Wakefield',
          primerNombre: 'Robin'
        },
        {
          apellidoFamiliar: 'Miller',
          primerNombre: 'Ben'
        }
      ],
      hijos: [
        {
          apellidoFamiliar: 'Merriam',
          primerNombre: 'Jesse',
          género: 'femenino',
          grado: 8,
          mascotas: [
            {
              nombre: 'Goofy'
            },
            {
              nombre: 'Shadow'
            }
          ]
        },
        {
          apellidoFamiliar: 'Miller',
          primerNombre: 'Lisa',
          género: 'femenino',
          grado: 1
        }
      ],
      dirección: {
        estado: 'NY',
        condado: 'Manhattan',
        ciudad: 'NY'
      },
      estáRegistrado: false
    }
  };
  
  async function deleteItemById(client, containerId, databaseId, itemId, partitionKey) {
    // Utiliza el cliente de Azure Cosmos DB para acceder a la base de datos especificada por `databaseId`
    // y al contenedor específico con el `containerId`. Luego, llamamos a `.item(itemId, partitionKey)`
    // para obtener una referencia al elemento específico que se va a eliminar del contenedor.
    await client
      .database(databaseId)
      .container(containerId)
      .item(itemId, partitionKey)
      .delete();
    
    // Después de eliminar el elemento, se imprime un mensaje en la consola que muestra el ID del elemento eliminado (`itemId`).
    console.log(`Se eliminó el elemento: ${itemId}`);
  }