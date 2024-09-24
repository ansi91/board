export const validateCheckStep1 = (next, formData) =>{
   
    
    if(!formData.service) {
        alert("서비스 약관에 동의해주세요")
        document.getElementById('service').style.outline='3px solid red';
    }else if(!formData.personal) {
        alert("개인정보 약관에 동의해주세요")
        document.getElementById('personal').style.outline='3px solid red';
    }else{
        next();
    }
    
    
}

export const changeEmailDomain = (e, refs, handleChange) =>{
    const name = e.target.value //emailDomain
    const value = e.target.value //naver.com

    if(value === "self"){
        refs.emailDomainRef.current.value = ""
        refs.emailDomainRef.current.focus()
    }else{
        refs.emailDomainRef.current.value = value
        handleChange(e)
    }
}

export const changePhoneNumber1 = (e, refs, handleChange) => {
    
    const value = e.target.value
    handleChange(e)
    
}


export const validateCheckStep2 = (refs,next) => {
    let checkFlag = true;
    if(refs.userIdRef.current){
        console.log(refs.userIdRef.current.value);
        
        
    }else{
        console.log("널값");
        
    }
    
        
    return checkFlag;
  }