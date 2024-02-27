import React from 'react'
import Image from "next/image"
import Code from "@/app/assets/codeImage/LazyLoad.svg"



export default function Content() {


  return (
    <>
    <div className=''>
        <h1 className='font-bold lg:text-2xl text-xl'>Introduction</h1>
        <p className='lg:text-lg text-md mt-5'>
        Gambar adalah komponen terberat dari sebuah situs web. Gambar akan mencegah situs web memuat lebih cepat dan menurunkan kinerjanya atau kata lainnya website tersebut performanya akan lambat . Hal ini mungkin mengakibatkan pengalaman pengguna yang buruk. Oleh karena itu, dalam artikel ini, saya akan memberi tahu teman-teman cara paling sederhana dan termudah agar websitenya tidak berat, pastikan kalian juga tidak menggunakan gambar yang berformat jpg, jpeg, png ya karena format tersebut tidak disarankan untuk di simpan di dalam website static. saya sarankan kalian gunakan gambar berformat webp dan svg saja. 
      </p>
        <p className='lg:text-lg text-md mt-5'>langsung saja, di bawah ini saya bagikan source codenya, disini saya menggunakan framework dari react js yaitu next js. </p>

        <Image src={Code} width={640} height={540} alt='lazyload'/>
        
        <p className='lg:text-lg text-md mt-5'>Nah! mungkin itu saja yang bisa saya sharing kepada teman-teman, jika ada pertanyaan bisa langsung tanyakan di fitur komentar yang sudah di sediakan 👌  </p>
    </div>
    </>
  )
}
