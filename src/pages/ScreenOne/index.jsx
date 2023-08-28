import React from "react";

import { Button, Img, Line, List, Text } from "components";
import ScreenOneColumn from "components/ScreenOneColumn";
import ScreenOneColumncountertext from "components/ScreenOneColumncountertext";
import Waica from "components/Waica";

const ScreenOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-jost items-center justify-end mx-auto p-5 w-full">
        <div className="flex flex-col gap-[0] justify-start max-w-[1389px] mt-1 mx-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat md:h-20 h-[101px] sm:h-[187px] md:ml-[0] ml-[499px] p-0.5 relative rounded-[22px] w-[32%] sm:w-full"
            style={{
              backgroundImage: "url('images/img_clock_white_a700.svg')",
            }}
          >
            <div className="md:h-20 sm:h-[187px] h-[94px] m-auto w-[92%] sm:w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                  <List
                    className="sm:flex-1 sm:flex-col flex-row gap-[26px] grid grid-cols-2 w-[51%] sm:w-full"
                    orientation="horizontal"
                  >
                    <ScreenOneColumncountertext className="flex flex-col items-center justify-center sm:ml-[0] w-auto" />
                    <ScreenOneColumn className="flex flex-col items-center justify-center sm:ml-[0] w-auto" />
                  </List>
                  <div className="flex flex-col items-center justify-center w-auto">
                    <div className="flex flex-col items-start justify-end px-1 w-auto">
                      <div className="flex flex-col h-20 md:h-auto items-start justify-start w-auto">
                        <Text
                          className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                          size="txtJostSemiBold64"
                        >
                          2023
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-row items-center justify-start left-[9%] w-[78%]">
                <Text
                  className="h-[29px] text-gray-600_7a text-right text-xl"
                  size="txtJostSemiBold20"
                >
                  DD
                </Text>
                <Text
                  className="ml-[78px] text-gray-600_75 text-right text-xl"
                  size="txtJostSemiBold20Gray60075"
                >
                  MM
                </Text>
                <Text
                  className="ml-28 text-gray-600_7a text-right text-xl"
                  size="txtJostSemiBold20"
                >
                  YYYY
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-row gap-[115px] items-center justify-center left-[27%] top-[17%] w-[28%]">
              <Line className="bg-gray-400 h-[54px] rotate-[-89deg] w-0.5" />
              <Line className="bg-gray-400 h-[55px] rotate-[-89deg] w-px" />
            </div>
          </div>
          <div className="md:h-[326px] h-[371px] md:ml-[0] ml-[382px] mt-[7px] relative w-[52%] md:w-full">
            <div className="absolute md:h-[319px] h-[364px] inset-[0] justify-center m-auto w-full">
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                <div className="font-vollkorn md:h-[170px] h-[185px] relative w-full">
                  <Text
                    className="absolute bottom-[15%] left-[0] text-5xl sm:text-[38px] md:text-[44px] text-black-900"
                    size="txtVollkornRomanSemiBold48"
                  >
                    Good Morning,Paa Kwesi
                  </Text>
                  <div className="absolute bg-white-A700 flex flex-col md:h-auto h-full inset-y-[0] items-end justify-start my-auto pl-2.5 pr-[18px] py-2.5 right-[0] rounded-lg w-[161px]">
                    <Img
                      className="h-[150px] md:h-auto object-cover rounded-[43px] w-[150px]"
                      src="images/img_avatarimage.png"
                      alt="avatarimage"
                    />
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[67px] mt-[3px] sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtPoppinsRegular40"
                >
                  Reinsurance Department{" "}
                </Text>
                <Text
                  className="md:ml-[0] ml-[212px] mt-8 text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                  size="txtPoppinsRegular36"
                >
                  Fac Data
                </Text>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[101px] inset-x-[0] items-start justify-start mx-auto p-[7px] top-[0] w-[42%]"
                style={{
                  backgroundImage: "url('images/img_clock_white_a700.svg')",
                }}
              >
                <div className="flex flex-row gap-[13px] items-center justify-start mt-1.5 w-[55%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col items-start justify-end px-1 w-auto">
                      <div className="flex flex-col h-20 md:h-auto items-start justify-start w-auto">
                        <Text
                          className="md:text-5xl text-[64px] text-black-900 text-center w-auto"
                          size="txtJostSemiBold64"
                        >
                          1:25
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray-400 h-[55px] my-3 rotate-[89deg] w-px" />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[100px] right-[33%] top-[0] w-[100px]"
              src="images/img_frame1171275920.svg"
              alt="frame1171275920"
            />
          </div>
          <div
            className="bg-cover bg-no-repeat flex flex-col font-zenkakugothicantique h-[55px] items-end justify-start md:ml-[0] ml-[520px] mt-[37px] p-3.5 rounded-lg w-[26%] md:w-full"
            style={{ backgroundImage: "url('images/img_signinbutton.svg')" }}
          >
            <div className="flex flex-row gap-2 items-center justify-end mb-[3px] mr-[59px] w-[58%] md:w-full">
              <Text
                className="text-center text-sm text-white-A700"
                size="txtZenKakuGothicAntiqueBold15"
              >
                CONTINUE TO SIGN IN
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins gap-[19px] items-center justify-between mt-[105px] w-full">
            <div className="bg-white-A700 border-2 border-black-900 border-solid flex md:flex-1 flex-col items-center justify-start p-4 rounded-[26px] shadow-bs w-[19%] md:w-full">
              <div className="flex flex-col gap-[18px] items-center justify-start mb-2.5 mt-0.5 w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <Button className="bg-black-900 flex h-11 items-center justify-center mb-2 p-0.5 rounded-[50%] w-11">
                    <Img src="images/img_globe.svg" alt="globe" />
                  </Button>
                  <div className="flex flex-col gap-[5px] items-start justify-start mt-[5px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtPoppinsSemiBold16"
                    >
                      Ghana Re
                    </Text>
                    <Text
                      className="text-black-900_90 text-xs"
                      size="txtPoppinsRegular12"
                    >
                      USD
                    </Text>
                  </div>
                  <Img
                    className="h-[43px] mt-[5px] w-[43px]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                </div>
                <div className="flex flex-row gap-3.5 items-end justify-between w-[99%] md:w-full">
                  <div className="flex flex-col gap-[13px] items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                      size="txtRubikRomanMedium24"
                    >
                      $52,291
                    </Text>
                    <Text
                      className="text-sm text-teal-A400 tracking-[0.28px]"
                      size="txtPoppinsSemiBold14"
                    >
                      +0.25%
                    </Text>
                  </div>
                  <Img
                    className="h-[52px] md:h-auto mt-2.5 object-cover"
                    src="images/img_graph.png"
                    alt="graph"
                  />
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row font-outfit gap-[38px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[81%] md:w-full"
              orientation="horizontal"
            >
              <Waica className="bg-white-A700 flex flex-col items-end justify-start sm:ml-[0] outline outline-[2px] outline-black-900 p-[9px] rounded-[26px] shadow-bs w-full" />
              <div className="bg-white-A700 border-2 border-black-900 border-solid flex flex-col font-questrial items-center justify-start sm:ml-[0] p-[18px] rounded-[26px] shadow-bs w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start mb-2 mt-1 w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Text
                      className="bg-green-A700 flex h-11 items-center justify-center mb-[3px] rounded-[50%] sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700 w-11"
                      size="txtQuestrialRegular40"
                    >
                      M
                    </Text>
                    <div className="flex flex-col font-poppins gap-1.5 items-start justify-start">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        Mainstream
                      </Text>
                      <Text
                        className="text-black-900_90 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        USD
                      </Text>
                    </div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                  </div>
                  <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                        size="txtRubikRomanMedium24"
                      >
                        $28,291
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
                        alt="vectorThirteen"
                      />
                      <Img
                        className="absolute h-[46px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_graph_blue_a700.svg"
                        alt="graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  border-2 border-black-900 border-solid flex flex-col font-poppins items-center justify-start sm:ml-[0] p-[18px] rounded-[26px] shadow-bs w-full">
                <div className="flex flex-col gap-[17px] items-center justify-start mb-2 mt-1 w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <Button className="bg-black-900 flex h-11 items-center justify-center mb-[3px] p-[11px] rounded-[50%] w-11">
                      <Img
                        src="images/img_isolationmode.svg"
                        alt="isolationmode"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        Afro-Asian
                      </Text>
                      <Text
                        className="text-black-900_90 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        GBP
                      </Text>
                    </div>
                    <Img
                      className="h-[43px] w-[43px]"
                      src="images/img_checkmark_deep_orange_600.svg"
                      alt="checkmark"
                    />
                  </div>
                  <div className="flex flex-row gap-[18px] items-end justify-between w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                        size="txtRubikRomanMedium24"
                      >
                        $14,291
                      </Text>
                      <Text
                        className="text-sm text-yellow-900 tracking-[0.28px]"
                        size="txtPoppinsSemiBold14Yellow900"
                      >
                        -0.25%
                      </Text>
                    </div>
                    <div className="h-[52px] md:h-[62px] mt-2.5 relative w-[51%]">
                      <Img
                        className="absolute h-[52px] inset-[0] justify-center m-auto object-cover"
                        src="images/img_vector12.png"
                        alt="vectorFourteen"
                      />
                      <Img
                        className="absolute h-[46px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_graph_green_a700.svg"
                        alt="graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  border-2 border-black-900 border-solid flex flex-col font-poppins items-center justify-start sm:ml-[0] p-4 rounded-[26px] shadow-bs w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start mb-[9px] mt-[5px] w-[99%] md:w-full">
                  <div className="flex flex-row items-start justify-start w-full">
                    <div className="h-[46px] relative w-1/5">
                      <div className="bg-black-900 h-11 m-auto outline outline-[1px] outline-black-900 rounded-[50%] w-11"></div>
                      <Img
                        className="absolute h-[46px] inset-[0] justify-center m-auto"
                        src="images/img_iccog.svg"
                        alt="iccog"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start ml-[19px]">
                      <Text
                        className="text-base text-black-900"
                        size="txtPoppinsSemiBold16"
                      >
                        Visal Re
                      </Text>
                      <Text
                        className="text-black-900_90 text-xs"
                        size="txtPoppinsRegular12"
                      >
                        SOL
                      </Text>
                    </div>
                    <Img
                      className="h-[45px] ml-[49px] w-[45px]"
                      src="images/img_vector.svg"
                      alt="vector"
                    />
                  </div>
                  <div className="flex flex-row gap-[18px] items-end justify-between w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[0.48px]"
                        size="txtRubikRomanMedium24"
                      >
                        $14,291
                      </Text>
                      <Text
                        className="text-sm text-yellow-900 tracking-[0.28px]"
                        size="txtPoppinsSemiBold14Yellow900"
                      >
                        -0.25%
                      </Text>
                    </div>
                    <div className="h-[52px] md:h-[62px] mt-2.5 relative w-[51%]">
                      <Img
                        className="absolute h-[52px] inset-[0] justify-center m-auto object-cover"
                        src="images/img_vector12.png"
                        alt="vectorFifteen"
                      />
                      <Img
                        className="absolute h-[46px] inset-x-[0] mx-auto top-[0]"
                        src="images/img_graph_green_a700.svg"
                        alt="graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenOnePage;
