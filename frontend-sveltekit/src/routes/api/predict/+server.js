import fetch from 'node-fetch';
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { kinase, subtrade } = await request.json();
    console.log("INFO!!!", kinase, subtrade)
    // Make a request to your Flask server
    const flaskResponse = await fetch('http://localhost:5200/api/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kinase, subtrade }),
    });

    // Parse the response from the Flask server
    const prediction = await flaskResponse.json();

    // Return the prediction response from Flask
    return json(prediction);
}
