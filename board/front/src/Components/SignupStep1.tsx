
import { validateCheckStep1 } from "../apis/validate";
import '../css/signup.css'

interface FormData {
    service: boolean;
    personal: boolean;
}

// SignupStep1Props 인터페이스 정의
interface SignupStep1Props {
    next: () => void; // `next`는 함수로 가정
    formData: FormData;
    handleCheck: (type: string, isChecked: boolean) => void;
}

/**
* step1 : 약관동의
*/
 const SignupStep1: React.FC<SignupStep1Props> =({next , formData, handleCheck}) => {
 


    
    return (
      <div className='signup'>
        <h2>SHOPPY SIGNUP</h2>     
        <div>
          <h3>약관동의</h3>
          <p>회원가입에 필요한 약관에 동의합니다.</p>
        </div> 
        <div>
          <div>
            <input type="checkbox" 
                   onChange={(e) => handleCheck("all",e.target.checked)}
                  />
            <span>모두 동의합니다.</span>
          </div>
          <p className="all-agree">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facilis quidem dolores minus. Tenetur id quasi eaque itaque. Nisi reprehenderit error quasi aspernatur veritatis consequuntur ipsam molestias minima ratione magnam?
          </p>
        </div> 
        <div>
          <h4>서비스 약관 동의</h4>
          <textarea className="personal-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
          </textarea>
          <div >
            <input type="checkbox" 
                    name="sevice"
                    id="service"
                   checked={formData.service}
                   onChange={()=> handleCheck("service",formData.service)} 
                
                   />
            <span>동의합니다.</span>
          </div>
        </div>
        <div>
          <h4>개인정보 수집 및 이용 동의</h4>
          <textarea className="service-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rerum, explicabo cum dicta ad consequatur aliquam asperiores soluta eum recusandae aliquid, unde neque libero vel voluptas quos cupiditate rem. A!
          </textarea>
          <div>
            <input type="checkbox" 
                   name="personal"
                   id="personal"
                   checked={formData.personal}
                   onChange={()=>handleCheck("personal",formData.personal)}
               />
            <span>동의합니다.</span>
          </div>
        </div>
          <button className="step1-next-btn" type="button" onClick={()=>validateCheckStep1(next, formData)}>Next</button>
        </div>
      
    );
}

export default SignupStep1