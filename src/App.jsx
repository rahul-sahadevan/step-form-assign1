
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PersonalDetails from './components/personalDetails'
import AddressDetails from './components/addressDetails'
import PaymentDetails from './components/paymentDetails'
import AllDetails from './components/allDetails'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<PersonalDetails/>}></Route>
        <Route path='/address' element={<AddressDetails/>}></Route>
        <Route path='/payment' element={<PaymentDetails/>}></Route>
        <Route path='/alldetails' element={<AllDetails/>}></Route>
      </Routes>
    </div>
  )
}

export default App
