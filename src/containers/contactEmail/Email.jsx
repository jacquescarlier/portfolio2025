import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import InputForm from '../../components/input/InputForm';


export default function Email() {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_11i6ecf', 'template_11i6ecf', form.current, 'e7n4vc_R24IMqBV8Y'
        )
            .then((result) => {
                alert('message sent successfully...', result);
                form.current.reset();
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <div className="contactForm" id="contact">
            <h2>Contact Form</h2>
            <form className='cf' ref={form} onSubmit={sendEmail}>
                <div className='half left cf'>
                    <InputForm
                        name="user_name"
                        type="text"
                        inputId="name"
                        placeHolder="Name"
                        autocomplete="off"
                        required="required"
                        ariaLabel="name"
                    />
                    <InputForm
                        name="user_email"
                        type="email"
                        placeHolder="Email address"
                        required="required"
                        ariaLabel="email"
                    />
                </div>
                <div className='half right cf'>
                    <textarea id="message" name='message' type='text' placeholder='Message' aria-labelledby="message" required ></textarea>
                </div>
                <InputForm
                    name="input-submit"
                    type="submit"
                    value="Submit"
                    inputId='input-submit'
                />
            </form>
        </div>);

}