const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola desde DevOps + Node.js 🚀!');
});

// Ruta adicional para pruebas
app.get('/status', (req, res) => {
  res.json({ ok: true, status: "API funcionando correctamente" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
