import { useEffect, useState } from "react";
import Development from "./Development-model";
import WebDesign from "./WebDesign-model";
import ProductDesign from "./ProductDesign-model";
import Illustration from "./Illustration-model";

export default function Works() {
  const [work, setWork] = useState("Web Design"); // Boshlang'ich holat

  useEffect(() => {
    document.querySelectorAll(".product-list li").forEach((item) => {
      item.setAttribute("data-text", item.textContent.trim());
      item.addEventListener("click", () => {
        setWork(item.textContent.trim()); // 📌 Bu joy muhim!
      });
    });
  }, []);

  return (
    <div className="Works">
      <div className="product-name-wrapper">
        <ul className="product-list">
          <li>Web Design</li>
          <li>Development</li>
          <li>Illustration</li>
          <li>Product Design</li>
          <li>Social Media</li>
        </ul>
      </div>

      <div className="product-wrapper">
        {work === "Web Design" ? (
          <WebDesign />
        ) : work === "Development" ? (
          <Development />
        ) : work === "Product Design" ? (
          <ProductDesign />
        ): work === "Illustration" ? (
          <Illustration />
        ) : (
          <p>Some thing have in there )</p>
        )}
      </div>
    </div>
  );
}
