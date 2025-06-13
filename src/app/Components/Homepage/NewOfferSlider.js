import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

const NewOfferSlider = () => {
  const offers = [
    {
      id: 1,
      image: "/img/popular-4.jpg",
      title: "Offer Title 1",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 2,
      image: "/img/popular-4.jpg",
      title: "Offer Title 2",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 3,
      image: "/img/popular-4.jpg",
      title: "Offer Title 3",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
      id: 4,
      image: "/img/popular-4.jpg",
      title: "Offer Title 4",
      description: "Lorem Ipsum is simply dummy text of the printing",
    },
    {
        id: 5,
        image: "/img/popular-4.jpg",
        title: "Offer Title 5",
        description: "Lorem Ipsum is simply dummy text of the printing",
      },
  ];

  return (
    <section className="new-hotels sec-padding bg-grey offer-slider-sec">
      <div className="container">
        <div className="global-heading-sec">
          <h2 className="global-heading">Offers</h2>
        </div>
        <div className="winter-sec main-hotel-box">
          <Swiper
            modules={[Navigation]}
            navigation
            loop={true}
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              767: { slidesPerView: 1 },
              991: { slidesPerView: 2 },
              1199: { slidesPerView: 3 },
              1400: { slidesPerView: 4 },
            }}
          >
            {offers.map((offer) => (
              <SwiperSlide key={offer.id}>
                <div className="winter-box">
                
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    height={500}
                    width={500}
                    className="w-100 primary-radius"
                  />
                  
                  <div className="winter-box-content">
                    <h3 className="winter-box-heading">{offer.title}</h3>
                    <p className="winter-box-para">{offer.description}</p>
                    <div className="winter-box-btn">
                      <a href="#" className="box-btn know-more">
                        Know More
                      </a>
                      <a href="#" className="box-btn book-now">
                        Book Now
                      </a>
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
