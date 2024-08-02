"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { ProductService } from "./service";

const Product = () => {
  const [product, setProduct] = useState<[]>();
  let sliderRef: any = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handelGetListProduct = async () => {
      const response = await ProductService();
      setProduct(response?.data);
    };
    handelGetListProduct();
  }, []);

  console.log("product", product);

  return (
    <div className="overflow-hidden">
      <div className="h-[248px] p-10">
        <span className="font-[600] text-[#1d1d1f] text-[48px]">Store.</span>
        <span className="font-[600] text-[#6e6e73] text-[48px]">
          The best way to buy the{" "}
          <p className="leading-none">products you love.</p>
        </span>
      </div>
      <div className="slider-container">
        <div className="relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {product?.map((pro: any, key) => {
              return (
                <div key={key}>
                  <div className="flex justify-center items-center flex-col gap-4">
                    <img width={120} src={pro?.image} alt="error" />
                    <p className="font-bold">{pro.name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="flex justify-between absolute top-10 w-[100%]">
            <svg
              onClick={() => {
                next();
              }}
              className="w-[48px] h-[48px] text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m17 16-4-4 4-4m-6 8-4-4 4-4"
              />
            </svg>
            <svg
              onClick={() => {
                previous();
              }}
              className="w-[48px] h-[48px] text-gray-800 dark:text-white cursor-pointer"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m7 16 4-4-4-4m6 8 4-4-4-4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
