import React, { useState, useEffect } from 'react';
import './PaymentForm.css';
import axios from 'axios';

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethods, setPaymentMethods] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/users/${user.id}`);
                const paymentMethodList = response.data.paymentMethodList;
                setPaymentMethods(paymentMethodList);
            } catch (error) {
                console.error('Erro ao obter os métodos de pagamento:', error);
            }
        };

        fetchPaymentMethods();
    }, [user.id]);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            const response = await axios.post('http://localhost:8080/payment-methods/create', {
                cardNumber,
                cardName,
                expiryDate,
                cvv,
                id: user.id
            });
            
            console.log('Resposta do servidor:', response.data);
            
            // Limpar os campos após o envio
            setCardNumber('');
            setCardName('');
            setExpiryDate('');
            setCvv('');
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div className='payment-form'>
            <h2>Forma de Pagamento</h2>
            <h3>Métodos de Pagamento Salvos:</h3>
            <ul>
                {paymentMethods.map((method) => (
                    <li key={method.id}>{method.name}</li>
                ))}
            </ul>
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