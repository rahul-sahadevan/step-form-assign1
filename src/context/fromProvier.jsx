import { useEffect, useState } from "react";
import FormContext from "./formContext";

// constext provider to get the datas--------------
const FormProvider = ({children})=>{

    const[personal,setPersonal] = useState({})
    const[address,setAddress] = useState({});
    const[payment,setPayment] = useState({});

// personal details function-------------------
    const personalDetails = (firstName,lastName,email,dob,phNo)=>{
  
        setPersonal({...personal,
            firstName:firstName,
            lastName:lastName,
            email:email,
            dob:dob,
            phNo:phNo
        })
    }
// function for address details-------------------------
    const personalAddress = (address1,address2,city,country,pincode)=>{
        setAddress({...address,
            address1:address1,
            address2:address2,
            city:city,
            country:country,
            pincode:pincode
        })
    }
// function for payment details-------------------------
    const personalPayment = (type,amount,cardNo)=>{
        setPayment({
            ...payment,
            type:type,
            amount:amount,
            cardNo:cardNo
        })
    }

   
   


    return (
        <FormContext.Provider value={{
            personal,
            address,
            payment,
            personalDetails,
            personalAddress,
            personalPayment,
           
        }}>
            {children}
        </FormContext.Provider>
    )

}

export default FormProvider