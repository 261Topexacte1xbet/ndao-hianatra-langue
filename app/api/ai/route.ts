import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    const data = await response.json();
    const aiReply = data.choices[0]?.message?.content || "Tsy nahazo valiny avy amin'ny AI";

    return NextResponse.json({ success: true, data: aiReply });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Nisy olana tamin'ny fifandraisana tamin'ny AI" }, { status: 500 });
  }
}
