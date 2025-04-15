import { useEffect } from "react";

export default function Works() {
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
          <h1>Canvas</h1>
        </div>
      </div>
  );
};
