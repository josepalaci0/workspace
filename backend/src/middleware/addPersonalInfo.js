module.exports = async function addPersonalInfo(container, personalInfo) {
    try {
      const { resource } = await container.items.create(personalInfo);
      console.log('Información personal agregada:', resource);
      return { result: resource };
    } catch (error) {
      console.error('Error al agregar información personal:', error);
      throw error;
    }
  };
  