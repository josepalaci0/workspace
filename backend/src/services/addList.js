const { CosmosClient } = require('@azure/cosmos');
const ContextCosmos = require('../azure-nosql/ContextCosmos')
const isCedulaRegistered = require('../middleware/isCedulaRegistered');
const addPersonalInfo = require('../middleware/addPersonalInfo')

const personalInfo = {
  cedula:"164556565",
  nombre_completo: 'Juan Pérez',
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

module.exports = async function addList() {  
  const contextCosmos = await ContextCosmos();
  try {   
    
    // Verificar si la cédula ya está registrada
    const cedulaRegistrada = await isCedulaRegistered(contextCosmos.container, personalInfo.cedula);
    if (cedulaRegistrada) {
      console.error('La cédula ya está registrada. No se puede agregar la información personal.');
    } else {
      await addPersonalInfo(contextCosmos.container, personalInfo);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}