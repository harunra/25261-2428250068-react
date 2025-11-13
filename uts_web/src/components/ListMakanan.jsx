import { useEffect, useState } from "react";
import axios from "axios";

const ListMakanan = () => {
  const [makanan, setMakanan] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        // Simpan hasil response ke state
        setMakanan(response.data.categories);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data:", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Kategori Makanan</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {makanan.map((item) => (
          <div
            key={item.idCategory}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={item.strCategoryThumb}
              alt={item.strCategory}
              style={{ width: "100%", borderRadius: "10px" }}
            />
            <h3>{item.strCategory}</h3>
            <p style={{ fontSize: "14px" }}>
              {item.strCategoryDescription.slice(0, 80)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListMakanan;