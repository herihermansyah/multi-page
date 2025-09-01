import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Euro = () => {
  // Data untuk kolom pertama
  const column1 = [
    { id: 1, name: "France" },
    { id: 2, name: "Spain" },
    { id: 3, name: "Germany" },
    { id: 4, name: "Poland" },
    { id: 5, name: "Czech Republic" },
  ];

  // Data untuk kolom kedua
  const column2 = [
    { id: 6, name: "United Kingdom" },
    { id: 7, name: "Italy" },
    { id: 8, name: "Netherlands" },
    { id: 9, name: "Belgium" },
    { id: 10, name: "Switzerland" },
  ];

  // Data untuk kolom ketiga
  const column3 = [
    { id: 11, name: "Austria" },
    { id: 12, name: "Sweden" },
    { id: 13, name: "Norway" },
    { id: 14, name: "Finland" },
    { id: 15, name: "Denmark" },
  ];

  // Data untuk kolom keempat
  const column4 = [
    { id: 16, name: "Greece" },
    { id: 17, name: "Portugal" },
    { id: 18, name: "Ireland" },
    { id: 19, name: "Hungary" },
    { id: 20, name: "Romania" },
  ];

  // Menggabungkan semua array data kolom ke dalam satu array besar
  const allColumns = [column1, column2, column3, column4];

  return (
    <Box>
      <Typography
        sx={{ marginBottom: 2, fontWeight: "bold", fontSize: "22px" }}
      >
        Euro
      </Typography>
      <div className="grid grid-cols-4 gap-20 ">
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

export default Euro;
