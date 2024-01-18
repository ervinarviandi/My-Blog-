import React from 'react'



export default function Content() {

  const markdown = `Just a link: www.nasa.gov.`

  return (
    <>
    <div className=''>
        <h1 className='font-bold lg:text-2xl text-xl'>Introduction</h1>
        <p className='lg:text-lg text-md mt-5'>
        Gambar adalah komponen terberat dari sebuah situs web. Gambar mencegah situs web memuat lebih cepat dan menurunkan kinerjanya atau kata lainnya website tsb performanya akan lambat . Hal ini mungkin mengakibatkan pengalaman pengguna yang buruk. Oleh karena itu, dalam artikel ini, saya akan mengajari teman-teman cara paling sederhana dan termudah untuk menambahkan gambar buram saat memuat halaman di dalam project React js.
      </p>
        <p className='lg:text-lg text-md mt-5'> Pada artikel ini, saya akan menggunakan Tailwind CSS. Pengetahuan dasar tentang Tailwind CSS akan diperlukan.</p>

        <p className='lg:text-lg text-md mt-5'>Langkah 1: Install Tailwind CSS with React</p>

        <div className='p-4 rounded-md '>
            <div className='p-4'>Terminal</div>
            <p className='lg:text-lg text-md '><span className='text-green-500'>npm</span><span>install</span></p>
        </div>

        <p className='lg:text-lg text-md mt-5'>Inisialisasi tailwind di dalam aplikasi Next.js</p>


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
