import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface GalleryProps {
  images: string[];
}

export const Gallery = ({ images }: GalleryProps) => {
  const isMobile = window.innerWidth < 768;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1504203700686-0b3af59c0f5f"; // fallback
  };

  if (!images || images.length === 0) {
    return <p>Não há imagens para mostrar 😅</p>;
  }

  if (isMobile) {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ width: "calc(100% - 20px)", padding: "10px 10px 30px 10px" }} // padding da página
      >
        {images.map((url, i) => (
          <SwiperSlide key={i}>
            <img
              src={url}
              onError={handleError}
              alt={`Mood ${i}`}
              style={{ width: "100%", height: "250px", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Desktop: cards simples com padding da página
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "10px 20px", // padding da página
        marginTop: "20px", // separação do MoodSelector
      }}
    >
      {images.map((url, i) => (
        <div
          key={i}
          style={{
            width: "200px",
            height: "250px",
            overflow: "hidden",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        >
          <img
            src={url}
            onError={handleError}
            alt={`Mood ${i}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};
