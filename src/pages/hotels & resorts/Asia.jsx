import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Asia = () => {
  // Data untuk kolom pertama
  const column1 = [
    { id: 1, name: "Indonesia" },
    { id: 2, name: "Malaysia" },
    { id: 3, name: "Singapore" },
    { id: 4, name: "Thailand" },
    { id: 5, name: "Japan" },
  ];

  // Data untuk kolom kedua
  const column2 = [
    { id: 6, name: "China" },
    { id: 7, name: "South Korea" },
    { id: 8, name: "Vietnam" },
    { id: 9, name: "Philippines" },
    { id: 10, name: "India" },
  ];

  // Data untuk kolom ketiga
  const column3 = [
    { id: 11, name: "Pakistan" },
    { id: 12, name: "Bangladesh" },
    { id: 13, name: "Sri Lanka" },
    { id: 14, name: "Nepal" },
    { id: 15, name: "Bhutan" },
  ];
  
  // Data untuk kolom keempat
  const column4 = [
    { id: 16, name: "Saudi Arabia" },
    { id: 17, name: "UAE" },
    { id: 18, name: "Qatar" },
    { id: 19, name: "Turkey" },
    { id: 20, name: "Iran" },
  ];

  // Menggabungkan semua array data kolom ke dalam satu array besar
  const allColumns = [column1, column2, column3, column4];

  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Asia
      </Typography>
      <div className="grid grid-cols-4 gap-20">
        {/* Menggunakan map untuk membuat setiap kolom */}
        {allColumns.map((columnData, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              textTransform: "capitalize",
            }}
          >
            {/* Menggunakan map di dalam map untuk menampilkan link di setiap kolom */}
            {columnData.map((item) => (
              <Link className="hover:text-[#E62727]" key={item.id} to="#">
                {item.name}
              </Link>
            ))}
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default Asia;