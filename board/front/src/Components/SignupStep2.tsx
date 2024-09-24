import {changeEmailDomain,changePhoneNumber1,validateCheckStep2} from '../apis/validate.js'
import { useRef, useState } from 'react'
import DaumPostcode from 'react-daum-postcode'
interface FormData {
    service:boolean,
    personal:boolean,
    userId:string,
    userPass:string,
    userPassCheck:string
    userName:string,
    emailId:string,
    emailDomain:string,
    phoneNumber1:string,
    phoneNumber2:string,
    zipcode:string,
    address:string,
    detailAddress:string
}


interface SignupStep2Props{
    pre : () => void 
    next : () => void
    formData : FormData
    handleChange : (e : React.ChangeEvent<HTMLInputElement> ) => void
    handleAddress: (addressData: { zipcode: string; address: string }) => void;

    
}



 const SignupStep2:React.FC<SignupStep2Props> = ( {pre, next, formData, handleChange,handleAddress} ) =>{
   
    
    const refs = { //useRef 초기화
        userIdRef: useRef<HTMLInputElement>(null),
        userPassRef:  useRef<HTMLInputElement>(null),
        userPassCheckRef: useRef<HTMLInputElement>(null),
        userNameRef: useRef<HTMLInputElement>(null),
        emailIdRef: useRef<HTMLInputElement>(null),
        emailDomainRef: useRef<HTMLInputElement>(null),
        phoneNumber1Ref: useRef<HTMLInputElement>(null),
        phoneNumber2Ref :  useRef<HTMLInputElement>(null),
        zipcodeRef: useRef<HTMLInputElement>(null),
        addressRef: useRef<HTMLInputElement>(null),
        detailAddressRef: useRef<HTMLInputElement>(null),

    }

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleToggle = (type : React.MouseEvent<HTMLElement, MouseEvent>) => {
        setIsOpen(!isOpen);
        
        // switch(type){
        //   case 'dream' :
        //     // alert('dream');
        //     setIsOpen1(!isOpen1);
        //     break;
        //   case 'farm' :
        //     // alert('farm');
        //     setIsOpen2(!isOpen2);
        //     break;
        // }
      }

      const themeObj = {
        bgColor: '#FFFFFF', 
        pageBgColor: '#FFFFFF', 
        postcodeTextColor: '#C05850',
        emphTextColor: '#222222',
        
      };
      
      const postCodeStyle = {
        width: '360px',
        height: '480px',
        
      };

      
      

    const completeHandler = (data : {address : string; zonecode : string}) => {
        const { address, zonecode } = data;
        handleAddress({zipcode:zonecode, address:address});
      };
     const closeHandler = (state: 'FORCE_CLOSE' | 'COMPLETE_CLOSE') => {
    if (state === 'FORCE_CLOSE') {
        setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
        setIsOpen(false);
        const detailAddressInput = refs.detailAddressRef.current;
        if (detailAddressInput) {
            detailAddressInput.value = ""; // value 프로퍼티 설정
            detailAddressInput.focus();   // focus 메서드 호출
        }
    }
};


    const handleSubmit = () => {
        if(validateCheckStep2(refs)){
            console.log(11);
        
        }else{
            console.log(22);
           
        }
    }

    return (
        <div className="signup-step2-container">
            <h1>SHOPPY SIGNUP</h1>
            <h3>정보입력</h3>
            <p>회원가입에 필요한 정보를 입력합니다.</p>
            <ul className="signup-info">
                <li>아이디<span className="must-input">*</span>
                <input   className="id-input"
                         type="text" 
                         name="userId"
                         value={formData.userId}
                         onChange={handleChange}
                         ref={refs.userIdRef}/>
                </li>
                <li>
                    <span className="pw-label">비밀번호</span><span className="must-input">*</span>
                    <input  className="pw-input"
                            type="password"
                            name="userPw"
                            value={formData.userPass}
                            onChange={handleChange}
                            ref={refs.userPassRef}/>
                </li>
                <li>
                    <span className="pw-label2">비밀번호 확인</span><span className="must-input">*</span>
                    <input  className="pw-input-check"
                            type="password"
                            value={formData.userPassCheck}
                            name="userPw"
                            onChange={handleChange}
                            ref={refs.userPassCheckRef}/>
                </li>
                <li>
                    <span className="name-label">이름</span><span className="must-input">*</span>
                    <input  className="name-input"
                            type="userName"
                            value={formData.userName}
                            name="userPw"
                            onChange={handleChange}
                            ref={refs.userNameRef}/>
                </li>
                <li>
                    <span className="email-label">이메일</span><span className="must-input">*</span>
                    <input  className="email-input"
                            type="text"
                            value={formData.emailId}
                            name="emailId"
                            onChange={handleChange}
                            /> @
                    <input  className="email-input"
                    type="text"
                    value={formData.emailDomain}
                    name="emailDomain"
                    onChange={handleChange}
                    ref={refs.emailDomainRef}/>
                    <select name="emailDomain" onChange={(e)=>changeEmailDomain(e,refs, handleChange)}>
                        <option value="self">직접입력</option>
                        <option value="naver">naver.com</option>
                        <option value="google">gmail.com</option>
                    </select>
                </li>
                <li>
                    <span className="phone-label">전화번호</span><span className="must-input">*</span>
                    <select name="phoneNumber1" 
                            value={formData.phoneNumber1}
                            onChange={(e)=>changePhoneNumber1(e,refs,handleChange)}
                           >
                        <option value="010">010</option>
                        <option value="011">011</option>
                        <option value="016">016</option>
                    </select>
                    <input type="text"
                           name="phoneNumber2"
                           value={formData.phoneNumber2}
                           onChange={handleChange}
                           ref={refs.phoneNumber2Ref}
                           
                    />
                </li>
                <li>
                <p>주소</p>
                    <input type="text"
                            name="zipcode"
                            value={formData.zipcode}
                            ref={refs.zipcodeRef}
                            onChange={handleChange}
                    />
                     <button type="button" onClick={handleToggle} >찾기</button>
                </li>
                <li>
                    <p>상세주소</p>
                    <input type="text"
                            name="address"
                            value={formData.address}
                            ref={refs.addressRef}
                            onChange={handleChange}
                            
                    />
                      <input type="text"
                            name="detailAddress"
                            value={formData.detailAddress}
                            ref={refs.detailAddressRef}
                            onChange={handleChange}
                            
                    />
                    
                </li>
                
            </ul>
           
                  
                     {isOpen &&
                    <div className="post-code">
                    <DaumPostcode className="postmodal"
                                   onComplete={completeHandler}
                                        onClose={closeHandler}
                                        theme={themeObj}
                                        style={postCodeStyle}/>
                  
                    </div>
                    
                    }
            <button onClick={pre}>이전</button>
            <button onClick={handleSubmit}>다음</button>
        </div>
    )
}

export default SignupStep2