import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContext from "../context/formContext";


function PersonalDetails(){
    // useState variables--------------------------
    const [firstName,setFName] = useState('');
    const [lastName,setLName] = useState('');
    const [email,setEmail] = useState('');
    const [dob,setDOB] = useState('');
    const [phno,setPhno] = useState('');

    // useContext------------------
    const {personal,personalDetails} = useContext(FormContext)
    console.log(personal)

    const navigate = useNavigate()

    // function for submit handling----------------
    const handleSubmit = (e)=>{
        event.preventDefault();
        if(phno.length < 10  || phno.length > 10){
            alert('Invalid Phone Number!')
        }
        else{
            personalDetails(firstName,lastName,email,dob,phno)
            navigate('/address')
        }
    }

    // personal details form-----------------------
    return (
        <div>
            <h1>Personal Details</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                    onChange={(e)=>setFName(e.target.value)} 
                    placeholder="First Name" required>                  
                </input>

                <input type="text" 
                    onChange={(e)=>setLName(e.target.value)} 
                    placeholder="Last Name" required>                  
                </input>

                <input type="email" 
                    onChange={(e)=>setEmail(e.target.value)} 
                    placeholder="Email" required>
                </input>

                <input type="date" 
                    onChange={(e)=>setDOB(e.target.value)} 
                    placeholder="Date of Birth" required>                  
                </input>

                <input type="number" 
                    onChange={(e)=>setPhno(e.target.value)} 
                    placeholder="Mobile Number(10dig)" required>                  
                </input>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PersonalDetails;