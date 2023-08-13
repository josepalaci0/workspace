const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tu preferencia
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta "public"


const ContextCosmos = require("./src/azure-nosql/ContextCosmos");
const addPersonalInfo = require("./src/middleware/addPersonalInfo");



async function queryContainer() {
  const res = await ContextCosmos();
  const client = res.client;

  const querySpec = {
    query: 'SELECT * FROM mensajes'
  };

  const { resources: results } = await client
    .database(res.databaseId)
    .container(res.containerId)
    .items.query(querySpec)
    .fetchAll();

  return results;
}

app.get('/messages', async (req, res) => {
  try {
    const result = await queryContainer();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los mensajes.');
  }
});






app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  if (name && email && message) {
    const currentDate = new Date(); // Crea una instancia del objeto Date con la fecha y hora actuales
    const year = currentDate.getFullYear(); // Obtiene el año (ejemplo: 2023)
    const month = currentDate.getMonth() + 1; // Obtiene el mes (0-11, por lo que sumamos 1)
    const day = currentDate.getDate(); // Obtiene el día del mes (1-31)

    // Formatea la fecha en una cadena en formato YYYY-MM-DD
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const serverResponse = {
      success: true,
      fecha: formattedDate,
      data: { name, email, message }
    }
    const contextCosmos = await ContextCosmos();
    await addPersonalInfo(contextCosmos.container, serverResponse);
    res.redirect('/response.html');
  }
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
