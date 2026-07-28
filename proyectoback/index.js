const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Mostrar archivos estáticos (CSS, JS, imágenes)
app.use(express.static("public"));

// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});