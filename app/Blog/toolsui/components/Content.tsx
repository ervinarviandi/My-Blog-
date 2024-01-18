import React from 'react'
import LinkCards from "@/app/Blog/toolsui/components/Card"

export default function Content() {

  return (
    <>
    <div className=''>
        <h1 className='font-bold lg:text-2xl text-xl'>apa sih yang di maksud dengan ui kits dan ui block? </h1>
        <p className='lg:text-lg text-md mt-5'>
        UI kits dan UI blocks adalah istilah yang sering digunakan dalam pengembangan antarmuka pengguna (UI) untuk aplikasi web atau mobile. Tailwind CSS, di sisi lain, adalah sebuah framework CSS yang memungkinkan pengembang untuk membangun antarmuka dengan menggunakan kelas-kelas kecil yang dapat dikombinasikan untuk membuat desain yang sesuai.</p>
        <p className='lg:text-lg text-md mt-5 font-bold'>1. UI Kits :</p>
        <p className='lg:text-lg text-md mt-5'>UI kits adalah kumpulan elemen desain grafis dan komponen antarmuka pengguna yang telah dirancang sebelumnya. UI kits biasanya mencakup berbagai elemen seperti tombol, input, Card, ikon, dan elemen UI lainnya yang sering digunakan. Mereka dirancang agar konsisten secara visual dan membantu pengembang atau desainer untuk membangun antarmuka dengan cepat tanpa perlu membuat setiap elemen dari awal.</p>

        <p className='lg:text-lg text-md mt-5'>Fungsi di Tailwind CSS: Dalam Tailwind CSS, UI kits sering kali direpresentasikan oleh set kelas yang telah ditentukan sebelumnya untuk berbagai elemen UI. Tailwind menyediakan kelas-kelas bawaan yang dapat digunakan untuk membuat UI dengan cepat dan konsisten.</p>

        <p className='font-bold lg:text-lg text-md mt-5'>UI Blocks :</p>

        <p className='lg:text-lg text-md mt-5'>UI blocks adalah bagian-bagian atau sekelompok elemen UI yang dapat digunakan sebagai unit terpisah. Mereka dapat berupa bagian dari halaman web atau aplikasi yang dapat diambil dan digunakan kembali dalam proyek lain. UI blocks memungkinkan pengembang untuk membangun halaman dengan menggabungkan blok-blok yang telah ada tanpa perlu membuat semuanya dari awal.</p>

        <p className='lg:text-lg text-md mt-5'>Fungsi di Tailwind CSS: Dalam Tailwind CSS, UI blocks dapat dibangun dengan menggunakan kelas-kelas yang sesuai untuk setiap elemen di dalam blok tersebut. Tailwind memungkinkan pengembang untuk menggabungkan kelas-kelas dengan cara yang fleksibel untuk membuat UI blocks yang dapat digunakan kembali.</p>

        <p className='lg:text-lg text-md mt-5'>Dalam konteks Tailwind CSS, baik UI kits maupun UI blocks sering kali mengacu pada penggunaan kelas-kelas yang telah ditentukan sebelumnya dalam framework tersebut. Pengembang dapat memanfaatkan kelas-kelas ini untuk mempercepat proses pengembangan dan mencapai konsistensi desain dalam projek mereka.</p>

        <p className='lg:text-lg text-md mt-5'>Berikut beberapa Tailwind UI Kit yang bisa teman-teman jadikan referensi :</p>
        <div>
            <LinkCards/>
        </div>
        <p className='mt-5 lg:text-lg text-md '> kurang lebih itu saja yang bisa saya sharing ke teman-teman, sebenarnya masih banyak ui kit lain yang bisa di jadikan referensi, yang bisa membantu teman-teman untuk membuat komponen-komponen dengan tailwind ui, semoga ini membantu ya! 👌   </p>
    </div>
    </>
  )
}
