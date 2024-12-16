import Image from "next/image";
import pic1 from "@/images/product-cover-5 (21).png";
import pic2 from "@/images/product-cover-5 (22).png";
import pic3 from "@/images/product-cover-5 (23).png";
import pic4 from "@/images/product-cover-5 (24).png";
import pic5 from "@/images/product-cover-5 (25).png";
import pic6 from "@/images/product-cover-5 (20).png";
import CardT2 from "./cards-text-2";
import cm1 from "@/images/fa-brands-1.png";
import cm2 from "@/images/fa-brands-2.png";
import cm3 from "@/images/fa-brands-3.png";
import cm4 from "@/images/fa-brands-4.png";
import cm5 from "@/images/fa-brands-5.png";
import cm6 from "@/images/fa-brands-6.png";

export default function Bestseller() {
  return (
    <div className="relative bg-[#FAFAFA] w-full">
      <div className="max-w-[1440px] h-auto mx-auto">
        <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] mx-auto">
          {/* Heading */}
          <div className="flex gap-[10px]">
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
              BESTSELLER PRODUCTS
            </h3>
          </div>
          {/* Line under the heading */}
          <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
          {/* Products Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[30px]">
            {/* Product Cards */}
            {[pic6, pic1, pic2, pic3, pic4, pic5, pic6, pic1].map((pic, index) => (
              <div key={index} className="w-[238px] h-full flex flex-col bg-[#FFFFFF] shadow-lg">
                <div className="flex-grow">
                  <Image src={pic} alt={`product${index + 1}`} className="w-full h-full object-cover" />
                </div>
                <CardT2 />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
        <div className="max-w-[1124px] mx-auto">
          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {[cm1, cm2, cm3, cm4, cm5, cm6].map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image src={logo} alt={`Client Logo ${index + 1}`} className="h-12 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


