import { useNavigate } from "react-router-dom"
import countries from "./countries"
import { useContext, useState } from "react"
import FormContext from "../context/formContext"

 
 function AddressDetails(){
    // useState variable ---------------------
    const[address1,setAddress1] = useState('')
    const[address2,setAddress2] = useState('')
    const[city,setCity] = useState('')
    const[country,setCountry] = useState('')
    const[pincode,setPincode] = useState('')

    // useContext to get and dispatch values--------------
    const {address,personalAddress} = useContext(FormContext)
    console.log(address)

    const navigate = useNavigate()
    // function to handle submit-----------
    function handleSubmit(){
        if(pincode.length < 6 || pincode.length > 6){
            alert('Need 6 digit pincode!')
        }
        else{

            // calling the function to dispath the values-------------
            personalAddress(address1,address2,city,country,pincode)
            navigate('/payment')
        }

    }
// form for personal details----------------
    return (
        <div>
            <h1>Address Details</h1>
            <form onSubmit={handleSubmit}>
                <label>Address Line1:</label> 
                <input type="text" 
                    onChange={(e)=>setAddress1(e.target.value)} 
                    placeholder="address line1" required>    
                </input>

                <label>Address Line2:</label> 
                <input type="text" 
                    onChange={(e)=>setAddress2(e.target.value)} 
                    placeholder="address lin2" required>    
                </input>

                <label>City:</label> 
                <input type="text" 
                    onChange={(e)=>setCity(e.target.value)} 
                    placeholder="City" required>    
                </input>

                <label>Country:</label> 
                <select onChange={(e)=>setCountry(e.target.value)}>
                    {
                        countries.map((country)=>(
                            <option>
                                {country}
                            </option>
                        ))
                    }
                </select>

                <label >ZIP Number:</label> 
                <input type="number" 
                    onChange={(e)=>setPincode(e.target.value)} 
                    placeholder="Zip Code (6dig)" required>
                </input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }

  export default AddressDetails