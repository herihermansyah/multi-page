import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const America = () => {
  // Data untuk setiap kolom
  const column1 = [
    { name: "Canada" },
    { name: "Brazil" },
    { name: "Colombia" },
    { name: "Panama" },
    { name: "America" },
  ];

  const column2 = [
    { name: "Mexico" },
    { name: "Argentina" },
    { name: "Peru" },
    { name: "Chile" },
    { name: "Bolivia" },
  ];

  const column3 = [
    { name: "Ecuador" },
    { name: "Uruguay" },
    { name: "Paraguay" },
    { name: "Venezuela" },
    { name: "Cuba" },
  ];

  const column4 = [
    { name: "Haiti" },
    { name: "Jamaica" },
    { name: "Puerto Rico" },
    { name: "Dominican Republic" },
    { name: "Guatemala" },
  ];

  // Menggabungkan semua data kolom ke dalam satu array besar
  const allColumns = [column1, column2, column3, column4];

  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        America
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
            {/* Menggunakan map lagi di dalam map untuk menampilkan link dari data yang berbeda */}
            {columnData.map((item, subIndex) => (
              <Link className="hover:text-[#E62727]" key={subIndex} to="#">
                {item.name}
              </Link>
            ))}
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default America;
