
import { API_URL } from "./API_URL";

const URL = `${API_URL}/api/send-email`;

let 

export async function emailHandler() {

    console.log("got hewe");

    const res = await fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "fromName": "Allen",
            "from": "allenfarias29@gmail.com",
            "to": "store@store.com",
            "subject": "test title",
            "body": "this is a test body"
        })
    });
}
