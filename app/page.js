'use client';
import PageTransition from '../../components/PageTransition';
import { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

export default function Contact(){
  const [sent, setSent] = useState(false);
  async function onSubmit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = { name: form.get('name'), email: form.get('email'), message: form.get('message') };
    // send to Supabase (if configured)
    try{
      if(process.env.NEXT_PUBLIC_SUPABASE_URL){
        await supabase.from('contacts').insert([payload]);
      } else {
        await fetch('https://formspree.io/f/{your_form_id}', { method: 'POST', body: form });
      }
      setSent(true);
    }catch(err){
      console.error(err);
      alert('Error submitting');
    }
  }

  return (
    <main className="pt-28">
      <PageTransition>
        <section className="container mx-auto px-6 md:px-12 py-16 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300 mb-6">Interested in working together? Send a note — I reply quickly.</p>
          {!sent ? (
            <form className="space-y-4" onSubmit={onSubmit}>
              <input type="hidden" name="_subject" value="New contact from Kdesa site" />
              <div><label className="text-sm text-gray-300">Name</label><input name="name" required className="w-full mt-2 p-3 rounded-md bg-neutral-950/30 border border-white/6" /></div>
              <div><label className="text-sm text-gray-300">Email</label><input name="email" type="email" required className="w-full mt-2 p-3 rounded-md bg-neutral-950/30 border border-white/6" /></div>
              <div><label className="text-sm text-gray-300">Message</label><textarea name="message" required className="w-full mt-2 p-3 rounded-md bg-neutral-950/30 border border-white/6" rows={6} /></div>
              <button type="submit" className="inline-flex items-center gap-3 bg-white/6 px-5 py-3 rounded-full">Send message</button>
            </form>
          ) : (
            <div className="p-6 card">
              <h4 className="font-semibold">Thanks — message sent</h4>
              <p className="text-gray-400">I'll get back to you shortly. Meanwhile you can also reach me at <a href="mailto:hello@kdesa.dev" className="text-blue-400">hello@kdesa.dev</a>.</p>
            </div>
          )}
        </section>
      </PageTransition>
    </main>
  )
}
