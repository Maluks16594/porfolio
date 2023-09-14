import Head from 'next/head'
import Image from 'next/image'
import maluks from '../public/maluks.png'
import smart from '../public/mobile.png'
import moepi from '../public/mobile (1).png'
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
    <main className='bg-white px-8 md:px-20 lg:px-40'>

      <section className='min-h-screen'>
        <nav className='py-5 mb-12 flex  justify-between'>
      <h1 className='text-xl font-burtons'>developedbylm</h1>
      
      <ul className='flex items-center'>
        <li> <BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
        <li>
          <a className=' bg-gradient-to-r from-cyan-500 text-white px-4 py-1 rounded-md ml-8'
           href="#"
          >Resume
          </a>
        </li>
      </ul>

      </nav>
      <div className='text-center py-2'>
        <h2 className='text-3xl py-2 text-teal-500 font-medium md:text-6xl'>Langutani Maluleke</h2>
        <h3 className='text-2xl py-2'>Full Stack Develepor</h3>
        <p className='text-md py-5 leading-8 text-gray-700'>Freelancer proving services for programming in web, mobile and deskop applications. </p>
      </div>

      <div className='text-3xl flex justify-center gap-14 py-3 text-gray-500'>
        <AiFillTwitterCircle/>
        <AiFillFacebook/>
        <AiFillGithub />
        <AiFillLinkedin />
      </div>

      <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-5- h-80 mt-20 overflow-hidden'>
        <Image src={maluks} alt='Langutani Malulek' layout='fill' objectFit='cover'/>
      </div>
      </section>

<section >
  <div>
    <h3 className='text-3xl py-5'>Services I offer</h3>
    <p className='text-md  leading-8 text-gray-700'>
    Since the beginning of my journey as a Full Stack Develeper, I have done different kinds of projects and I also collaborated with team members to achieve some of the projects for both business and personal use.
    </p>
    </div>

    <div className='p-5 text-center  shadow-lg rounded-xl my-10'>
      <h3 className='text-lg text-teal-500 font-medium pt-8 pb-2'>Smart-Moola App</h3>
      <Image src={smart} alt='Langutani Malulek' width={90} height={90}/>
      <p className='py-1.5'>Business application that provides information to individual who does know anything about Debt and Credit. It also help those who are sinking in debt on where they can get help.</p>
      <h4 className='text-teal-500 py-2'>Tools and technologies used for the app</h4>
      <p className='text-gray-800 py-1'>Figma</p>
      <p className='text-gray-800 py-1'>Angular</p>
      <p className='text-gray-800 py-1'>PostgreSQL</p>
      <p className='text-gray-800 py-1'>Node js</p>
      <p className='text-gray-800 py-1'>Bootstrap</p>
      
    </div>
    <div className='p-5 text-center  shadow-lg rounded-xl my-10'>
      <h3 className='text-lg text-teal-500 font-medium pt-8 pb-2'>Bathobela Can App</h3>
      <Image src={moepi} alt='Langutani Malulek' width={90} height={90}/>
      <p className='py-1.5'>Personal application that assist teachers and parents in acquiring help with children that have Autism, ADHD and learning issues. </p>
      <h4 className='text-teal-500 py-2'>Tools and technologies used for the app</h4>
      <p className='text-gray-800 py-1'>Figma</p>
      <p className='text-gray-800 py-1'>WordPress</p>
    </div>

    </section>
    </main>
    </div>
  )
}
