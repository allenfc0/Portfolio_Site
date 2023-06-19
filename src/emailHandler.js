
import { useState } from "react";

import { API_URL } from "./API_URL";
// API url to post to an email handler
// credentials won't be displayed in the
// front end
const URL = `${API_URL}/api/send-email`;



export async function emailHandler() {
    let fromName = document.getElementById('from-name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    

    const res = await 
    fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "fromName": fromName,
            "from": email,
            "to": "",
            "subject": subject,
            "body": message
        })
    })
    .then(alert)
    .catch (e => {
        alert(e);
    });
}
