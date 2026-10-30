import {NextResponse} from 'next/server';
export async function POST(request: Request){
  try{
    const {question}=await request.json();
    if(typeof question!=='string'||!question.trim())return NextResponse.json({error:'Soraty aloha ny fanontanianao.'},{status:400});
    if(question.length>1500)return NextResponse.json({error:'Ataovy fohy kokoa ny fanontaniana (latsaky ny 1500 tarehintsoratra).'}, {status:400});
    const key=process.env.OPENAI_API_KEY;
    if(!key)return NextResponse.json({error:'Mbola tsy voapetraka ny OPENAI_API_KEY amin’ny serveur. Ampio ao amin’ny hosting environment variables.'},{status:503});
    const response=await fetch('https://api.openai.com/v1/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':`Bearer ${key}`},body:JSON.stringify({model:'gpt-4o-mini',messages:[{role:'system',content:'You are a kind multilingual language tutor for the Ndao Hianatra Langue learning website. Explain clearly and briefly. The learner may write in Malagasy or French. Give examples and translations where useful. Never claim to be a human.'},{role:'user',content:question}],temperature:0.5}),cache:'no-store'});
    const data=await response.json();
    if(!response.ok)return NextResponse.json({error:data?.error?.message||'Tsy afaka namaly ny AI amin’izao.'},{status:502});
    const answer=data?.choices?.[0]?.message?.content;
    return NextResponse.json({answer:typeof answer==='string'?answer:'Tsy nahazo valiny.'});
  }catch{return NextResponse.json({error:'Nisy olana tamin’ny fangatahana AI.'},{status:500});}
}
