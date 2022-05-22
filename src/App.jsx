import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TranscationList } from './components/TranscationList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (

    <GlobalProvider >
      <button onClick={() => { window.open("https://github.com/Avicii786/react-expense-tracker", "_blank") }} className='forkme'>Fork Me</button>
      <Header></Header>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TranscationList />
        <AddTransaction />
      </div>
    </GlobalProvider>

  );
}

export default App;
