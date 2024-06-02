
import React, { useState } from 'react';
import Nav from '@/components/Nav';
import '../app/globals.css'

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
 

    return (
        <div className="">
          <Nav></Nav>
            <h1 className="text-2xl font-bold mb-4">İletişim</h1>
            

            <form    className="max-w-lg mx-auto bg-slate-300 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">İsim</label>
                    <input
                        type="text"
                        name="name"
                        id="name"            
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"     
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Mesaj</label>
                    <textarea
                        name="message"
                        id="message"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"                    
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Gönder
                    </button>
                </div>
            </form>
            <div className="m-5 text-center">
                <h2 className="text-xl font-semibold mb-2">Firma İletişim Bilgileri</h2>
                <p><strong>Adres:</strong> Örnek Mahallesi, Örnek Sokak No: 123, 12345 İstanbul, Türkiye</p>
                <p><strong>Telefon:</strong> +90 212 123 45 67</p>
                <p><strong>Email:</strong> info@ornekfirma.com</p>
            </div>
        </div>
    );
}
