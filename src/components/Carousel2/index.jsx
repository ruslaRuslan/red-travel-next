"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { carouselData } from "./Carousel2Data";
import { Button } from "@mui/material";

const Carousel2 = () => {
  return (
    <Swiper
      style={{
        position: "relative",
        marginTop: "3rem",
      }}
      modules={[Autoplay]}
      spaceBetween={0}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{
        delay: 750,
      }}
      loop
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 4,
        },
        900: {
          slidesPerView: 6,
        },
      }}
    >
      {carouselData.map(({ id, img, altImg }) => {
        return (
          <SwiperSlide key={id}>
            <Image width={300} height={250} src={img} alt={altImg} />
          </SwiperSlide>
        );
      })}
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          bgcolor: "#0336FF",
          padding: "1rem",
        }}
      >
        Follow @ instagram
      </Button>
    </Swiper>
  );
};

export default Carousel2;
