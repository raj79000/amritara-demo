import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react';

const BannerSec = () => {
  return (
    <>

      <section className="hero-section position-relative vh-100 overflow-hidden h-full flex items-center justify-center">
        {/* Background Video */}
        <div className="video-background position-absolute w-100 h-100">

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-100 h-100 object-fit-cover"
            thumbnail="/img/banner-thumbnail.png"
            poster="/img/banner-thumbnail.png"
          >
            <source src="/img/amritara-new-banner-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* <Image src="/img/main-banner-amritara-1.jpg" alt="alt" width={1800} height={1000}
         className="w-100 h-100 object-fit-cover" /> */}
        </div>
        <div className='hero-bottom-part-ab'>
          <Link href="#" className="search-icon-banner">
            <Search />
          </Link>
        </div>

        {/* <div className="hero-content text-center position-relative text-white">
          <h1 className="display-4 fw-bold">Welcome to Your Dream Destination</h1>
          <p className="lead mt-3">
            Explore the world with us and discover unforgettable experiences.
          </p>
          <a href="/book-a-stay" className="btn btn-primary btn-lg mt-4">
            Book Your Stay
          </a>
        </div> */}
      </section>

    </>
  )
}

export default BannerSec
