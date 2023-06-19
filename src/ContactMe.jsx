
import { useState } from "react";

import { API_URL as DOMAIN } from "./API_URL";
// API url to post to an email handler
// credentials won't be displayed in the
// front end
const URL = `${DOMAIN}/api/send-email`;

const ContactMe = () => {

    const [details, setDetails] = useState({
        from: '',
        email: '',
        subject: '',
        message: ''
    })
    // pending is used to determine if the email has been sent
    const [isPending, setIsPending] = useState(false);


    const emailHandler = async () => {

        // replaced with react hook useState()
        /* 
            let fromName = document.getElementById('from-name').value;
            let email = document.getElementById('email').value;
            let subject = document.getElementById('subject').value;
            let message = document.getElementById('message').value; 
        */
        setIsPending(true);
        
        
    
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "fromName": details.from,
                "from": details.email,
                "to": "",
                "subject": details.subject,
                "body": details.message
            })
        })
        .then(response => {
            if(response.ok) {
                alert('Successfully sent email');
            } else if(!response.ok) {
                alert('Could not send email');
            }
        })
        .catch (e => {
            alert(e?.response);
        });

        setIsPending(false);
        
        setDetails({
            from: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return ( 
        <div className='contact-me-background'>
            <h2 id='contact'>Contact Me</h2>
            <div className='form'>

            <div className='form-input'>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="from-name" className='all-input' 
                onChange={(e) => setDetails({...details, from: e.target.value})} value={details.from} required/>
            </div>

            <div className='form-input'>
                <label htmlFor="email">Email:</label>
                <input type="email" name='email' id='email' className='all-input' 
                onChange={(e) => setDetails({...details, email: e.target.value})} value={details.email} required />
            </div>

            <div className='form-input'>
                <label htmlFor="subject" >Subject:</label>
                <input type="text" name="subject" id="subject" className='all-input' 
                onChange={(e) => setDetails({...details, subject: e.target.value})} value={details.subject} required />
            </div>
                
            <div className='form-input'>
                <label htmlFor="message">Message:</label>
                <textarea name='message' id='message' className='all-input' 
                onChange={(e) => setDetails({...details, message: e.target.value})} value={details.message} required />
            </div>

            <div>
                {!isPending && <button type="submit" className='def-button' onClick={ () => emailHandler() }>Submit</button>}
                {isPending && <button type="submit" className='def-button'>...Waiting</button>}
            </div>
            
            </div>

        </div>
     );
}

export {ContactMe};