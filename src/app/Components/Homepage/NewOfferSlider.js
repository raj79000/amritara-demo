"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { postAPI } from '../../../lib/api/api';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import offstyle from "./offers.module.css";
import { useEffect, useState } from "react";

const NewOfferSlider = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await postAPI('gethomeofferlist', { offer_id: 1 });
        if (response.status && response.data) {
          setOffers(response.data);
        }
      } catch (error) {
        console.error('Error fetching offers:', error);
      }
    };

    fetchOffers();
  }, []);

  return (
    <section className="section-padding offer-slider-sec bg-lred">
      <div className="container">
        <div className="global-heading-sec text-center">
          <h2 className="global-heading">Offers</h2>
        </div>
        <div className={offstyle.mainhotelbox}>
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              500: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className={offstyle.offerbox}>
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    height={300}
                    width={500}
                    className={`${offstyle.offerboximg} w-100 `}
                  />
                  <div className={offstyle.offerboxcontent}>
                    <h3 className={offstyle.offerboxcontentheading}>{offer.title}</h3>
                    <div className={offstyle.offerboxcontentpara} dangerouslySetInnerHTML={{ __html: offer.description.substring(0, 50) + '...' }}></div>
                    <div className={offstyle.offerboxcontentbtn}>
                      <Link href={`/${offer.slug}`} className={`${offstyle.offerknowmore} explore-more-btn`} target="_blank">
                        Know More
                      </Link>
                      <Link href={offer.booking_id} className={`${offstyle.offerkbooknow} book-now-btn`} target="_blank">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default NewOfferSlider;
