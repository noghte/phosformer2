import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { a, b } = await request.json();
    const score = a + b;
    return json({
        confidence: score,
        result: score > 0.5 ? 'Positive' : 'Negative'
    });
}