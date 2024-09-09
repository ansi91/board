import { useState } from "react"
import SignupStep1 from "../Components/SignupStep1"

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


    return(
        <div className="content">
            {   step === 1 &&(
                <SignupStep1 next={nextStep}
                         formData={formData}
                         handleCheck={handleCheck}
                         />
             )}

        </div>
    )
}