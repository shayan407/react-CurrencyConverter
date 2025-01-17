import {useState} from 'react'
import useCurrencyInfo from '../hooks/CurrencyInfo';
import Input from '../components/Input';
import Button from '../components/Button';

const Currency = () => {
   const [amount, setAmount] = useState(1);
   const [from, setFrom] = useState('USD');
   const [to, setTo] = useState('PKR');
   const [convertedAmount, setConvertedAmount] = useState(0)

   let currencyInfo = useCurrencyInfo(from);
   let data = Object.keys(currencyInfo);

   let swap = () => {
    setFrom(to);
    setTo(from);
   };

   let convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
   };

  return (
    <>
    <h1>Currency Converter</h1>
    <p>Convert your desired amount into any currency from the dropdown</p>

    <div className="container">
        <Input 
          amount={amount}
          currencyOptions={data}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(amount) => setAmount(amount)}
        />
        <Button 
          onClick={swap}
        />
        <Input 
          amount={convertedAmount}
          currencyOptions={data}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          readOnly={true}
        />
    </div>
    <button onClick={convert} className='btn cursor-pointer bg-green-800 rounded-[4px]'>Convert</button>
    </>
  );
};

export default Currency;
