// import {useId} from 'react'

function Input({
  // label,
  amount,
  onAmountChange,
  selectCurrency = "usd",
  currencyOptions = [],
  onCurrencyChange,
  readOnly
}) {
  return (
    <>
      <div className="currency">
        <input
          type="number"
          placeholder="0"
          className="outline-none bg-white py-1.5"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          readOnly={readOnly}
        />
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      
      
    </>
  );
}

export default Input;
