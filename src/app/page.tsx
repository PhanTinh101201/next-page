"use client";
import React from "react";
import styles from "../styles/button.module.css";
import Slider from "react-slick";

const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="overflow-hidden">
      <div className="bg-[#f5f5f7] w-[100%] h-[600px] flex justify-center items-center flex-col">
        <img
          className="w-[500px]"
          src="https://i.ibb.co/6vRzsRX/screenshot-654.jpg"
          alt="error"
        />
        <button className={`${styles["btn"]} mt-4`}> Shop now</button>
      </div>

      <div className="bg-[#f5f5f7] w-[100%] h-[600px] flex justify-center items-center flex-col mt-3">
        <span className="font-bold text-[50px]">MacBook Air</span>
        <span className="font-normal text-[20px]">Learn.Mean.M3 machine</span>
        <div className="flex gap-2 mt-3 mb-3">
          <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
            Learn more
          </button>
          <button className="bg-[#f5f5f7] rounded-[20px] text-[17px] w-[80px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
            Buy
          </button>
        </div>
        <img
          className="w-[500px]"
          src="https://i.ibb.co/Jx79LK4/screenshot-655.jpg"
          alt="error"
        />
      </div>

      <div className="mt-3 relative">
        <div className="flex flex-col items-center justify-center">
          <span className="absolute text-[#fff] top-10 text-[50px]">
            iPhone
          </span>
          <span className="absolute text-[#fff] top-[110px] text-[25px] flex flex-col justify-center items-center">
            <p>Our most powerful cameras yet.</p>
            <p>Ultrafast chips. And USB-C.</p>
          </span>
          <div className="absolute top-[200px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#000] rounded-[20px] text-[17px] w-[80px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Buy
            </button>
          </div>
        </div>
        <img
          src="https://www.apple.com/v/home/bp/images/heroes/iphone-family/hero_iphone_family_a__c7v3mvx3jv42_mediumtall.jpg"
          alt="error"
          className="w-[100%] h-[600px] display: block;"
        />
      </div>

      <div className="mt-3 grid grid-rows-3 gap-4 grid-flow-col">
        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] top-[50px]">
            <span className="text-[30px]">iPad Pro</span>
            <span>Unbelievably thin. Incredibly powerful.</span>
          </div>
          <div className="absolute top-[150px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#000] rounded-[20px] text-[17px] w-[80px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Buy
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/ipad-pro/promo_ipadpro__ch217v9v7no2_medium.jpg"
            alt="error"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] bottom-[150px]">
            <span className="text-[30px] flex gap-2 text-[#000]">
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
              Vision Pro
            </span>
            <span className="text-[#000]">
              The era of spatial computing is here.
            </span>
          </div>
          <div className="absolute bottom-[70px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#fff] rounded-[20px] text-[17px] w-[80px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Buy
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/apple-vision-pro/promo_apple_vision_pro__f4v4zp0sum2y_medium.jpg"
            alt="error"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] top-[50px]">
            <span className="text-[30px] text-[#000] flex gap-2">
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
              Card
            </span>
            <span className=" text-[#000]">
              Unbelievably thin. Incredibly powerful.
            </span>
          </div>
          <div className="absolute top-[150px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#fff] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Apply Now
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/apple-card/promo_apple_card__5cm7draujpey_medium.jpg"
            alt="error"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] top-[50px]">
            <span className="text-[30px] text-[#000] flex gap-2">
              Apple Intelligence
            </span>
            <span className=" text-[#000]">AI for the rest of us.</span>
            <span className=" text-[#000]">Coming in beta this fall</span>
          </div>
          <div className="absolute top-[150px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#fff] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Watch the film
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/apple-intelligence/promo_ai__couihqxznyvm_medium.jpg"
            alt="error"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] top-[50px]">
            <span className="text-[30px] text-[#fff] flex gap-2">
              Apple at Work
            </span>
            <span className=" text-[#fff]">Work. Like never before.</span>
          </div>
          <div className="absolute top-[150px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/business-enterprise/promo_business_enterprise__dkdpcu4arpsi_medium.jpg"
            alt="error"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <div className="absolute flex flex-col justify-center items-center text-[#fff] top-[50px]">
            <span className="text-[30px] text-[#000] flex gap-2">
              <svg
                height="44"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
              Apple Trade In
            </span>
            <span className=" text-[#000]">
              Get $170-$620 in credit when you trade in iPhone 11 or higher.
            </span>
          </div>
          <div className="absolute top-[150px] flex gap-2 ">
            <button className="bg-[#0077ed] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#fff]">
              Learn more
            </button>
            <button className="bg-[#fff] rounded-[20px] text-[17px] w-[120px] h-[40px] text-[#0077ed] border  border-[#0077ed] hover:bg-[#0077ed] hover:text-[#fff]">
              Watch the film
            </button>
          </div>
          <img
            width={"100%"}
            src="https://www.apple.com/v/home/bp/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg"
            alt="error"
          />
        </div>
      </div>
      <div className="slider-container mt-3">
        <Slider {...settings}>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-music-note-background-image_2670279.jpg"
              alt="error"
            />
          </div>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://tuhoctiengtrung.vn/wp-content/uploads/2019/04/hinh-anh-ten-cac-loai-nhac-bang-tieng-trung-1.jpg"
              alt="error"
            />
          </div>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://1clip.bacgiangtv.vn/upload/audio/large/am_nhac_va_doi_song_nhung_ban_nhac_chill_19281115042023.png"
              alt="error"
            />
          </div>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://solution.com.vn/upload_images/images/2021/12/logo-am-nhac/logo-am-nhac-1.jpg"
              alt="error"
            />
          </div>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://cdn.tgdd.vn/Files/2022/07/29/1451210/tiktok-music_1280x720-800-resize.png"
              alt="error"
            />
          </div>
          <div>
            <img
              className="w-[97%] h-[255px]"
              width={500}
              height={255}
              src="https://www.shutterstock.com/image-vector/template-design-music-festival-celebration-600nw-2477580121.jpg"
              alt="error"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Landing;
