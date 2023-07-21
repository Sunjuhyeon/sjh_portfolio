import React, {useState ,useEffect, useRef} from "react";
import contact from '../scss/contact.module.css';
import emailjs from '@emailjs/browser';


function Contact(props) {

    // 개인정보 약관 활성화//
    const [isChecked, setIsChecked] = useState(false);
    
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }
    const handleButtonClick = () => {
        if(!isChecked){
            alert("개인정보정책 약관에 동의해주세요");
        }else{
            alert("메일이 전송되었습니다! 빠른 회신 드리겠습니다")
        }
    }
    
    //submit시 이메일로 데이터전송
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_donge', 'template_o9qtppm', form.current, '0QRf5iVdJ60_KDmIi')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <section id={props.id}>
            <div className={`py-5 container`}>
                <h2 className={`my-4 ${contact.name}`}>Contact ME!</h2>
                <div className={`${contact.sub}`}><p className={`mb-3`}>제안 직무를 선택해주세요</p></div>
                <div>
                    <form ref={form} onSubmit={sendEmail} name="contact" id={`${contact.form}`}>
                        <ul id="subform" className={`${contact.checkbox} p-0 row`}>
                            {
                                props.contactdb.checkbox.map((v, x) =>{
                                    return(
                                        <li key={x} className={`py-1 col-6 col-md-3 d-flex`}>
                                            <label className={`${contact.checkboxlist}`}>
                                                <input
                                                    type="checkbox"
                                                    name={v.name}
                                                    value={v.value}
                                                    className={`d-none`}
                                                />
                                                <div className={`${contact.iconBox}`}>
                                                    <span>{v.title}</span>
                                                </div>
                                            </label>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul id={`${contact.mainform}`} className={`p-0 m-0`}>
                                {
                                    props.contactdb.data.map((v, x) =>{
                                        return(
                                            <li key={x} className={`${contact.formsub}`}>
                                                <input
                                                    className={`${v.inputCls} ${contact.mainCls}`}
                                                    type={v.type}
                                                    placeholder={v.placeholder}
                                                    name={v.name}
                                                    required
                                                />
                                            </li>
                                        )
                                    })
                                }
                        </ul>
                        <div id={`${contact.policy}`}>
                            {
                                props.contactdb.policy.map((v, x) =>{
                                    return(
                                        <div key={x} className = {`${contact.formsub} ${v.liCls}`}>
                                            <input 
                                                className={`${v.inputCls}`}
                                                type={v.type}
                                                value={v.value}
                                                id={v.id}
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                            />
                                            <label for={v.for} className={v.labelCls}>{v.label}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            {
                                props.contactdb.submit.map((v, x) =>{
                                    return(
                                        <div key={x} className = {`${contact.formsub} ${v.liCls}`}>
                                            <input 
                                                className={`${v.inputCls} ${isChecked ? contact.submitTrue : contact.submitFlase}`}
                                                type={v.type}
                                                value={v.value}
                                                id={v.id}
                                                disabled={!isChecked}
                                                onClick={handleButtonClick}
                                            />
                                            <label for={v.for} className={v.labelCls}>{v.label}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;