import 'dotenv/config';
import fetch from 'node-fetch';
const url = 'https://api.assemblyai.com/v2/transcript';

let args = process.argv.slice(2);
let audioUrl = args[0];

const data = {
    "audio_url" : audioUrl
};

const params = {
    headers: {
        "authorization": process.env.ASSEMBLYAI_API_KEY,
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST"
};

fetch(url, params)
    .then(response => response.json())
    .then(data => {
        console.log(data.id);
    })
    .catch((error) => {
        console.error('Error: ', error);
    });