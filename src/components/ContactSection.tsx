// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send } from 'lucide-react';

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
  
//   const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setFormStatus('submitting');
    
//     // Simulate form submission
//     setTimeout(() => {
//       console.log('Form submitted:', formData);
//       setFormStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//       });
      
//       // Reset form status after 3 seconds
//       setTimeout(() => {
//         setFormStatus('idle');
//       }, 3000);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
//       <div className="container mx-auto px-6 md:px-12">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
//               Get in Touch
//             </h2>
//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//               Have a project in mind or want to discuss a collaboration? Feel free to reach out and I'll get back to you soon.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
//             <div className="lg:col-span-2 space-y-8">
//               <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                
//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
//                       <Mail size={20} />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
//                       <p className="text-gray-900 dark:text-white">hello@davidhckh.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
//                       <Phone size={20} />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
//                       <p className="text-gray-900 dark:text-white">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
                  
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
//                       <MapPin size={20} />
//                     </div>
//                     <div className="ml-4">
//                       <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
//                       <p className="text-gray-900 dark:text-white">San Francisco, CA</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
//                 <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="#" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="lg:col-span-3">
//               <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
//                       placeholder="john.doe@example.com"
//                     />
//                   </div>
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Subject
//                   </label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     required
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
//                     placeholder="Project Inquiry"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
//                     placeholder="Tell me about your project..."
//                   />
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={formStatus === 'submitting'}
//                   className="w-full px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
//                 >
//                   {formStatus === 'submitting' ? (
//                     <span className="flex items-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-black\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
//                         <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </span>
//                   ) : formStatus === 'success' ? (
//                     <span className="flex items-center">
//                       <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//                       </svg>
//                       Message Sent!
//                     </span>
//                   ) : (
//                     <span className="flex items-center">
//                       <Send className="w-5 h-5 mr-2" />
//                       Send Message
//                     </span>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

























'use client';

import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactSection = () => {
  const [state, handleSubmit] = useForm("mgvydkoz");

  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a collaboration? Feel free to reach out and I'll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                      <p className="text-gray-900 dark:text-white">chennashivaganesh@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      <p className="text-gray-900 dark:text-white">++91 8187092421</p>
                    </div>
                  </div>

                 
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-black dark:bg-white rounded-full text-white dark:text-black">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      <p className="text-gray-900 dark:text-white">Warangal , Telangana</p>
                    </div>
                  </div>
                </div>
              </div>


    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Connect
      </h3>
      <div className="flex space-x-4">
        <a
          href="https://x.com/chennashivagan2"
            target="_blank"

          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/chennashivaganesh/"
            target="_blank"

          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
         
        <a
          href="https://www.instagram.com/shivaganesh_chenna/"
            target="_blank"

          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-black hover:dark:bg-white hover:text-white hover:dark:text-black transition-colors duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a href="https://github.com/shivaganesh05/"   target="_blank"
 className="text-gray-500  hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-9 h-9" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
      </div>
    </div>


            </div>

            <div className="lg:col-span-3">
              {state.succeeded && (
                <p className="text-green-500 text-center mb-4 text-lg font-medium">
                  Thanks for your message! I'll get back to you soon.
                </p>
              )}

              <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="Enter Name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                      placeholder="Enter Mail id"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Subject "
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                    placeholder="Write Message"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-6 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
                >
                  {state.submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
