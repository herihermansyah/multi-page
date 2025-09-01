import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Africa = () => {
  // Data untuk kolom pertama
  const column1 = [
    { id: 1, name: "Al - jazair" },
    { id: 2, name: "Egypt" },
    { id: 3, name: "Marocco" },
    { id: 4, name: "Djibouti" },
    { id: 5, name: "Ethiopia" },
  ];

  // Data untuk kolom kedua
  const column2 = [
    { id: 6, name: "Kenya" },
    { id: 7, name: "Nigeria" },
    { id: 8, name: "Senegal" },
    { id: 9, name: "Sudan" },
    { id: 10, name: "Tunisia" },
  ];

  // Data untuk kolom ketiga
  const column3 = [
    { id: 11, name: "Libya" },
    { id: 12, name: "Ghana" },
    { id: 13, name: "Angola" },
    { id: 14, name: "Congo" },
    { id: 15, name: "Uganda" },
  ];

  // Data untuk kolom keempat
  const column4 = [
    { id: 16, name: "Zimbabwe" },
    { id: 17, name: "South Africa" },
    { id: 18, name: "Tanzania" },
    { id: 19, name: "Madagascar" },
    { id: 20, name: "Mali" },
  ];

  // Menggabungkan semua array data kolom ke dalam satu array besar
  const allColumns = [column1, column2, column3, column4];

  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Africa
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

export default Africa;
