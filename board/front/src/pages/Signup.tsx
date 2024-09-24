import { useState } from "react"
import SignupStep1 from "../Components/SignupStep1"
import SignupStep2 from "../Components/SignupStep2"
import SignupStep3 from "../Components/SignupStep3"
export default function Signup(){





    const [step, setStep] =useState<number>(1)
    const [formData, setFormData] = useState({
        service:false,
        personal:false,
        userId:'',
        userPass:'',
        userPassCheck:'',
        userName:'',
        emailId:'',
        emailDomain:'',
        phoneNumber1:'010',
        phoneNumber2:'',
        zipcode:'',
        address:'',
        detailAddress:''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {name , value} = e.target
        setFormData({...formData, [name]:value})
       
        
    }

    const nextStep = () => {
        setStep(step + 1)
    
        
    }

    const preStep = () => {
        setStep(step - 1)
    }


    const handleCheck = (type : string , isChecked : boolean) => {
        if(type === "all"){
            setFormData({...formData, service:isChecked, personal:isChecked})
        }else{
            if(type === "service"){
            setFormData({...formData, [type]:!formData[type]});
            }else if(type === "personal"){
                setFormData({...formData, [type]:!formData[type]})
            }
        }
    }

    const handleAddress = (e: {zipcode : string; address : string}) => {
        setFormData({...formData, zipcode:e.zipcode, address : e.address})
    }

    
    return(
        <div className="content">
            {   step === 1 &&(
                <SignupStep1 next={nextStep}
                         formData={formData}
                         handleCheck={handleCheck}
                         />
             )}
             { step === 2 &&(
                <SignupStep2 pre={preStep}
                             next={nextStep}
                             formData={formData}
                             handleChange={handleChange}
                             handleAddress={handleAddress}/>
             )}

             {step === 3 && (
              <SignupStep3/>
             )}

        </div>
    )
}