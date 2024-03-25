import React from 'react'
import Link from "next/link"

import Navbar from '@/componets/Navbar/navbar';
import * as Icon from 'react-feather';

export default function Contacts() {
    return(
        <>
        <Navbar navClass="nav-light" />
        <section className="md:h-screen flex py-36 w-full items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage:"url('/images/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="container relative">
                <div className="lg:flex justify-center mt-12">
                    <div className="lg:w-11/12 bg-white dark:bg-slate-900 rounded-md shadow-lg dark:shadow-gray-800 overflow-hidden">
                        <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                            <div className="lg:col-span-7 md:col-span-6">
                                <div className="w-full leading-[0] border-0">
                                    <iframe title='google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11786.940749860985!2d30.576051522216353!3d46.49414039789354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c62dbceec12ee3%3A0x4c33b9bf2fcade7e!2zU1RPLVRJUiBUS0FDSCAo0YDQtdC80L7QvdGCINCz0YDRg9C30L7QstGL0YUg0LDQstGC0L7QvNC-0LHQuNC70LXQuSDQstGB0LXRhSDQvNCw0YDQvtC6KQ!5e0!3m2!1sen!2sby!4v1711371867460!5m2!1sen!2sby" style={{ "border": "0" }} className="w-full lg:h-[540px] md:h-[600px] h-[200px]" allowFullScreen></iframe>
                                </div>
                            </div>

                            <div className="lg:col-span-5 md:col-span-6">
                                <div className="p-6">
                                    <h3 className="mb-6 text-2xl leading-normal font-medium">Наши контакты и расположение</h3>

                                    <div className="flex items-center mt-6">
                                        <Icon.Mail className="w-6 h-6 me-4"></Icon.Mail>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Email</h5>
                                            <Link href="/mailto:tkachobus@gmail.com" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">tkachobus@gmail.com</Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center mt-6">
                                        <Icon.Phone className="w-6 h-6 me-4"></Icon.Phone>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Телефоны</h5>
                                            <Link href="/tel:+380 50 336 5480" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">+380 50 336 5480</Link><br />
                                            <Link href="/tel:+380 50 390 3940" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">+380 50 390 3940</Link><br />
                                            <Link href="/tel:+380 97 296 7279" className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500">+380 97 296 7279</Link>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center mt-6">
                                        <Icon.MapPin className="w-6 h-6 me-4"></Icon.MapPin>
                                        <div className="">
                                            <h5 className="title font-bold mb-0">Как нас найти</h5>
                                            <Link href="https://www.google.com/maps?ll=46.494056,30.563373&z=13&t=m&hl=en&gl=BY&mapclient=embed&cid=5490936601486483070" target="_blank" data-type="iframe" className="video-play-icon relative inline-block font-semibold tracking-wide align-middle ease-in-out text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:transition-all after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 transition duration-500 lightbox">Открыть Google карту</Link>
                                        </div>
                                    </div>


                                </div>
                                <br /><br /><br /><br /><br />
                                <div className="flex justify-center text-center p-6 border-t border-gray-100 dark:border-gray-800">
                                    <p className="mb-0 text-slate-400">© {new Date().getFullYear()} developed by  <Link href="https://zaitsau.pro/" target="_blank" className="text-reset">Nick Zaitsau</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div className="fixed bottom-3 end-3">
            <Link href="/"  className="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-full"><Icon.ArrowLeft className="size-4"></Icon.ArrowLeft></Link>
        </div>
    </>
    )
}