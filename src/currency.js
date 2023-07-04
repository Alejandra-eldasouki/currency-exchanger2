const API_KEY = 'YOUR_API_KEY';
const API_URL = `https://api.exchangerate-api.com/v4/latest/USD`;

export async function fetchExchangeRates(amount, currency) {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates.');
    }
    const data = await response.json();
    if (data.result === 'error') {
      throw new Error(data['error-type']);
    }
    const rates = data.rates;
    if (rates && currency in rates) {
      const rate = rates[currency];
      const convertedAmount = amount * rate;
      return convertedAmount;
    } else {
      throw new Error(`Currency ${currency} does not exist.`);
    }
  } catch (error) {
    throw new Error('An error occurred while fetching the exchange rates.');
  }
}
