"use client";
import { useEffect, useState } from "react";
import { getCitiesByZone } from "../../../lib/api/getCitiesByZone";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import styles from "./zone.module.css";
import Link from "next/link";

export default function ZoneTabs({ zones }) {
  const [activeZone, setActiveZone] = useState(zones?.[0]?.id);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (activeZone) {
      getCitiesByZone(activeZone).then((res) => {
        setCities(res?.data || []);
      });
    }
  }, [activeZone]);

  return (
    <div className="py-4">
      <ul className={`nav nav-tabs ${styles.ZonetabHome}`}>
        {zones.map((zone) => (
          <li className="nav-item" key={zone.id}>
            <button
              className={`nav-link ${styles.InActiveTab} ${activeZone === zone.id ? `active ${styles.ActiveTab}` : ""}`}
              onClick={() => setActiveZone(zone.id)}
            >
              {zone.name}
            </button>
          </li>
        ))}
      </ul>

        <div className={`tab-content border border-top-0 ${styles.TabContent}`}>
        {cities.length > 0 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              991: {
                slidesPerView: 4,
              }
            }}
          >
            {cities.map((city) => (
              <SwiperSlide key={city.id}>
                <div className={styles.TabCardWrapper}>
                  <div className={styles.TabCard}>
                    <Image src="/img/popular-3.jpg" height={300} width={500} alt={city.title} className={styles.TabCardImg} />
                    <h5 className={styles.TabCardTitle}>{city.title}</h5>
                    <div className={styles.TabContentBtn}>
                       <Link href="#" className=" explore-more-btn">
                        Explore
                      </Link>
                       {/* <Link href={`/city/${city.slug}`} className="btn btn-primary"> */}
                       <Link href="#" className="book-now-btn">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="text-muted">No cities found for this zone.</p>
        )}
      </div>
    </div>
  );
}
