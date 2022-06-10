import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';

const FeaturedIcons = () => {
  const imgurls = [
    { url: '/featured-icons-1.png', text: 'Lorem' },
    { url: '/featured-icons-2.png', text: 'Lorem' },
    { url: '/featured-icons-3.png', text: 'Lorem' },
    { url: '/featured-icons-4.png', text: 'Lorem' },
    { url: '/featured-icons-5.png', text: 'Lorem' },
    { url: '/featured-icons-6.png', text: 'Lorem' },
    { url: '/featured-icons-7.png', text: 'Lorem' },
    { url: '/featured-icons-8.png', text: 'Lorem' }
  ];

  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
    padding:"0 5px"
  }
  const arr = imgurls.map(cvalue => <div style={styles}><img src={cvalue.url}/> {cvalue.text}</div>);
  return (
    <div className="featured-icons">
      <div className="featured-icons-top">
        <div className="top-head">
          <h1>Featured Icons</h1>
        </div>
        <div className="top-desc">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>
        </div>
      </div>
      <div className="featured-icons-bottom">
      {/* <Swiper
      spaceBetween={50}
      slidesPerView={7}
      loop
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{arr[0]}</SwiperSlide>
      <SwiperSlide>{arr[1]}</SwiperSlide>
      <SwiperSlide>{arr[2]}</SwiperSlide>
      <SwiperSlide>{arr[3]}</SwiperSlide>
      <SwiperSlide>{arr[4]}</SwiperSlide>
      <SwiperSlide>{arr[5]}</SwiperSlide>
      <SwiperSlide>{arr[6]}</SwiperSlide>
      <SwiperSlide>{arr[7]}</SwiperSlide>
    </Swiper> */}
    {arr}
        
        </div>
    </div>
  );
};

export default FeaturedIcons;
