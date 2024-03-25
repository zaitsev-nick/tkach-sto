import React from 'react'
import Link from "next/link"
import Image from "next/image"

import Navbar from '@/componets/Navbar/navbar'
import Footer from '@/componets/Footer/smallFooter'
import Switcher from '@/componets/switcher'
import Blog from '@/componets/blog'
import Counter from '@/componets/charity/counter'
import Cta from '@/componets/charity/cta'

import * as Icon from 'react-feather';
import { PiTruckDuotone } from "react-icons/pi";
import { ourCausesData, teamData } from '@/Data/data'

export default function Home(){
    return(
        <>
        <Navbar navClass="nav-light"/>

        <section className="relative lg:py-44 py-36 bg-center bg-cover" style={{backgroundImage:"url('/images/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-slate-900/50"></div>
            <div className="container relative z-1">
                <div className="grid md:grid-cols-12 grid-cols-1 mt-10 gap-[30px]">
                    <div className="lg:col-span-7 md:col-span-6">
                        <div className="md:me-6">
                            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">TIR TKACH <br /> Грузовой автосервис </h4>
                            <p className="text-white/75 text-lg max-w-xl">Полный спектр ремонтных работ для грузовых автомобилей в Одессе. Работаем со всеми марками и модификациями.</p>

                            <div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Услуги СТО</Link>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 md:col-span-6">
                        <div className="p-6 rounded-lg border-t-8 border-indigo-600 bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800">
                            <div className="mb-6 text-center">
                                <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">Предварительная запись</h4>
                                <p className="text-slate-400">Your $40.00 monthly donation can give 12 people clean water every year. 100% funds water projects.</p>
                            </div>

                            <form>
                                <div className="grid grid-cols-1">
                                    <div>
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div className="mb-5">
                                                <label className="form-label font-medium">Ваше Имя: <span className="text-red-600">*</span></label>
                                                <input type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Имя" name="name" required />
                                            </div>

                                            <div className="mb-5">
                                                <label className="form-label font-medium">Телефон: <span className="text-red-600">*</span></label>
                                                <input type="text" className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Телефон" name="phone" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Хочу записаться на</label>
                                        <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                                            <option value="Donate For Food">Donate For Food</option>
                                            <option value="Food For Orphan">Food For Orphan</option>
                                            <option value="Home For Homeless">Home For Homeless</option>
                                            <option value="Holyday Gifts In Kind">Holyday Gifts In Kind</option>
                                            <option value="For clean Water in Africa">For clean Water in Africa</option>
                                            <option value="Health and Rights">Health and Rights</option>
                                        </select>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label font-medium">Марка автомобиля</label>
                                        <div className="relative mt-2">
                                            <span className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded" id="basic-addon1"><PiTruckDuotone className="w-5 h-5"/></span>
                                            <input type="text" className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0" placeholder="Марка \ Модификация" id="auto" aria-describedby="inputGroupPrepend" />
                                        </div>
                                    </div>



                                    <div className="mb-5">
                                        <input type="submit" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full" value="Donate Now" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
                    <div className="md:col-span-6">
                        <div className="lg:me-8">
                            <Image src="/images/charity/about.jpg" width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="rounded-full shadow-lg dark:shadow-gray-800" alt="" />
                        </div>
                    </div>

                    <div className="md:col-span-6">
                        <div className="lg:ms-8">
                            <h6 className="text-indigo-600 text-sm font-bold uppercase mb-2">About Us</h6>
                            <h3 className="mb-3 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Highest Ambition <br /> is to Help People</h3>
                            <h3 className="mb-4 text-lg leading-normal font-semibold">Our programs contribute to peace and development through volunteerism worldwide. Take part in changing the lives of young people across the world.</h3>

                            <p className="text-slate-400 max-w-xl mb-6">We’re focused on providing affordable volunteer travel experiences that are responsible. Our programs heighten global awareness and cultural understanding through the skills and expertise taken by volunteers to their host communities, and through the experiences and lessons that volunteers take back to their own countries and cultures.</p>

                            <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Our Causes</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Techwind that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">

                    {ourCausesData.map((item,index)=>{
                        return(
                            <div key={index} className="group relative rounded hover:-mt-1 shadow hover:shadow-md dark:shadow-gray-800 overflow-hidden transition-all duration-300">
                                <div className="relative overflow-hidden">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} alt="" />
        
                                    <div className="absolute p-4 start-0 end-0 text-center bg-slate-900/80 -bottom-24 group-hover:bottom-0 transition-all duration-300">
                                        <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Donate Now</Link>
                                    </div>
                                </div>
        
                                <div className="p-6">
                                    <Link href="#" className="hover:text-indigo-600 text-lg font-semibold">{item.title}</Link>
                                    <p className="text-slate-400 mt-2">{item.desc}</p>
        
                                    <div className="mt-3">
                                        <div className="flex justify-between mb-2">
                                            <span className="text-slate-400">Progress</span>
                                            <span className="text-slate-400">{item.Progress}</span>
                                        </div>
                                        <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                                            <div className="bg-indigo-600 h-[6px] rounded-full" style={{ "width": `${item.Progress}` }}></div>
                                        </div>
                                        <ul className="flex list-none justify-between mt-3 mb-2">
                                            <li className="font-semibold">
                                                <span className="text-indigo-600">Raised: </span>
                                                <span>{item.Raised}</span>
                                            </li>
                                            <li className="text-indigo-600 font-semibold">
                                                <span>Goal: </span>
                                                <span>{item.Goal}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  
                        )
                    })}
                </div>
            </div>
        </section>

        <Cta/>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">Meet Our Volunteers</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">Start working with Tailwind CSS that can provide everything you need to generate awareness, drive traffic, connect.</p>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-8 gap-[30px]">
                    {teamData.slice(0,4).map((item,index)=>{
                        return(
                            <div key={index} className="lg:col-span-3 md:col-span-6">
                                <div className="group text-center">
                                    <div className="relative inline-block mx-auto size-52 rounded-full overflow-hidden">
                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:"100%",height:"auto"}} className="" alt="" />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black size-52 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></div>

                                        <ul className="list-none space-x-1 absolute start-0 end-0 -bottom-20 group-hover:bottom-5 transition-all duration-500 ease-in-out">
                                            <li className="inline"><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Facebook className="size-4"></Icon.Facebook></Link></li>
                                            <li className="inline"><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Instagram className="size-4"></Icon.Instagram></Link></li>
                                            <li className="inline"><Link href="#" className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-indigo-600 bg-indigo-600 hover:border-indigo-600 hover:bg-indigo-600 text-white"><Icon.Linkedin className="size-4"></Icon.Linkedin></Link></li>
                                        </ul>
                                    </div>
                                    <div className="content mt-3">
                                        <Link href="#" className="text-lg font-semibold hover:text-indigo-600 transition-all duration-500 ease-in-out">{item.name}</Link>
                                        <p className="text-slate-400">{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="container relative md:pb-24 pb-16" >
            <Blog/>
        </section>
        <Footer/>
        <Switcher/>
        </>
    )
}