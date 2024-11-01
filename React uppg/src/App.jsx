import './assets/css/style.css'
import Brands from './components/Brands'
import ClientPageReviews from './components/ClientPageReviews'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MoneyTransfer from './components/MoneyTransfer'
import Questionair from './components/Questionair'
import ReceivePayments from './components/ReceivePayments'
import Transactions from './components/Transactions'

function App() {
  

  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Features />
      <Transactions />
      <MoneyTransfer />
      <ReceivePayments />
      <ClientPageReviews />
      <Questionair />
      <Footer />
    </>
  )
}

export default App
