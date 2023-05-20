import React, { useState } from 'react';
import './AddressForm.css';

function AddressForm() {
  // Dados pré-preenchidos do usuário
  const [city, setCity] = useState('New York');
  const [street, setStreet] = useState('123 Main St');
  const [neighborhood, setNeighborhood] = useState('Downtown');
  const [zipcode, setZipcode] = useState('10001');
  const [country, setCountry] = useState('United States');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  };

  const handleNeighborhoodChange = (event) => {
    setNeighborhood(event.target.value);
  };

  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // chamar back
    console.log('Dados do endereço:', {
      city,
      street,
      neighborhood,
      zipcode,
      country,
    });
  };

  return (
    <div className='address-form'>
        <h2>Endereço de Entrega</h2>
        <form onSubmit={handleSubmit}>
            <label>
            Cidade:
            <input
                type="text"
                value={city}
                onChange={handleCityChange}
            />
            </label>
            <label>
            Rua:
            <input
                type="text"
                value={street}
                onChange={handleStreetChange}
            />
            </label>
            <label>
            Bairro:
            <input
                type="text"
                value={neighborhood}
                onChange={handleNeighborhoodChange}
            />
            </label>
            <label>
            CEP:
            <input
                type="text"
                value={zipcode}
                onChange={handleZipcodeChange}
            />
            </label>
            <label>
            País:
            <input
                type="text"
                value={country}
                onChange={handleCountryChange}
            />
            </label>
            <button type="submit">Confirmar Endereço</button>
        </form>
    </div>
  );
}

export default AddressForm;