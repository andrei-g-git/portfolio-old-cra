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
            onSubmit={(event) => {event.preventDefault(); console.log("aweawef")}}
        >
            <input className="contact-form-input"
                id="input-email"
                type="email"
            />

            <input className="contact-form-input"
                id="input-name"
                type="text"
            />

            <textarea className="contact-form-text-area" />

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