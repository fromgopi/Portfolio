import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import image from '../pages/img/store.jpg';

export default function Home() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                src="/store.jpg" alt="Man looking at item at a store" />
        </div>
      </div>
    </div>
  )
}
