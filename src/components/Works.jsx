import { useEffect, useState } from "react";
import Development from "./Development-model";
import WebDesign from "./WebDesign-model";

export default function Works() {
  const [work, setWork] = useState();
  useEffect(() => {
    document.querySelectorAll(".product-list li").forEach((item) => {
      item.setAttribute("data-text", item.textContent.trim());
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
          ) : (
            <Development />
          )}
        </div>
      </div>
  );
};
