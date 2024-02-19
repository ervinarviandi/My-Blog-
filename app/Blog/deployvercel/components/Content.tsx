import React from 'react'
import Link from "next/link"
export default function Content() {


  return (
    <>
    <div className=''>
        <h1 className='font-bold lg:text-2xl text-xl'>Deployment Website Ke Vercel</h1>
        <p className='lg:text-lg text-md mt-5'>
        Pada umumnya, istilah "headless UI" merujuk pada komponen antarmuka pengguna (UI) yang dapat digunakan tanpa adanya tampilan atau antarmuka pengguna grafis yang sudah dibangun. Ini berarti komponen tersebut dirancang untuk memberikan fungsionalitas tertentu tanpa ketergantungan pada elemen-elemen visual atau tata letak tertentu.</p>
        <p className='lg:text-lg text-md mt-5'> Tidak main-main, pertumbuhan <Link href="https://tailwindcss.com/" className='text-tailwind'>TailwindCSS</Link>  cukup spektakuler.</p>
        <p className='lg:text-lg text-md mt-5'>Konsep yang diusung oleh TailwindCSS memang cukup spektakuler, yaitu utility first dimana kita tidak perlu meninggalkan halaman html/jsx  kita untuk bisa menuliskan css yang kita mau.</p>

        <p className='lg:text-lg text-md mt-5'>Mungkin sedikit mirip kali ya dengan CSS-in-JS atau styled component yang mana tidak perlu keluar dari file jsx/html kita untuk melakukan styling pada komponen kita.</p>

        <p className='font-bold lg:text-lg text-md mt-5'>Kenapa Pakai Tailwind CSS?</p>

        <p className='lg:text-lg text-md mt-5'>Saya sebelumnya pernah pakai beberapa framework yang berbasis komponen seperti Bootstrap CSS, Bulma, MaterializeCSS, namun merasa kurang puas dengan framework ini.</p>

        <p className='lg:text-lg text-md mt-5'>Mengapa?</p>

        <p className='lg:text-lg text-md mt-5'>Pertama saya merasa kurang bebas kustomisasi komponennya. Kalau mau custom, harus override class yang udah ada.
        Kedua, kode CSS dari komponen yang nggak dipakai akan ikut nyangkut di CSS hasil build. Ini membuat ukuran CSS-nya jadi lebih besar.
        Walaupun saya coba pakai PurgeCSS, namun kadang hasil tampilannya nggak maksimal, ada aja yang bermasalah.</p>

        <p className='lg:text-lg text-md mt-5'>Berikut adalah beberapa konsep dasar Tailwind CSS:</p>

        <p className='lg:text-lg text-md font-bold mt-5'>1. Utility-First Approach:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Tailwind CSS mengutamakan penggunaan kelas utilitas untuk mendefinisikan gaya elemen. Sebagai contoh, daripada memiliki CSS khusus untuk setiap elemen, Anda menggunakan kelas-kelas seperti <span className='font-bold bg-blue-400 p-0.5 rounded-md'>bg-blue-400</span> untuk memberikan warna latar belakang biru.</p>

        <p className='lg:text-lg text-md font-bold mt-5'>2. Kelas-Kelas Dasar:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Tailwind menyediakan kelas-kelas untuk berbagai properti CSS, seperti warna, margin, padding, dan lainnya. Contohnya, <span className='font-bold text-red-400 p-0.5 rounded-md'>text-red-400</span> akan memberikan warna teks merah.</p>

        <p className='lg:text-lg text-md font-bold mt-5'>3. Responsiveness:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Tailwind juga menyertakan kelas-kelas untuk menangani responsivitas. Misalnya, <span className='font-bold p-0.5 rounded-md'>sm:text-lg </span> akan memberikan ukuran teks besar pada tampilan layar kecil (small screens). </p>

        <p className='lg:text-lg text-md font-bold mt-5'>4. Responsiveness:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Kita dapat menyesuaikan konfigurasi Tailwind untuk memenuhi kebutuhan projek kita. Ini memungkinkan kita menambahkan, mengubah, atau menghapus kelas-kelas yang tersedia sesuai kebutuhan.  </p>
        <p className='lg:text-lg text-md font-bold mt-5'>5. Penggunaan Variabel:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Tailwind menggunakan variabel untuk mengatur nilai-nilai tertentu, memudahkan penyesuaian. Misalnya, warna, ukuran font, atau nilai lain dapat diubah dengan mudah melalui variabel.  </p>
        <p className='lg:text-lg text-md font-bold mt-5'>6. Pseudo-Classes dan Pseudo-Elements:</p>
        <p className='lg:text-lg text-md  mt-3 ml-5'>Tailwind mendukung penggunaan pseudo-classes dan pseudo-elements seperti <span className='font-bold'> hover </span>, <span className='font-bold'> focus </span>, dan <span className='font-bold'> before</span>. Misalnya, <span className='font-bold hover:bg-yellow-500 rounded-md p-0.5'> hover:bg-yellow-500 </span> memberikan latar belakang warna kuning ketika elemen dihover.  </p>





        

        <p className='lg:text-lg text-md mt-5'>di bawah ini saya tampilkan contoh penggunaan kelas menggunakan framework lain dan dengan menggunakan Tailwind CSS dalam HTML :</p>

        <p className='lg:text-lg text-md mt-4'>Menggunakan framework lain :</p>
        <div className='bg-[#282a36] rounded-md w-full p-4 mt-3 overflow-x-scroll overflow-hidden'>
          <div className='grid '>
        <p className='text-[#ffff80]'><span className='text-[#fff]'>&#60;</span><span className='text-[#f179c6]'>div</span> <span className='text-[#8aff80]'>class</span> <span className='text-[#f179c6]'> = </span>&quot; Container &quot; <span className='text-[#fff]'>&#62;</span></p>
        <p className=''><span className='text-[#fff]'>&#60;</span><span className='text-[#f179c6]'>button</span> <span className='text-[#8aff80]'>type</span> <span className='text-[#f179c6]'>=</span> <span className='text-[#ffff80]'>&quot; button &quot;</span> <span className='text-[#8aff80]'>class</span><span className='text-[#f179c6]'>=</span><span className='text-[#ffff80]'>&quot; btn btn-primary &quot;</span> <span className='text-[#fff]'>&#62;</span> <span className='text-[#fff]'>Klik Disini!</span> <span className='text-[#fff]'>&#60;/<span className='text-[#f179c6]'>button</span>&#62;</span></p>
            <p className='text-[#fff]'><span className='text-[#fff]'>&#60;/</span><span className='text-[#f179c6]'>div</span>&#62;</p>
            </div>
        </div>

        <p className='lg:text-lg text-md mt-7'>Menggunakan framework TailwindCSS :</p>
        

        <div className='bg-[#282a36] rounded-md w-full p-4 mt-3  overflow-hidden overflow-x-scroll'>
        <p className='text-[#ffff80]'><span className='text-[#fff]'>&#60;</span><span className='text-[#f179c6]'>div</span> <span className='text-[#8aff80]'>class</span> <span className='text-[#f179c6]'> = </span>&quot; bg-teal-300 p-5 rounded-lg &quot; <span className='text-[#fff]'>&#62;</span></p>
        <p className=''><span className='text-[#fff]'>&#60;</span><span className='text-[#f179c6]'>button</span> <span className='text-[#8aff80]'>type</span> <span className='text-[#f179c6]'>=</span> <span className='text-[#ffff80]'>&quot; button &quot;</span> <span className='text-[#8aff80]'>class</span><span className='text-[#f179c6]'>=</span><span className='text-[#ffff80]'>&quot; rounded-full py-3 px-6 text-white font-bold bg-teal-600 hover:bg-teal-500 &quot;</span> <span className='text-[#fff]'>&#62;</span> <span className='text-[#fff]'>Klik Disini!</span> <span className='text-[#fff]'>&#60;/<span className='text-[#f179c6]'>button</span>&#62;</span></p>
            <p className='text-[#fff]'><span className='text-[#fff]'>&#60;/</span><span className='text-[#f179c6]'>div</span>&#62;</p>
        </div>

        <p className='lg:text-lg text-md mt-5'>Nah! teman-teman udah tau kan perbedaannya, seperti yang sudah kita bahas sebelumnya, jika kita ingin membuat styling pada component, tidak perlu buat di file css terpisah, cukup buat styling di dalam halaman html/jsx saja, gimana ni sudah tertarik untuk menggunakan framework tailwindcss ? 👌  </p>



    </div>
    </>
  )
}
