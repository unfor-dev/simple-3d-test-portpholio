import { useState } from "react";
import Development from "./Development-model";
import WebDesign from "./WebDesign-model";
import ProductDesign from "./ProductDesign-model";
import Illustration from "./Illustration-model";

export default function Works() {
  const [work, setWork] = useState("Web Design");

  const workList = [
    "Web Design",
    "Development",
    "Illustration",
    "Product Design",
    "Social Media",
  ];

  return (
    <div className="Works" id="Works">
      <div className="product-name-wrapper">
        <ul className="product-list">
          {workList.map((item) => (
            <li
              key={item}
              data-text={item}
              onClick={() => setWork(item)}
              className={work === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="product-wrapper">
        {work === "Web Design" ? (
          <WebDesign />
        ) : work === "Development" ? (
          <Development />
        ) : work === "Product Design" ? (
          <ProductDesign />
        ) : work === "Illustration" ? (
          <Illustration />
        ) : (
          <p>Something is coming soon</p>
        )}
      </div>
    </div>
  );
}
