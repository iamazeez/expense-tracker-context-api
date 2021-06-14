import './App.css';
import { Header, Balance, IncomeExpenses, Transaction, Addtransaction } from './component/index';
import { GlobalProvider } from './context/GlobalContext';

function App() {

  return (
    <GlobalProvider >
      <Header />
      <div className='container'>
           <Balance />
           <IncomeExpenses />
           <Transaction />
           <Addtransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
