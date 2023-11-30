import { useContext, useEffect } from "react"
import FormContext from "../context/formContext"
import { useNavigate } from "react-router-dom";


function AllDetails(){
// getting all the details -------------------
    const {personal,address,payment} = useContext(FormContext);
    console.log(personal,address,payment)
    const navigate = useNavigate()

// function to handle the refresh------------
    function handleHome(){
        navigate('/')
        window.location.reload()
    }

//   representing all the details ----------------- 
    return (
        <div>
            <h1>All Details</h1>
            <div className="alldetails-div">
                <h2>Name: {personal.firstName +" "+personal.lastName}</h2>
                <h2>Email: {personal.email}</h2>
                <h2>Date of Birth: {personal.dob}</h2>
                <h2>Mobile Number: {personal.phNo}</h2>
                <br></br>

                <h2>Address 1: {address.address1}</h2>
                <h2>Address 2: {address.address2}</h2>
                <h2>City: {address.city}</h2>
                <h2>Country: {address.country}</h2>
                <h2>Postal Code: {address.pincode}</h2>

                <br></br>
                {
                    payment.type != '' ? (
                        <h2>Payment Method: {payment.type}</h2>

                    ):
                    (
                        <p></p>
                    )
                }
                <h2>Amount: {payment.amount}</h2>
                <br></br>
                <button onClick={handleHome}>Go Home</button>
            </div>
        </div>
    )
}
export default AllDetails