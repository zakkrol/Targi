document.getElementById('submitButton').addEventListener('click', async () => {
    const nip = document.getElementById('nip').value;
    const orderValue = document.getElementById('orderValue').value;

    if (!nip || !orderValue) {
        alert('Uzupełnij wszystkie pola!');
        return;
    }

    const data = { nip, orderValue };

    try {
        const response = await fetch('http://localhost:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        document.getElementById('responseMessage').textContent = `Nr zamówienia: ${result.orderId}`;
    } catch (error) {
        console.error('Błąd:', error);
        alert('Nie udało się przesłać danych.');
    }
});
