import 'dotenv/config';
import fetch from 'node-fetch';
let args = process.argv.slice(2);
let id = args[0];
const url = `https://api.assemblyai.com/v2/transcript/${id}`;

const params = {
    headers: {
        "authorization": process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
    },
    method: "GET"
};

function print(data) {
    switch(data.status) {
        case 'queued':
        case 'processing':
            console.log("processing");
            break;
        case 'completed':
            console.log(data.text);
            break;
        default:
            console.log(`Something went wrong: ${data.status}`);
            break;
    }
}

fetch(url, params)
    .then(response => response.json())
    .then(data => {
        print(data);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });