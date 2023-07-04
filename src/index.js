import './css/styles.css';
import './css/styles.css';
import { fetchExchangeRates } from './currency';

const form = document.getElementById('currencyForm');
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const amount = amountInput.value;
  const currency = currencySelect.value;

  try {
    const convertedAmount = await fetchExchangeRates(amount, currency);
    showResult(convertedAmount, currency);
  } catch (error) {
    showError(error.message);
    // eslint-disable-next-line no-console
    console.log(error);
  }
});

function showResult(amount, currency) {
  resultDiv.textContent = `${amount.toFixed(2)} ${currency}`;
}

function showError(message) {
  resultDiv.textContent = `Error: ${message}`;
}
