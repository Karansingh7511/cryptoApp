import React, { useState } from 'react';

function App() {
  const [coins, setCoins] = useState({
    bitcoin: { name: 'Bitcoin', value: 50000, quantity: 0 },
    doge: { name: 'DogeCoin', value: 0.3, quantity: 0 },
    ripple: { name: 'Ripple', value: 0.75, quantity: 0 },
  });
  const [total, setTotal] = useState(0);

  const updateQuantity = (coin, quantity) => {
    const updatedCoins = { ...coins };
    updatedCoins[coin].quantity = quantity;
    setCoins(updatedCoins);
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    for (const coin in coins) {
      totalPrice += coins[coin].value * coins[coin].quantity;
    }
    setTotal(totalPrice);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Crypto WebApp</h1>
      <div className="flex space-x-4">
        {Object.keys(coins).map((coin) => (
          <div key={coin} className="bg-yellow-500 p-4 h-[250px] w-[200px] rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{coins[coin].name}</h2>
            <p className="text-gray-600">Value: ${coins[coin].value}</p>
            <input
              type="number"
              placeholder="Qty"
              className="border border-gray-300 bg-black text-white rounded p-1 w-36"
              onChange={(e) => updateQuantity(coin, e.target.value)}
            />
            <button className="bg-blue-500 text-white rounded p-1 ml-2" onClick={calculateTotal}>
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Before Total: ${total}</h2>
      </div>
      <button
        className="bg-blue-500 text-white rounded p-1 mt-4"
        onClick={calculateTotal}
      >
        Calculate Total
      </button>
      <div className="mt-4">
        <h2 className="text-xl font-bold">After Total: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default App;
