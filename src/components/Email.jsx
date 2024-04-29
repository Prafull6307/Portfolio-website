import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Email = () => {
  const [add, setAdd] = useState("");
  const [mail, setMail] = useState("");
  const [mess, setMess] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_riipsqf', 'template_d2v4dql', form.current, 'yeY6gLA93VTFd-QKE')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <h1 className="bg-yellow-200 text-center py-4 font-bold text-2xl underline">Contact Me</h1>
      <section className="container mx-auto py-9 flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4 bg-yellow-200">
        <div className="bg-black rounded-lg shadow-lg text-white text-center px-4 py-2 hover:bg-gray-800 transition duration-300 md:w-64">
          <i className="fab fa-whatsapp py-2 text-2xl"></i>
          <h1 className='text-lg'>Contact me on WhatsApp: <span className="font-bold text-yellow-400">8808032024</span></h1>
        </div>
        <div className="bg-black rounded-lg shadow-lg text-white text-center px-4 py-2 hover:bg-gray-800 transition duration-300 md:w-64">
          <i className="far fa-envelope py-2 text-2xl"></i>
          <h1 className='text-lg'>Contact me via Email: <span className="font-bold text-yellow-400">prafullps6307@gmail.com</span></h1>
        </div>
        <div className="bg-black rounded-lg shadow-lg text-white text-center px-4 py-2 hover:bg-gray-800 transition duration-300 md:w-64">
          <i className="fas fa-mobile-alt py-2 text-2xl"></i>
          <h1 className='text-lg'>Contact me on Mobile: <span className="font-bold text-yellow-400">8808032024</span></h1>
        </div>
        <div className="w-full flex justify-center py-4">
          <form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4 px-5 border-2 rounded-lg shadow-md mb-8 md:w-64 bg-yellow-200'>
            <input type="text" name="name" placeholder='Your Full Name' value={add} onChange={(e) => setAdd(e.target.value)} required className="rounded-lg bg-white p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 shadow-md" />
            <input type="email" name="email" placeholder='Your Email' value={mail} onChange={(e) => setMail(e.target.value)} required className="rounded-lg bg-white p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 shadow-md" />
            <textarea name="message" rows="7" placeholder='Your Message' value={mess} onChange={(e) => setMess(e.target.value)} required className="rounded-lg bg-white p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 shadow-md"></textarea>
            <button type="submit" className="btn-primary rounded-full bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium text-white py-1.5 w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 shadow-md">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Email;
