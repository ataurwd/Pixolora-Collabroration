import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#17221D] pt-32 pb-5'>
           <div className='max-w-[1400px] mx-auto'>
            <div className='flex flex-col justify-center items-center border-b-[0.5px] border-gray-700 pb-20'>
                <h3 className='text-white text-2xl pb-4'>¿Necesitas algún servicio de transporte?</h3>
                <h1 className='text-white text-9xl uppercase font-bold underline'>Contáctanos</h1>
            </div>
            <div className='py-5 grid grid-cols-1 lg:grid-cols-3'>
                <div className='text-white border-b-[0.5px] border-gray-700'><p className='text-2xl pb-5 '>Say Hello</p>
                <p className='pb-8'>contact@pbmit.com</p>
                 <p className='text-2xl'>+(02) 574 - 328 - 301</p>
                </div>
                <div className='text-white border-b-[0.5px] border-l-[0.5px] border-r-[0.5px] border-gray-700 flex flex-col'>
                    <img className='w-[300px] mx-auto' src="https://i.ibb.co.com/7xjs7YjB/Expresur-02-1-removebg-preview.webp" alt="" />

                    <input className='p-4 mt-5 bg-transparent border-gray-700 border-[1px] rounded-md mx-auto' type="text" placeholder='Enter Address' />
                    <p className='text-center py-10'>By subscribing, you’re accept Privacy Policy</p></div>
                <div className='text-white border-b-[0.5px] border-gray-700 flex p-5'>
                    <div className='pr-5'>
                        <p className='text-2xl pb-5'>My account</p>
                        <ul className='flex flex-col gap-4'>
                            <li>Contáctanos</li>
                            <li>Página de Preguntas Frecuentes</li>
                            <li>Ponte en Contacto</li>
                            <li>Red Global</li>
                            <li>Soporte 24/7</li>
                        </ul>
                    </div>
                    <div>
                        <p className='text-2xl pb-5'>Service</p>
                        <ul className='flex flex-col gap-4'>
                            <li>Solicitar un Envío</li>
                            <li>Nuestros Servicios</li>
                            <li>Lo Que Hacemos</li>
                            <li>Carrito Abandonado</li>
                            <li>Envíos</li>
                            <li>Pricing Flexibility</li>
                        </ul>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Footer;