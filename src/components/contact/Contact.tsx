import * as React from 'react';
import { scrollToHeight } from '../../js/navigation';
import { Pages } from '../main/Pages';
import "./Contact.scss";

function Contact(props: any) {
  return (
    <div className="contact-container"
        style={{height: props.height}}
    >
        <div className="contact-title">
            CONTACT
        </div>

        <form className="contact-form"
            method="post" 
            action="https://forms.un-static.com/forms/1120de76e2c5b4d51a64958b1a5c0ca95d39267c"
            //onSubmit={(event) => {event.preventDefault(); console.log("aweawef")}}
        >
            <input className="contact-form-input"
                id="input-name"
                type="text"
                name="name"
                placeholder="Subject"
            />

            <input className="contact-form-input"
                id="input-email"
                type="email"
                name="email"
                placeholder="Your Email"
            />

            <textarea className="contact-form-text-area" 
                name="message"
            />

            {/* <input type="file" /> */}

            <input className="contact-form-submit"
                id="contact-form-submit"
                type="submit"
                value="SUBMIT"
            />
        </form>

        <footer className="contact-footer"></footer>

        <div className="back-to-top" 
            onClick={() => scrollToHeight(parseInt(Pages.HOME.height), true)}
        />
    </div>
  );
}

export default Contact;