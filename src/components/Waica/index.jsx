import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const Waica = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className} onClick={() => navigate("/")}>
        <div className="flex flex-col gap-[17px] items-center justify-start mb-4 mt-2.5 w-[93%] md:w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <div className="h-[51px] relative w-1/5">
              <div className="absolute bg-red-900 h-11 inset-[0] justify-center m-auto rounded-[50%] w-11"></div>
              <Text
                className="absolute h-full inset-y-[0] my-auto right-[9%] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtOutfitRegular40"
              >
                w
              </Text>
            </div>
            <div className="flex flex-col gap-[5px] items-start justify-start mt-0.5">
              <Text
                className="text-base text-black-900"
                size="txtPoppinsSemiBold16"
              >
                Waica Re
              </Text>
              <Text
                className="text-black-900_90 text-xs"
                size="txtPoppinsRegular12"
              >
                GHC
              </Text>
            </div>
            <Img
              className="h-[43px] mt-0.5 w-[43px]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
          <div className="flex flex-row gap-[30px] items-end justify-between w-full">
            <div className="flex flex-col gap-[13px] items-start justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                size="txtRubikRomanMedium24"
              >
                $8,291
              </Text>
              <Text
                className="text-sm text-teal-A400 tracking-[0.28px]"
                size="txtPoppinsSemiBold14"
              >
                +0.25%
              </Text>
            </div>
            <div className="h-[52px] md:h-[62px] mt-2.5 relative w-[51%]">
              <Img
                className="absolute h-[52px] inset-[0] justify-center m-auto object-cover"
                src="images/img_vector12.png"
                alt="vectorTwelve"
              />
              <Img
                className="absolute h-[46px] inset-x-[0] mx-auto object-cover top-[0]"
                src="images/img_graph_gray_400_01.png"
                alt="graph"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Waica.defaultProps = {};

export default Waica;
