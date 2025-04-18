const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let orderIdCounter = 1;

app.post('/api/orders', (req, res) => {
    const { nip, orderValue } = req.body;

    if (!nip || !orderValue) {
        return res.status(400).json({ error: 'Brakuje danych.' });
    }

    const orderId = orderIdCounter++;
    const timestamp = new Date();

    console.log(`NIP: ${nip}, Wartość: ${orderValue}, Data: ${timestamp.toISOString()}`);
    res.json({ orderId });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
