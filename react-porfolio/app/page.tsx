import Head from 'next/head'
import Image from 'next/image'
import maluks from '../public/Tumi.jpg'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillGithub, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'

export default function Home() {
  return (
    <div>
      <head>
        <title> Langutani Maluleke Portfolio</title>
        <meta name='description' content=''/>
       <link rel='icon' href='/favicon.ico'/>

      </head>
    <main className='bg-white px-10'>

      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex  justify-between'>
      <h1 className='text-xl font-burtons'>developedbylm</h1>
      
      <ul className='flex items-center'>
        <li> <BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
        <li>
          <a className=' bg-gradient-to-r from-cyan-500 text-white px-4 py-2 rounded-md ml-8'
           href="#"
          >Resume
          </a>
        </li>
      </ul>

      </nav>
      <div className='text-center p-10'>
        <h2 className='text-4xl py-2 text-teal-500 font-medium'>Langutani Maluleke</h2>
        <h3 className='text-2xl py-2'>Full Stack Develepor</h3>
        <p className='text-md py-5 leading-8 text-gray-700'>Freelancer proving services for programming in web, mobile and deskop applications. </p>
      </div>

      <div className='text-3xl flex justify-center gap-14 py-3 text-gray-500'>
        <AiFillTwitterCircle/>
        <AiFillFacebook/>
        <AiFillGithub />
        <AiFillLinkedin />
      </div>

      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-8- h-80 mt-20 overflow-hidden'>
        <Image src={maluks}/>
      </div>
      </section>
    </main>
    </div>
  )
}
