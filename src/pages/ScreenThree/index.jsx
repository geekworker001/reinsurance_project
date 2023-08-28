import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";

import "react-circular-progressbar/dist/styles.css";

const dateOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dateOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ScreenThreePage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      label: (
        <div className="h-[71px] md:h-[88px] sm:pl-5 relative w-full">
          <div className="absolute bottom-[0] flex flex-col gap-[21px] justify-start left-[39%] w-[48%]">
            <Img className="h-6 w-6" src="images/img_file.svg" alt="file" />
            <Text className="md:ml-[0] ml-[38px]">Invoice</Text>
          </div>
          <div className="absolute flex flex-row gap-3.5 items-start justify-start right-[0] top-[0] w-[98%]">
            <Img className="h-6 w-6" src="images/img_volume.svg" alt="volume" />
            <Text className="font-semibold text-base text-black-900_87_01">
              Fac Transaction List
            </Text>
          </div>
        </div>
      ),
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_menu_indigo_900.svg"
          alt="menu"
        />
      ),
      label: <Text>Schedule</Text>,
    },
    {
      icon: (
        <Img className="h-6 w-6" src="images/img_calendar.svg" alt="calendar" />
      ),
      label: <Text>Calendar</Text>,
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-nunito items-center justify-start mx-auto pl-2.5 py-2.5 w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mb-[19px] mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[191px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start md:mt-0 mt-10 overflow-auto top-[0]"
            style={{ backgroundImage: "url('images/img_menu.svg')" }}
          >
            <div className="flex flex-row gap-[15px] items-center justify-start mb-[779px] mr-[38px] w-[81%]">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[42px] items-center justify-start w-[42px]"
                style={{ backgroundImage: "url('images/img_menu.svg')" }}
              >
                <Img
                  className="h-[42px] w-[42px]"
                  src="images/img_clock_indigo_900.svg"
                  alt="clock"
                />
              </div>
              <Text
                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtNunitoSemiBold24"
              >
                Fac Data
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "16px",
                  marginTop: "23px",
                  color: "#03022987",
                  fontWeight: 600,
                  fontSize: "16px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  [`&:hover, &.ps-active`]: {
                    color: "#000000",
                    position: "relative",
                  },
                },
              }}
              className="sm:h-[1018px] h-[735px] md:h-[813px] mt-[85px] sm:pr-5 pr-[25px] pt-24 relative w-[98%]"
            >
              <Button className="absolute bg-indigo-900_87 flex inset-x-[0] items-center justify-center mx-auto p-1.5 rounded-[10px] top-[13%] w-full">
                <Img src="images/img_addinvoice.svg" alt="addinvoice" />
              </Button>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="md:h-[168px] h-[169px] sm:h-[210px] relative w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtNunitoSemiBold16"
                        >
                          Dashboard
                        </Text>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                            <Img
                              className="h-6"
                              src="images/img_grid.svg"
                              alt="grid"
                            />
                            <Text className="text-black-900_7f">Home</Text>
                          </div>
                          <MenuItem>
                            <Text className="text-black-900_7f">Add Entry</Text>
                          </MenuItem>
                          <MenuItem
                            icon={
                              <Img
                                className="h-5 w-[21px]"
                                src="images/img_edit.svg"
                                alt="edit"
                              />
                            }
                          >
                            <Text className="text-black-900_87">
                              Edit Entry
                            </Text>
                          </MenuItem>
                        </div>
                      </div>
                    </div>
                    <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[19%] w-full" />
                  </div>
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                    <Img
                      className="h-6"
                      src="images/img_checkmark_indigo_900.svg"
                      alt="checkmark"
                    />
                    <Text>Messages</Text>
                    <div className="md:h-3.5 h-[15px] relative w-full">
                      <div className="absolute bg-red-800_63 h-3.5 inset-x-[0] mx-auto rounded-[7px] top-[0] w-full"></div>
                      <Text className="absolute bottom-[0] font-semibold inset-x-[0] mx-auto text-[10px] text-red-800 w-max">
                        49
                      </Text>
                    </div>
                  </div>
                  <MenuItem>
                    <div className="flex flex-row gap-3.5 items-start justify-start sm:px-5">
                      <Button className="bg-white-A700_7e flex h-6 items-center justify-center p-0.5 w-6">
                        <Img
                          src="images/img_notification.svg"
                          alt="notification"
                        />
                      </Button>
                      <Text>Notification</Text>
                    </div>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-[22px] w-[22px]"
                        src="images/img_icons.svg"
                        alt="icons"
                      />
                    }
                  >
                    <Text>Task Manager</Text>
                  </MenuItem>
                  <MenuItem
                    icon={
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings.svg"
                        alt="settings"
                      />
                    }
                  >
                    <Text>Settings</Text>
                  </MenuItem>
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[161px] w-full">
                    <div className="h-[47px] relative w-full">
                      <div className="bg-gray-100 h-[43px] m-auto rounded-[12px] w-full"></div>
                      <Img
                        className="absolute h-[47px] inset-[0] justify-center m-auto object-cover rounded-[19px] w-full"
                        src="images/img_avatarimage_47x186.png"
                        alt="avatarimage"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-xs"
                        size="txtNunitoSemiBold12"
                      >
                        Paa Kwesi
                      </Text>
                      <Text
                        className="text-[10px] text-black-900_87"
                        size="txtNunitoRegular10"
                      >
                        Profile
                      </Text>
                    </div>
                    <Img
                      className="h-4"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </div>
                </div>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Text
                className="md:mt-0 mt-[5px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl"
                size="txtNunitoBold24"
              >
                Dashboard
              </Text>
              <div className="bg-white-A700 flex sm:flex-1 flex-row font-sfprotext h-9 md:h-auto items-center justify-start md:ml-[0] ml-[233px] md:mt-0 mt-1 p-2 rounded-[10px] shadow-bs1 w-[420px] sm:w-full">
                <div className="flex flex-col h-7 items-center justify-start w-7">
                  <Img
                    className="h-7 md:h-auto object-cover w-7"
                    src="images/img_magnifyingglass.png"
                    alt="magnifyingglass"
                  />
                </div>
                <Text
                  className="flex-1 text-[17px] text-black-900_6b tracking-[-0.41px] w-auto"
                  size="txtSFProTextRegular17"
                >
                  Search
                </Text>
              </div>
              <div className="flex md:flex-1 flex-row font-nunito gap-[15px] items-center justify-between md:ml-[0] ml-[95px] w-1/4 md:w-full">
                <SelectBox
                  className="bg-white-A700 font-semibold leading-[normal] px-[17px] py-[9px] rounded-[5px] text-black-900_99 text-left text-sm w-[48%] sm:w-full"
                  placeholderClassName="text-black-900_99"
                  indicator={
                    <Img
                      className="h-1 mr-[0] outline-black-900_87 outline-[0.5px] outline w-2"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="date"
                  options={dateOptionsList}
                  isSearchable={false}
                  placeholder="10-06-2021"
                />
                <SelectBox
                  className="bg-white-A700 font-semibold leading-[normal] px-[17px] py-[9px] rounded-[5px] text-black-900_99 text-left text-sm w-[48%] sm:w-full"
                  placeholderClassName="text-black-900_99"
                  indicator={
                    <Img
                      className="h-1 mr-[0] outline-black-900_87 outline-[0.5px] outline w-2"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="date_One"
                  options={dateOneOptionsList}
                  isSearchable={false}
                  placeholder="10-10-2021"
                />
              </div>
            </div>
            <div className="flex flex-col font-everett gap-[45px] items-start justify-start w-[94%] md:w-full">
              <div className="h-[116px] md:h-[242px] sm:h-[492px] md:ml-[0] ml-[5px] p-3 relative w-[1060px] md:w-full">
                <div className="absolute bg-white-A700 h-28 inset-[0] m-auto rounded-lg w-full"></div>
                <List
                  className="absolute sm:flex-col flex-row gap-2 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 inset-y-[0] left-[10%] my-auto w-[82%]"
                  orientation="horizontal"
                >
                  <div className="bg-teal-A100 flex flex-col gap-4 h-[116px] md:h-auto items-center justify-center px-3 py-4 rounded-lg w-auto">
                    <div className="flex flex-row gap-[90px] items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[65px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_nvidia1.svg"
                          alt="nvidiaOne"
                        />
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtEverettMedium12"
                        >
                          Nvidia
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-center w-[33px]">
                        <Text
                          className="text-blue_gray-900 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12"
                        >
                          NVDA
                        </Text>
                        <Text
                          className="text-light_green-A700 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12LightgreenA700"
                        >
                          +5.63
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-600 text-xs w-auto"
                          size="txtEverettRegular12Gray600"
                        >
                          Current Value
                        </Text>
                        <Text
                          className="capitalize text-blue_gray-900 text-lg w-auto"
                          size="txtEverettMedium18"
                        >
                          $203.65
                        </Text>
                      </div>
                      <Img
                        className="h-6 md:h-auto object-cover w-[78px]"
                        src="images/img_group3.png"
                        alt="groupThree"
                      />
                    </div>
                  </div>
                  <div className="bg-deep_purple-A100 flex flex-col gap-4 items-center justify-center px-3 py-4 rounded-lg w-auto">
                    <div className="flex flex-row gap-[91px] items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[61px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_rewind.svg"
                          alt="rewind"
                        />
                        <Text
                          className="text-white-A700 text-xs w-auto"
                          size="txtEverettMedium12WhiteA700"
                        >
                          Meta
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-center w-[33px]">
                        <Text
                          className="text-right text-white-A700 text-xs uppercase w-auto"
                          size="txtEverettRegular12WhiteA700"
                        >
                          Meta
                        </Text>
                        <Text
                          className="text-red-500 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12Red500"
                        >
                          -4.44
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-white-A700_cc text-xs w-auto"
                          size="txtEverettRegular12WhiteA700cc"
                        >
                          Current Value
                        </Text>
                        <Text
                          className="capitalize text-lg text-white-A700 w-auto"
                          size="txtEverettMedium18WhiteA700"
                        >
                          $151.74
                        </Text>
                      </div>
                      <Img
                        className="h-6 md:h-auto object-cover w-[78px]"
                        src="images/img_group3_white_a700.png"
                        alt="groupThree"
                      />
                    </div>
                  </div>
                  <div className="bg-orange-100 flex flex-col gap-4 items-center justify-center px-3 py-4 rounded-lg w-auto">
                    <div className="flex flex-row gap-[90px] items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[77px]">
                        <Img
                          className="h-6 w-6"
                          src="images/img_teslamotors11.svg"
                          alt="teslamotorsEleven"
                        />
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtEverettMedium12"
                        >
                          Tesla Inc
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-center w-[34px]">
                        <Text
                          className="text-blue_gray-900 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12"
                        >
                          TSLA
                        </Text>
                        <Text
                          className="text-light_green-A700 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12LightgreenA700"
                        >
                          +17.63
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-600 text-xs w-auto"
                          size="txtEverettRegular12Gray600"
                        >
                          Current Value
                        </Text>
                        <Text
                          className="capitalize text-blue_gray-900 text-lg w-auto"
                          size="txtEverettMedium18"
                        >
                          $177.90
                        </Text>
                      </div>
                      <Img
                        className="h-6 md:h-auto object-cover w-[78px]"
                        src="images/img_group3_light_green_700.png"
                        alt="groupThree"
                      />
                    </div>
                  </div>
                  <div className="bg-light_green-A100 flex flex-col gap-4 items-center justify-center px-3 py-4 rounded-lg w-auto">
                    <div className="flex flex-row gap-[90px] items-center justify-start w-auto">
                      <div className="flex flex-row gap-1.5 items-center justify-start w-[81px]">
                        <div className="flex flex-col h-6 items-end justify-start px-0.5 w-6">
                          <Img
                            className="h-6 md:h-auto object-cover w-[95%]"
                            src="images/img_391pxapplelogoblack.png"
                            alt="391pxapplelogob"
                          />
                        </div>
                        <Text
                          className="text-blue_gray-900 text-xs w-auto"
                          size="txtEverettMedium12"
                        >
                          Apple Inc
                        </Text>
                      </div>
                      <div className="flex flex-col items-end justify-center w-[35px]">
                        <Text
                          className="text-blue_gray-900 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12"
                        >
                          AAPL
                        </Text>
                        <Text
                          className="text-light_green-A700 text-right text-xs uppercase w-auto"
                          size="txtEverettRegular12LightgreenA700"
                        >
                          +23.41
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="capitalize text-gray-600 text-xs w-auto"
                          size="txtEverettRegular12Gray600"
                        >
                          Current Value
                        </Text>
                        <Text
                          className="capitalize text-blue_gray-900 text-lg w-auto"
                          size="txtEverettMedium18"
                        >
                          $145.93
                        </Text>
                      </div>
                      <Img
                        className="h-6 md:h-auto object-cover w-[78px]"
                        src="images/img_group3_light_green_700.png"
                        alt="groupThree"
                      />
                    </div>
                  </div>
                </List>
                <div className="absolute bg-purple-A100 inset-y-[0] my-auto px-3 py-4 right-[0] rounded-bl-lg rounded-tl-lg w-[180px]">
                  <div className="flex flex-col items-center justify-start ml-auto my-auto w-[94%] md:w-full">
                    <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                      <div className="flex flex-row gap-[90px] items-center justify-start w-auto">
                        <div className="flex flex-row gap-1.5 items-center justify-start w-32">
                          <Img
                            className="h-8 w-8"
                            src="images/img_amdlogo11.svg"
                            alt="amdlogoEleven"
                          />
                          <Text
                            className="text-blue_gray-900 text-xs w-auto"
                            size="txtEverettMedium12"
                          >
                            Advanced Micro Devices, Inc.
                          </Text>
                        </div>
                        <div className="flex flex-col items-end justify-center w-4">
                          <Text
                            className="text-blue_gray-900 text-right text-xs uppercase w-auto"
                            size="txtEverettRegular12"
                          >
                            AMD
                          </Text>
                          <Text
                            className="text-red-400 text-right text-xs uppercase w-auto"
                            size="txtEverettRegular12Red400"
                          >
                            -2.01
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row gap-[34px] items-center justify-start w-auto">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="capitalize text-gray-600 text-xs w-auto"
                            size="txtEverettRegular12Gray600"
                          >
                            Current Value
                          </Text>
                          <Text
                            className="capitalize text-blue_gray-900 text-lg w-auto"
                            size="txtEverettMedium18"
                          >
                            $75.40
                          </Text>
                        </div>
                        <Img
                          className="h-6 md:h-auto object-cover w-[61px]"
                          src="images/img_group3_red_400.png"
                          alt="groupThree"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-gradient1  flex flex-col h-full inset-y-[0] items-end justify-start my-auto p-[11px] right-[10%] w-[79%] md:w-full">
                    <Button className="bg-indigo-900 flex h-11 items-center justify-center mb-[38px] mt-[11px] p-[15px] rounded-lg shadow-bs2 w-11">
                      <Img
                        src="images/img_arrowright_white_a700.svg"
                        alt="arrowright"
                      />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="font-poppins sm:h-[392px] md:h-[508px] h-[567px] relative w-[74%] md:w-full">
                <div className="absolute sm:h-[349px] md:h-[508px] h-[567px] inset-[0] justify-center m-auto w-[98%] md:w-full">
                  <div
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[351px] items-center justify-end left-[0] p-[18px] w-[49%]"
                    style={{
                      backgroundImage: "url('images/img_targetvsreality.svg')",
                    }}
                  >
                    <div className="flex flex-col items-start justify-start mb-[3px] mt-[9px] w-full">
                      <Text
                        className="text-black-900 text-xl"
                        size="txtPoppinsSemiBold20"
                      >
                        Target vs Reality
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-2.5 w-full">
                        <div className="flex flex-row gap-3.5 items-end justify-between w-full">
                          <div className="flex flex-col gap-[9px] items-center justify-start mt-[30px] w-[11%]">
                            <Img
                              className="h-[102px]"
                              src="images/img_group1000002782_deep_orange_600.svg"
                              alt="group1000002782"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              Jan
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[9px] items-center justify-start mt-10 w-[11%]">
                            <Img
                              className="h-[92px]"
                              src="images/img_group1000002782.svg"
                              alt="download"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              Feb
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[9px] items-center justify-start mt-4 w-[11%]">
                            <Img
                              className="h-[116px]"
                              src="images/img_group1000002782_deep_orange_600.svg"
                              alt="group1000002778"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              Mar
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[11px] items-center justify-start mt-10 w-[11%]">
                            <Img
                              className="h-[92px]"
                              src="images/img_group1000002782.svg"
                              alt="download_One"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              Apr
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start w-[11%]">
                            <Img
                              className="h-[133px]"
                              src="images/img_group1000002782_deep_orange_600.svg"
                              alt="group1000002772"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              May
                            </Text>
                          </div>
                          <div className="flex flex-col gap-[9px] items-center justify-start w-[11%]">
                            <Img
                              className="h-[133px]"
                              src="images/img_group1000002782_deep_orange_600.svg"
                              alt="group1000002774"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              June
                            </Text>
                          </div>
                          <div className="flex flex-col gap-2.5 items-center justify-start w-[11%]">
                            <Img
                              className="h-[133px]"
                              src="images/img_group1000002782_deep_orange_600.svg"
                              alt="group1000002775"
                            />
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtPoppinsRegular10"
                            >
                              July
                            </Text>
                          </div>
                        </div>
                      </div>
                      <List
                        className="flex flex-col gap-[15px] mt-4 w-[71%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-center justify-start w-full">
                          <Button className="bg-indigo-50 flex h-9 items-center justify-center p-[3px] rounded-md w-9">
                            <Img
                              className="h-7"
                              src="images/img_bag.svg"
                              alt="bag"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start ml-2.5">
                            <Text
                              className="text-blue_gray-900_01 text-xs"
                              size="txtPoppinsSemiBold12"
                            >
                              Actual Revenue
                            </Text>
                            <Text
                              className="mt-0.5 text-[10px] text-blue_gray-500"
                              size="txtPoppinsRegular10Bluegray500"
                            >
                              Global
                            </Text>
                          </div>
                          <Text
                            className="ml-[54px] text-indigo-900 text-right text-sm"
                            size="txtPoppinsMedium14"
                          >
                            200M
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-full">
                          <Button className="bg-deep_orange-A400_33 flex h-9 items-center justify-center p-[9px] rounded-md w-9">
                            <Img
                              className="h-[17px]"
                              src="images/img_clock_deep_orange_600.svg"
                              alt="clock"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start ml-2.5">
                            <Text
                              className="text-blue_gray-900_01 text-xs"
                              size="txtPoppinsSemiBold12"
                            >
                              Target Revenue
                            </Text>
                            <Text
                              className="text-[10px] text-blue_gray-500"
                              size="txtPoppinsRegular10Bluegray500"
                            >
                              Premiums
                            </Text>
                          </div>
                          <Text
                            className="ml-[53px] mt-[9px] text-deep_orange-600 text-right text-sm"
                            size="txtPoppinsMedium14Deeporange600"
                          >
                            500M
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row font-inter gap-3.5 h-[305px] md:h-auto inset-x-[0] items-start justify-between mx-auto top-[0] w-auto">
                    <div className="md:h-[249px] h-[305px] relative w-[32%] md:w-full">
                      <div className="absolute bg-white-A700 flex flex-col inset-x-[0] items-start justify-start mx-auto p-3.5 rounded-[10px] top-[0] w-full">
                        <div className="flex flex-col gap-[9px] items-start justify-start mb-[113px] w-auto">
                          <div className="flex flex-col gap-[5px] items-start justify-start w-auto">
                            <Text
                              className="text-[15px] text-white-A700 w-auto"
                              size="txtInterSemiBold15"
                            >
                              Earnings
                            </Text>
                            <Text
                              className="text-black-900 text-xs w-auto"
                              size="txtInterSemiBold12"
                            >
                              Total Claims Paid
                            </Text>
                          </div>
                          <Text
                            className="text-deep_orange-600 text-xl w-auto"
                            size="txtInterBold20"
                          >
                            $6078.76
                          </Text>
                          <Text
                            className="max-w-[151px] md:max-w-full text-[11px] text-black-900"
                            size="txtInterMedium11"
                          >
                            Profit is 48% More than last Month
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bottom-[0] h-[174px] inset-x-[0] mx-auto w-[174px]">
                        <div className="absolute bg-black-900 h-[87px] inset-x-[0] mx-auto rounded-tl-[57px] rounded-tr-[57px] top-[0] w-full"></div>
                        <div className="absolute bg-deep_orange-600 h-[174px] inset-[0] justify-center m-auto rounded-[50%] w-[174px]"></div>
                        <div className="absolute flex flex-row items-start justify-center right-[11%] top-[11%] w-[55%]">
                          <Text
                            className="mt-[31px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                            size="txtInterBold25"
                          >
                            80%
                          </Text>
                          <Line className="bg-deep_orange-600 h-[3px] mb-[27px] ml-1 rotate-[45deg] w-[35px]" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-col gap-[25px] justify-start p-3 rounded-[10px] w-[67%] md:w-full">
                      <Text
                        className="text-[15px] text-black-900"
                        size="txtInterSemiBold15Black900"
                      >
                        Performace Per Month
                      </Text>
                      <div className="flex flex-col items-center justify-start mb-3 mx-auto w-[94%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-[7px] items-start justify-between w-full">
                          <div className="flex flex-col gap-4 items-center justify-start w-5">
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              500
                            </Text>
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              400
                            </Text>
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              300
                            </Text>
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              200
                            </Text>
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              100
                            </Text>
                            <Text
                              className="text-[10px] text-black-900 w-auto"
                              size="txtInterSemiBold10"
                            >
                              0
                            </Text>
                          </div>
                          <div className="flex sm:flex-1 flex-col gap-4 items-center justify-start sm:mt-0 mt-[3px] w-[94%] sm:w-full">
                            <Img
                              className="h-[131px] md:h-auto object-cover"
                              src="images/img_graph_deep_orange_600.png"
                              alt="graph"
                            />
                            <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-start w-[421px] sm:w-full">
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Jan
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Feb
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Mar
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Apr
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                May
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Jun
                              </Text>
                              <Text
                                className="text-[10px] text-black-900"
                                size="txtInterSemiBold10"
                              >
                                Jul
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Aug
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Sep
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Oct
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Nov
                              </Text>
                              <Text
                                className="text-[10px] text-black-900 w-auto"
                                size="txtInterSemiBold10"
                              >
                                Dec
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700_56 bottom-[0] flex flex-col font-aeonikprotrial h-[341px] md:h-auto items-center justify-end p-[18px] right-[0] rounded-[14px] w-[389px] sm:w-full">
                  <div className="flex flex-col h-[323px] md:h-auto items-center justify-start w-[378px] sm:w-full">
                    <div className="flex flex-col gap-6 h-[323px] md:h-auto items-start justify-start w-[378px] sm:w-full">
                      <div className="flex flex-row items-center justify-between w-[364px]">
                        <Text
                          className="text-base text-black-900_02 tracking-[0.16px] w-auto"
                          size="txtAeonikProTRIALRegular16"
                        >
                          Overall Progress
                        </Text>
                        <Button
                          className="bg-white-A700 cursor-pointer flex h-[34px] items-center justify-center min-w-[67px] px-3.5 py-[9px] rounded-[17px]"
                          rightIcon={
                            <Img
                              className="h-3.5 ml-2.5 my-px"
                              src="images/img_icons_blue_gray_900_02.svg"
                              alt="icons"
                            />
                          }
                        >
                          <div className="leading-[normal] text-black-900_02 text-left text-sm tracking-[0.14px]">
                            All
                          </div>
                        </Button>
                      </div>
                      <div className="h-[265px] md:h-[298px] relative w-[378px] sm:w-full">
                        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[92%] md:w-full">
                          <div className="h-[264px] md:h-[298px] relative w-full">
                            <div className="absolute bottom-[0] md:h-[298px] h-[322px] inset-x-[0] mx-auto w-full">
                              <div className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%]">
                                <CircularProgressbar
                                  className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%]"
                                  value={16}
                                  counterClockwise
                                  strokeWidth={4}
                                  styles={{
                                    trail: {
                                      strokeWidth: 4,
                                      stroke: "#00000014",
                                    },
                                    path: {
                                      strokeLinecap: "square",
                                      height: "100%",
                                      transformOrigin: "center",
                                      transform: "rotate(211deg)",
                                      stroke: "#1a922d",
                                    },
                                  }}
                                ></CircularProgressbar>
                              </div>
                              <div
                                className="absolute bg-cover bg-no-repeat flex flex-col h-[166px] inset-x-[0] items-center justify-start mx-auto p-[26px] sm:px-5 top-[0] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group207.svg')",
                                }}
                              >
                                <div className="flex flex-row items-start justify-between mb-[92px] w-[69%] md:w-full">
                                  <Text
                                    className="rotate-[31deg] text-black-900 text-xs tracking-[0.12px]"
                                    size="txtAeonikProTRIALRegular12"
                                  >
                                    25
                                  </Text>
                                  <Text
                                    className="mt-0.5 rotate-[-31deg] text-black-900 text-xs tracking-[0.12px]"
                                    size="txtAeonikProTRIALRegular12"
                                  >
                                    50
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <Text
                              className="absolute bottom-[33%] left-[0] rotate-[90deg] text-black-900 text-xs tracking-[0.12px]"
                              size="txtAeonikProTRIALRegular12"
                            >
                              0
                            </Text>
                            <Text
                              className="absolute bottom-[33%] right-[0] text-black-900 text-xs tracking-[0.12px]"
                              size="txtAeonikProTRIALRegular12"
                            >
                              100
                            </Text>
                            <div className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%] shadow-bs3">
                              <CircularProgressbar
                                className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%] shadow-bs3"
                                value={15}
                                counterClockwise
                                strokeWidth={4}
                                styles={{
                                  trail: {
                                    strokeWidth: 4,
                                    stroke: "#00000014",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(24deg)",
                                    stroke: "#e5ae21",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%] shadow-bs3">
                              <CircularProgressbar
                                className="!w-[298px] absolute bottom-[0] h-[298px] inset-x-[0] mx-auto overflow-visible rounded-[50%] shadow-bs3"
                                value={15}
                                counterClockwise
                                strokeWidth={4}
                                styles={{
                                  trail: {
                                    strokeWidth: 4,
                                    stroke: "#00000014",
                                  },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(79deg)",
                                    stroke: "#e65f2b",
                                  },
                                }}
                              ></CircularProgressbar>
                            </div>
                            <div className="absolute flex flex-col gap-1 inset-x-[0] items-center justify-center mx-auto top-[38%] w-auto">
                              <Text
                                className="sm:text-2xl md:text-[26px] text-[28px] text-black-900_02 tracking-[0.28px] w-auto"
                                size="txtAeonikProTRIALRegular28"
                              >
                                72%
                              </Text>
                              <Text
                                className="text-center text-gray-500 text-sm tracking-[0.14px] w-auto"
                                size="txtAeonikProTRIALRegular14"
                              >
                                Completed
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[3%] flex flex-row gap-[31px] inset-x-[0] items-center justify-between mx-auto w-[364px]">
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-[22px] text-black-900_02 sm:text-lg md:text-xl tracking-[0.22px]"
                              size="txtAeonikProTRIALRegular22"
                            >
                              95
                            </Text>
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtAeonikProTRIALRegular14Gray60001"
                            >
                              Total projects
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-[22px] text-green-800 sm:text-lg md:text-xl tracking-[0.22px]"
                              size="txtAeonikProTRIALRegular22Green800"
                            >
                              26
                            </Text>
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtAeonikProTRIALRegular14Gray60001"
                            >
                              Completed
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-[22px] sm:text-lg md:text-xl text-yellow-800_01 tracking-[0.22px]"
                              size="txtAeonikProTRIALRegular22Yellow80001"
                            >
                              35
                            </Text>
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtAeonikProTRIALRegular14Gray60001"
                            >
                              Delayed
                            </Text>
                          </div>
                          <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                            <Text
                              className="text-[22px] text-deep_orange-600_01 sm:text-lg md:text-xl tracking-[0.22px]"
                              size="txtAeonikProTRIALRegular22Deeporange60001"
                            >
                              35
                            </Text>
                            <Text
                              className="text-gray-600_01 text-sm w-auto"
                              size="txtAeonikProTRIALRegular14Gray60001"
                            >
                              On going
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenThreePage;
