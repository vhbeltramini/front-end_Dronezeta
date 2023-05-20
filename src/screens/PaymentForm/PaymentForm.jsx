import React, { useState } from 'react';
import './PaymentForm.css';

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (event) => {
        setCardNumber(event.target.value);
    };

    const handleCardNameChange = (event) => {
        setCardName(event.target.value);
    };

    const handleExpiryDateChange = (event) => {
        setExpiryDate(event.target.value);
    };

    const handleCvvChange = (event) => {
        setCvv(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Enviar dados pro back
        console.log('Dados do cartão de crédito:', {
        cardNumber,
        cardName,
        expiryDate,
        cvv,
        });
    };

    return (
        <div className='payment-form'>
            <h2>Forma de Pagamento</h2>
            <form onSubmit={handleSubmit}>
                <label>
                Número do Cartão:
                <input
                    type="text"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                />
                </label>
                <label>
                Nome no Cartão:
                <input
                    type="text"
                    value={cardName}
                    onChange={handleCardNameChange}
                />
                </label>
                <label>
                Data de Expiração:
                <input
                    type="text"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                />
                </label>
                <label>
                CVV:
                <input
                    type="text"
                    value={cvv}
                    onChange={handleCvvChange}
                />
                </label>
                <button type="submit">Confirmar Pagamento</button>
            </form>
        </div>
    );
}

export default PaymentForm;