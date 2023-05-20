import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PaymentForm.css';

function PaymentForm() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardName] = useState('');
    const [validDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [paymentMethods, setPaymentMethods] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('cart'));

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

    const totalPedidos = (cart) => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        console.log('TOTAL ------------------------')
        console.log(total)
        return total;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
        // gravar forma de pagamento
        console.log(user.id);
        const response = await axios.post('http://localhost:8080/payment-methods/create', {
            cardNumber,
            cardHolderName,
            validDate,
            cvv,
            user: user.id
        });
        console.log('CADASTRO FORMA PAGAMENTO - Resposta do servidor:', response.data);

        // gravar lista de produtos do pedido
        const response2 = await axios.post('http://localhost:8080/orders', {
            products: cart,
            date: new Date(),
            user: user.id,
            paymentMethod: response.data.id,
            status: 'READY',
            delivery: null,
            totalValue: totalPedidos(cart)
        });
        console.log('CADASTRO ORDEM - Resposta do servidor:', response2.data);

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
                value={cardHolderName}
                onChange={handleCardNameChange}
            />
            </label>
            <label>
            Data de Expiração:
            <input
                type="text"
                value={validDate}
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