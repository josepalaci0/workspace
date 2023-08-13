const { CosmosClient } = require('@azure/cosmos');
const isCedulaRegistered = require('../middleware/isCedulaRegistered');
const ContextCosmos = require('../azure-nosql/ContextCosmos');

const personalInfo = {
    cedula:"164556565",
    nombre_completo: 'Jose Palacio',
    fecha_nacimiento: '1990-01-01',
    genero: 'Masculino',
    numero_identificacion: '123456789',      
    direccion: 'Calle 123, Ciudad',
    telefono: '+1234567890',
    correo_electronico: 'juan.perez@example.com',
    estado_civil: 'Soltero',
    ocupacion: 'Profesional',
    nacionalidad: 'Nacionalidad Ejemplo',
    foto_url: 'https://ejemplo.com/foto.jpg'
  };

async function updatePersonalInfo() {
    const contextCosmos = await ContextCosmos();
    const container = contextCosmos.container;
  try {
    

    // Verificar si la cédula ya está registrada
    const cedulaRegistrada = await isCedulaRegistered(container, personalInfo.cedula);
    if (!cedulaRegistrada) {
      throw new Error('La cédula no está registrada. No se puede actualizar la información personal.');
    }

    // Obtener la información personal existente por la cédula
    const query = 'SELECT * FROM c WHERE c.cedula = @cedula';
    const { resources: existingInfo } = await container.items.query({ query, parameters: [{ name: '@cedula', value: personalInfo.cedula }] }).fetchAll();

    if (existingInfo.length === 0) {
      throw new Error('No se encontró información personal para la cédula especificada.');
    }

    // Actualizar los campos de la información personal existente con los nuevos datos
    const updatedInfo = { ...existingInfo[0], ...personalInfo };

    // Reemplazar la información personal existente con los nuevos datos en la base de datos
    const { resource } = await container.items.upsert(updatedInfo);

    console.log('Información personal actualizada:', resource);
    return resource;
  } catch (error) {
    console.error('Error al actualizar la información personal:', error.message);
    throw error;
  }
}

module.exports = updatePersonalInfo;
