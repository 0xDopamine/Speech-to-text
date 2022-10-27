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

