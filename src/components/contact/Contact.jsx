import React, {useRef} from 'react';
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {RiMessageLine} from "react-icons/ri";
import {BsTelegram} from "react-icons/bs";
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cina22s', 'template_5g98q1a', form.current, 'dQA-BReLKyiFABhtG');
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>ulugbekkhan94@mail.ru</h5>
                        <a href="mailto:khonimovulugbek@gmail.com">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessageLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5></h5>
                        <a href="https://www.facebook.com/ulugbek.khanimov">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsTelegram className='contact_option-icon'/>
                        <h4>Telegram</h4>
                        <h5>@Senior_khan</h5>
                        <a href="https://t.me/Senior_khan">Send a message</a>
                    </article>
                </div>
                {/*{ END OF CONTACT OPTIONS}*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="text" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows='7' placeholder='Your Message' required/>
                    <button type='submit' className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;