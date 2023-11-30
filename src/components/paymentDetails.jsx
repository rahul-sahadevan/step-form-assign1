import { useContext, useState } from "react"
import FormContext from "../context/formContext";
import { useNavigate } from "react-router-dom";


function PaymentDetails(){
    // useState variables---------------------------
    const [type,setType] = useState('Debit/Credit Cards')
    const [amount,setAmount] = useState(0);
    const [cardNo,setCardNo] = useState('');

    const navigate = useNavigate()

    // personalPayment function ------------------------
    const {payment,personalPayment} = useContext(FormContext);
    console.log(payment)

    // function for submition handling----------------
    const handleSubmit =()=>{
        event.preventDefault()
        if(type === 'Debit/Credit Cards' && cardNo.length < 16){
            alert('invalid card number need 16digits!')
        }
        else{
            personalPayment(type,amount,cardNo)
            navigate('/alldetails')
            alert('Payment Succesfull!')

        }
    }


// payment form---------------------
    return (
        <div>
            <h1>Payment Details</h1>
            <form onSubmit={handleSubmit}>
                <label>Type of Payment</label>
                <select onChange={(e)=>setType(e.target.value)} >
                    <option>Debit/Credit Cards</option>
                    <option>UPI</option>
                </select>

                <label>Amount</label>
                <input type="number" 
                    onChange={(e)=>setAmount(e.target.value)} 
                    placeholder="Amount" required>
                </input>
                {
                    type === 'Debit/Credit Cards' ? (
                        <>
                            <label>Card Number</label>
                            <input type="password" 
                                onChange={(e)=>setCardNo(e.target.value)} 
                                placeholder="Enter 16 digit number" required>
                            </input>
                        </>

                    ):
                    (
                        <img 
                            src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png">
                        </img>
                    )
                }
                <button type="submit">Pay</button>

            </form>

        </div>
    )
}

export default PaymentDetails