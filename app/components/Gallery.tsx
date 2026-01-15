"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageData = [
    { src: "/gallery/TheHappyToiletProject_20.jpg", alt: "Gallery image 20", isSpan: true },
    { src: "/gallery/TheHappyToiletProject_19.jpg", alt: "Gallery image 19", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_18.jpg", alt: "Gallery image 18", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_16.jpg", alt: "Gallery image 16", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_01.jpg", alt: "Gallery image 1", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_02.jpg", alt: "Gallery image 2", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_03.jpg", alt: "Gallery image 3", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_04.jpg", alt: "Gallery image 4", isSpan: true },
    { src: "/gallery/TheHappyToiletProject_05.jpg", alt: "Gallery image 5", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_06.jpg", alt: "Gallery image 6", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_07.jpg", alt: "Gallery image 7", isSpan: true },
    { src: "/gallery/TheHappyToiletProject_08.jpg", alt: "Gallery image 8", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_09.jpg", alt: "Gallery image 9", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_10.jpg", alt: "Gallery image 10", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_11.jpg", alt: "Gallery image 11", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_12.jpg", alt: "Gallery image 12", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_13.jpg", alt: "Gallery image 13", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_14.jpg", alt: "Gallery image 14", isSpan: false },
    { src: "/gallery/TheHappyToiletProject_15.jpg", alt: "Gallery image 15", isSpan: false },
  ];

  // Close lightbox on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="py-12" style={{ background: 'linear-gradient(135deg, #9862bf 0%, #ff37ad 100%)' }}>
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-semibold text-center text-white mb-7">ประมวลภาพกิจกรรม</h2>
            
            {/* Swiper for Mobile */}
            <div className="md:hidden">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    navigation
                    pagination={{ clickable: true, type: 'fraction' }}
                    className="w-full"
                >
                    {imageData.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="cursor-pointer"
                                onClick={() => openLightbox(image.src)}
                            >
                                <Image 
                                    src={image.src} 
                                    alt={image.alt} 
                                    width={800} 
                                    height={600} 
                                    className="w-full h-auto rounded-lg object-cover" 
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Masonry Grid for Desktop */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 auto-rows-max">
                {imageData.map((image, index) => (
                <div
                    key={index}
                    className={`${image.isSpan ? 'md:col-span-2 md:row-span-2 h-full' : ''} cursor-pointer transition-transform hover:scale-105`}
                    onClick={() => openLightbox(image.src)}
                >
                    <Image 
                    src={image.src} 
                    alt={image.alt} 
                    width={800} 
                    height={600} 
                    className="w-full rounded h-full object-cover" 
                    />
                </div>
                ))}
            </div>
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeLightbox}
            >
            <button
                className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
                onClick={closeLightbox}
                aria-label="Close lightbox"
            >
                ×
            </button>
            <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <Image
                src={selectedImage}
                alt="Lightbox image"
                width={1920}
                height={1080}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                priority
                />
            </div>
            </div>
        )}
    </div>
  );
}