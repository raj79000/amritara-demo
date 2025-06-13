"use client";
import { useEffect, useState } from "react";
import { getCitiesByZone } from "../../../lib/api/getCitiesByZone";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";

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
      <ul className="nav nav-tabs zonetab-home">
        {zones.map((zone) => (
          <li className="nav-item" key={zone.id}>
            <button
              className={`nav-link ${activeZone === zone.id ? "active" : ""}`}
              onClick={() => setActiveZone(zone.id)}
            >
              {zone.name}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content border border-top-0 p-3">
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
                slidesPerView: 3,
              }
            }}
          >
            {cities.map((city) => (
              <SwiperSlide key={city.id}>
                <div className="card">
                  <div className="card-body">
                    <Image src="/img/popular-3.jpg" height={300} width={500} alt={city.title} className="card-img-top" />
                    <h5 className="card-title">{city.title}</h5>
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
