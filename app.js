const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('http://rickandmortyapi.com/api/character');
        res.json(response.data.results);
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).json({ error: 'Error al recuperar caracteres' });
    }
});

app.get('/characters/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const response = await axios.get(`http://rickandmortyapi.com/api/character/?name=${name}`);
        if (response.data.results.length > 0) {
            res.json(response.data.results[0]);
        } else {
            res.status(404).json({ message: 'Caracter no encontrado' });
        }
    } catch (error) {
        console.error('Error', error.message);
        res.status(500).json({ error: 'Error al recuperar el caracter' });
    }
});


app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto http://localhost:3000');
});
