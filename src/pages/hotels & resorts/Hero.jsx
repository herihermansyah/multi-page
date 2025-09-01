import { Box } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import AdjustIcon from "@mui/icons-material/Adjust";
import React, { useState, useEffect, useCallback } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    {
      id: 1,
      url: "https://plus.unsplash.com/premium_photo-1675745329634-8c187fa18c00?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1580223530509-849e0ad583ca?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  }, [imageList.length]);

  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  }, [imageList.length]);

  const handleDotClick = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextImage();
    }, 9000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, [handleNextImage]);

  return (
    <div style={{ position: "relative", height: "50vh" }}>
      <img
        src={imageList[currentImageIndex].url}
        alt="hotel"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(-50%)",
          padding: "0 20px",
          zIndex: 10,
        }}
      >
        <ArrowCircleLeftIcon
          sx={{ color: "white", cursor: "pointer", fontSize: 40 }}
          onClick={handlePrevImage}
        />
        <ArrowCircleRightIcon
          sx={{ color: "white", cursor: "pointer", fontSize: 40 }}
          onClick={handleNextImage}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10,
        }}
      >
        {imageList.map((_, index) => (
          <AdjustIcon
            key={index}
            sx={{
              color: index === currentImageIndex ? "white" : "gray",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Box>
    </div>
  );
};

export default Hero;
