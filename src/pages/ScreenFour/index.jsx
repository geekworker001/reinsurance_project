import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, Line, ReactTable, SelectBox, Text } from "components";

const juneCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const julyCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ScreenFourPage = () => {
  const tableData = React.useRef([
    {
      rowsn: "images/img_lightbulb.svg",
      rowinsured: "Kwadwo Sarpong",
      rowlanguagefour: "$10",
      rowstatus: "Paid",
      rowtotalsalesone: "$3,46,660",
    },
    {
      rowsn: "images/img_lightbulb_orange_700.svg",
      rowinsured: "Metro Mass Transit ",
      rowlanguagefour: "$15",
      rowstatus: "20,000 Piece",
      rowtotalsalesone: "$3,00,000",
    },
    {
      rowsn: "images/img_lightbulb_orange_700.svg",
      rowinsured: "SIC life ",
      rowlanguagefour: "$10",
      rowstatus: "15,000 Piece",
      rowtotalsalesone: "$1,50,000",
    },
  ]);
  const { collapseSidebar, collapsed } = useProSidebar();
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("rowsn", {
        cell: (info) => (
          <div className="flex flex-row items-center justify-center p-[9px]">
            <Img
              className="h-[18px] mt-[19px]"
              alt="lightbulb"
              src="info?.getValue()"
            />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-[11px] items-end justify-center min-w-[91px]">
            <Text className="text-black-900 text-xs" size="txtNunitoRegular12">
              SN
            </Text>
            <Img
              className="h-[5px] mb-1 mt-[7px] w-[5px]"
              src="images/img_arrowdown2_black_900_01.svg"
              alt="arrowdownTwo"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowinsured", {
        cell: (info) => (
          <div className="flex flex-row gap-2.5 items-center justify-start pt-[3px] px-[3px]">
            <div className="bg-orange-A100_67 h-[37px] mt-3.5 rounded-[18px] w-9"></div>
            <Text
              className="text-blue-700 text-xs"
              size="txtNunitoSemiBold12Blue700"
            >
              {info?.getValue()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row gap-3.5 items-end justify-start min-w-[196px] pb-0.5 pr-0.5">
            <Text className="text-black-900 text-xs" size="txtNunitoRegular12">
              Insured
            </Text>
            <Img
              className="h-[5px] mb-[3px] mt-2 w-[5px]"
              src="images/img_arrowdown2_black_900_01.svg"
              alt="arrowdownThree"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowlanguagefour", {
        cell: (info) => (
          <Text
            className="pb-2 pt-[31px] sm:px-5 px-[35px] text-black-900 text-xs"
            size="txtNunitoRegular12"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[164px] pr-0.5 pt-0.5">
            <Text className="text-black-900 text-xs" size="txtNunitoRegular12">
              Policy Number{" "}
            </Text>
            <Img
              className="h-[5px] w-[5px]"
              src="images/img_arrowdown2_black_900_01.svg"
              alt="arrowdownFour"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowstatus", {
        cell: (info) => (
          <Text
            className="pb-2 pl-[3px] pt-[31px] text-black-900 text-xs"
            size="txtNunitoRegular12"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row items-center justify-center min-w-[145px] pt-0.5 px-0.5">
            <Text className="text-black-900 text-xs" size="txtNunitoRegular12">
              Status
            </Text>
            <Img
              className="h-[5px] w-[5px]"
              src="images/img_arrowdown2_black_900_01.svg"
              alt="arrowdownFive"
            />
          </div>
        ),
      }),
      tableColumnHelper.accessor("rowtotalsalesone", {
        cell: (info) => (
          <Text
            className="pb-2 pl-[18px] pt-[31px] text-green-700 text-xs"
            size="txtNunitoSemiBold12Green700"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <div className="flex flex-row gap-2.5 items-end justify-center min-w-[95px]">
            <Text className="text-black-900 text-xs" size="txtNunitoRegular12">
              Total Sales
            </Text>
            <Img
              className="h-[5px] mb-1 mt-[7px] w-[5px]"
              src="images/img_arrowdown2_black_900_01.svg"
              alt="arrowdownSix"
            />
          </div>
        ),
      }),
    ];
  }, []);

  const sideBarMenu = [
    {
      label: (
        <div className="md:h-[103px] h-[78px] sm:pl-5 relative w-full">
          <div className="absolute flex flex-col gap-8 h-full inset-[0] justify-center m-auto w-[70%]">
            <Img className="h-6 w-6" src="images/img_file.svg" alt="file" />
            <Text className="md:ml-[0] ml-[38px] text-black-900_87">
              Pending List
            </Text>
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
          alt="menu_One"
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
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-nunito sm:gap-10 md:gap-10 gap-[67px] items-start justify-end mx-auto pb-1 px-1 w-full">
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[191px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start md:mt-0 mt-[50px] overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_menu.svg')" }}
        >
          <div className="flex flex-row gap-[15px] items-center justify-start mb-[781px] mr-[38px] w-[81%]">
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
                  color: "#8c8ec3",
                  position: "relative",
                },
              },
            }}
            className="h-[738px] md:h-[819px] sm:h-[979px] mt-[84px] sm:pr-5 pr-[25px] pt-[97px] relative w-[98%]"
          >
            <Button className="absolute bg-indigo-900_87 flex inset-x-[0] items-center justify-center mx-auto p-1.5 rounded-[10px] top-[13%] w-full">
              <Img src="images/img_addinvoice.svg" alt="addinvoice" />
            </Button>
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:h-[171px] h-[172px] sm:h-[213px] relative w-full">
                  <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                    <div className="flex flex-col gap-[29px] items-center justify-start w-full">
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
                            src="images/img_menu_indigo_200.svg"
                            alt="menu"
                          />
                          <Text className="text-indigo-200">Home</Text>
                        </div>
                        <MenuItem>
                          <Text className="text-indigo-200">Add Entry</Text>
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
                          <Text className="text-indigo-200">Edit Entry</Text>
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
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text>Settings</Text>
                </div>
                <MenuItem>
                  <div className="flex flex-row items-center justify-end sm:pl-5">
                    <div className="h-[47px] relative w-[33%]">
                      <div className="absolute bg-gray-100 h-[43px] inset-y-[0] left-[0] my-auto rounded-[12px] w-[87%]"></div>
                      <Img
                        className="absolute h-[47px] inset-y-[0] my-auto object-cover right-[0] rounded-[19px] w-[47px]"
                        src="images/img_avatarimage_47x186.png"
                        alt="avatarimage"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                      <Text className="text-black-900 text-xs">Paa Kwesi</Text>
                      <Text className="text-[10px] text-black-900_87">
                        Profile
                      </Text>
                    </div>
                    <Img
                      className="h-4 w-[17px]"
                      src="images/img_videocamera.svg"
                      alt="videocamera"
                    />
                  </div>
                </MenuItem>
              </div>
            </div>
          </Menu>
        </Sidebar>
        <div className="flex flex-1 md:h-[1079px] sm:h-[524px] h-[861px] justify-end mb-[35px] md:px-5 relative w-full">
          <div className="flex flex-row gap-4 h-full items-center justify-center mb-[213px] ml-[231px] mt-auto w-[13%]">
            <Img
              className="h-[22px] w-[22px]"
              src="images/img_icons_white_a700.svg"
              alt="icons_One"
            />
            <Text
              className="text-base text-black-900_87_01"
              size="txtNunitoSemiBold16Black9008701"
            >
              Task Manager
            </Text>
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="md:h-[1044px] sm:h-[489px] h-[861px] relative w-full">
              <div className="absolute bottom-[0] md:h-[341px] h-[343px] right-[0] w-[33%] sm:w-full">
                <div className="absolute bg-white-A700 h-[341px] inset-[0] justify-center m-auto rounded-[10px] w-[98%]"></div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-5 w-[98%]"
                  style={{
                    backgroundImage: "url('images/img_salesanalytics.svg')",
                  }}
                >
                  <div className="flex flex-col items-center justify-start mb-[11px] mt-2 w-[94%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-black-900_99 text-lg"
                          size="txtNunitoBold18"
                        >
                          Claims Payment Analytics
                        </Text>
                      </div>
                      <Img
                        className="h-0.5"
                        src="images/img_3dot.svg"
                        alt="3dot"
                      />
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[179px] items-center justify-start mt-6 p-[58px] md:px-10 sm:px-5 w-[56%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group201.svg')",
                      }}
                    >
                      <Button className="bg-blue-A200_63 flex items-center justify-center p-4 rounded-[29px] w-[97%]">
                        <Img
                          src="images/img_vector_blue_a200.svg"
                          alt="vector"
                        />
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between mt-[30px] w-full">
                      <div className="flex flex-row gap-[5px] items-center justify-evenly w-[29%]">
                        <div className="bg-blue-A200 h-3.5 my-0.5 rounded-[7px] w-[13px]"></div>
                        <Text
                          className="text-black-900_99 text-sm"
                          size="txtNunitoRegular14"
                        >
                          Total Sales
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-center w-[29%]">
                        <div className="bg-indigo-900 h-3.5 my-0.5 rounded-[7px] w-[13px]"></div>
                        <Text
                          className="text-black-900_99 text-sm"
                          size="txtNunitoRegular14"
                        >
                          Total Order
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-center justify-evenly w-[33%]">
                        <div className="bg-deep_orange-600 h-3.5 my-0.5 rounded-[7px] w-[13px]"></div>
                        <Text
                          className="text-black-900_99 text-sm"
                          size="txtNunitoRegular14"
                        >
                          Order Cancel
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute md:h-[1044px] sm:h-[489px] h-[861px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[1044px] sm:h-[489px] h-[861px] m-auto w-full">
                  <div className="absolute bottom-[0] h-[811px] left-[0] w-[66%] md:w-full">
                    <div className="flex flex-col font-poppins items-center justify-start mb-[-23.52px] mx-auto pb-7 w-[96%] z-[1]">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                          <div className="flex flex-row gap-6 items-center justify-center w-auto">
                            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                              <Text
                                className="text-base text-gray-800 tracking-[-0.32px] w-auto"
                                size="txtPoppinsRegular16"
                              >
                                Claims
                              </Text>
                              <div className="bg-deep_orange-600 h-[18px] rounded-[5px] w-[18px]"></div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-center w-auto">
                              <Text
                                className="text-base text-gray-800 tracking-[-0.32px] w-auto"
                                size="txtPoppinsRegular16"
                              >
                                Payments
                              </Text>
                              <div className="bg-indigo-900 h-[18px] rounded w-[18px]"></div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-center w-auto">
                            <Text
                              className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                              size="txtPoppinsRegular12Gray60002"
                            >
                              From
                            </Text>
                            <SelectBox
                              className="text-gray-900 text-left text-sm tracking-[-0.56px] w-[34%] sm:w-full"
                              placeholderClassName="text-gray-900"
                              indicator={
                                <Img
                                  className="h-6 w-6"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="juneCounter"
                              options={juneCounterOptionsList}
                              isSearchable={false}
                              placeholder="20 June"
                            />
                            <Text
                              className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                              size="txtPoppinsRegular12Gray60002"
                            >
                              To
                            </Text>
                            <SelectBox
                              className="text-gray-900 text-left text-sm tracking-[-0.56px] w-[31%] sm:w-full"
                              placeholderClassName="text-gray-900"
                              indicator={
                                <Img
                                  className="h-6 w-[23px]"
                                  src="images/img_arrowdown_gray_900.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="julyCounter"
                              options={julyCounterOptionsList}
                              isSearchable={false}
                              placeholder="20 July"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-start w-full">
                          <div className="overflow-x-auto w-full">
                            <div className="flex flex-col gap-[5px] justify-start w-full">
                              <div className="flex md:flex-col flex-row gap-[29px] items-center justify-start mr-[65px] w-[92%] md:w-full">
                                <div className="flex flex-col gap-[50px] items-start justify-start">
                                  <Text
                                    className="text-gray-600_02 text-sm tracking-[-0.28px]"
                                    size="txtPoppinsRegular14"
                                  >
                                    140M
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-sm tracking-[-0.28px]"
                                    size="txtPoppinsRegular14"
                                  >
                                    120M
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-sm tracking-[-0.28px]"
                                    size="txtPoppinsRegular14"
                                  >
                                    100M
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-sm tracking-[-0.28px]"
                                    size="txtPoppinsRegular14"
                                  >
                                    80M
                                  </Text>
                                </div>
                                <div className="md:h-[216px] h-[221px] relative w-[92%] md:w-full">
                                  <div className="absolute flex h-[216px] inset-[0] justify-end m-auto w-full">
                                    <Img
                                      className="h-[129px] mb-5 mt-auto mx-auto"
                                      src="images/img_shape.svg"
                                      alt="shape"
                                    />
                                    <Img
                                      className="absolute h-[216px] inset-[0] justify-center m-auto"
                                      src="images/img_group2.svg"
                                      alt="groupTwo"
                                    />
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[198px] inset-x-[0] items-end justify-end mx-auto p-[35px] sm:px-5 w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group203.png')",
                                    }}
                                  >
                                    <div className="bg-blue-A400_01 border-4 border-solid border-white-A700 h-5 mr-[213px] mt-[106px] rounded-[9px] shadow-bs4 w-[19px]"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[65px] w-[92%] md:w-full">
                                <div className="flex md:flex-col flex-row gap-[25px] items-center justify-center w-auto md:w-full">
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    20 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    21 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    22 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    23 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    24 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    25 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    26 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    27 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    28 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    29 Jun
                                  </Text>
                                  <Text
                                    className="text-gray-600_02 text-xs tracking-[-0.24px] w-auto"
                                    size="txtPoppinsRegular12Gray60002"
                                  >
                                    30 Jun
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[497px] items-center justify-start mt-auto mx-auto p-[29px] sm:px-5 w-full"
                      style={{
                        backgroundImage: "url('images/img_salesanalytics.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start mb-[15px] w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99_01 text-lg"
                              size="txtNunitoBold18Black9009901"
                            >
                              Pending Claim list{" "}
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start mt-0.5">
                            <a
                              href="javascript:"
                              className="text-indigo-A200 text-xs"
                            >
                              <Text size="txtNunitoSemiBold12IndigoA200">
                                See More
                              </Text>
                            </a>
                          </div>
                        </div>
                        <div className="overflow-auto mt-[29px] w-full">
                          <ReactTable
                            columns={tableColumns}
                            data={tableData.current}
                            rowClass={""}
                            headerClass=""
                          />
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[57px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_salesanalytics.svg')",
                          }}
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-3">
                              <Text
                                className="text-black-900_a2 text-xs"
                                size="txtNunitoRegular12Black900a2"
                              >
                                4
                              </Text>
                            </div>
                            <div className="bg-blue_gray-900_67 h-[37px] md:ml-[0] ml-[67px] rounded-[18px] w-9"></div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] md:mt-0 mt-3">
                              <Text
                                className="text-blue-700 text-xs"
                                size="txtNunitoSemiBold12Blue700"
                              >
                                Edem Courage
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[110px] md:mt-0 mt-3">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                $12
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[97px] md:mt-0 mt-[13px]">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                10,000 Piece
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] md:mt-0 mt-3">
                              <Text
                                className="text-green-700 text-xs"
                                size="txtNunitoSemiBold12Green700"
                              >
                                $1,20,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[57px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage: "url('images/img_line5.svg')",
                          }}
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-3">
                              <Text
                                className="text-black-900_a2 text-xs"
                                size="txtNunitoRegular12Black900a2"
                              >
                                5
                              </Text>
                            </div>
                            <div className="bg-blue-A400_67 h-[37px] md:ml-[0] ml-[67px] rounded-[18px] w-9"></div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] md:mt-0 mt-[11px]">
                              <Text
                                className="text-blue-700 text-xs"
                                size="txtNunitoSemiBold12Blue700"
                              >
                                EPA
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[167px] md:mt-0 mt-3">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                $12
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[97px] md:mt-0 mt-[13px]">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                10,000 Piece
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] md:mt-0 mt-3">
                              <Text
                                className="text-green-700 text-xs"
                                size="txtNunitoSemiBold12Green700"
                              >
                                $1,20,000
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[57px] items-center justify-end p-[9px] w-full"
                          style={{
                            backgroundImage:
                              "url('images/img_salesanalytics.svg')",
                          }}
                        >
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                            <div className="flex flex-col items-center justify-start md:mt-0 mt-3">
                              <Text
                                className="text-black-900_a2 text-xs"
                                size="txtNunitoRegular12Black900a2"
                              >
                                5
                              </Text>
                            </div>
                            <div className="bg-gray-900_67 h-[37px] md:ml-[0] ml-[67px] rounded-[18px] w-9"></div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[9px] md:mt-0 mt-3">
                              <Text
                                className="text-blue-700 text-xs"
                                size="txtNunitoSemiBold12Blue700"
                              >
                                Girls Top
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[141px] md:mt-0 mt-3">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                $12
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[97px] md:mt-0 mt-[13px]">
                              <Text
                                className="text-black-900 text-xs"
                                size="txtNunitoRegular12"
                              >
                                10,000 Piece
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] md:mt-0 mt-3">
                              <Text
                                className="text-green-700 text-xs"
                                size="txtNunitoSemiBold12Green700"
                              >
                                $1,20,000
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute h-96 md:h-[373px] right-[2%] top-[11%] w-[31%]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-end justify-center m-auto p-2 w-full"
                      style={{
                        backgroundImage: "url('images/img_salesanalytics.svg')",
                      }}
                    >
                      <div className="flex flex-col gap-[18px] items-start justify-start mb-[92px] mt-[38px] w-[94%] md:w-full">
                        <div className="flex flex-row items-start justify-start w-4/5 md:w-full">
                          <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                            <Text
                              className="h-[17px] text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              Jan
                            </Text>
                          </div>
                          <Img
                            className="h-3 ml-3"
                            src="images/img_progress.svg"
                            alt="progress"
                          />
                          <Text
                            className="ml-3.5 text-black-900_01 text-xs"
                            size="txtNunitoRegular12Black90001"
                          >
                            23,400
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[54%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              Feb
                            </Text>
                          </div>
                          <Img
                            className="h-3 ml-[9px]"
                            src="images/img_ticket.svg"
                            alt="ticket"
                          />
                          <div className="flex flex-col items-center justify-start ml-3.5">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              15,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[94%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              Mar
                            </Text>
                          </div>
                          <Img
                            className="h-3 ml-[7px]"
                            src="images/img_progress.svg"
                            alt="progress_One"
                          />
                          <div className="flex flex-col items-center justify-start ml-3.5">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              30,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[72%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              Apr
                            </Text>
                          </div>
                          <Img
                            className="h-3 ml-[9px]"
                            src="images/img_prgress.svg"
                            alt="prgress"
                          />
                          <div className="flex flex-col items-center justify-start ml-3.5">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              22,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[46%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              May
                            </Text>
                          </div>
                          <Img
                            className="h-3 ml-1.5"
                            src="images/img_ticket.svg"
                            alt="ticket_One"
                          />
                          <div className="flex flex-col items-center justify-start ml-3.5">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              10,000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-between w-full">
                          <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                            <div className="flex flex-col h-[17px] items-center justify-start w-[17px]">
                              <Text
                                className="h-[17px] text-black-900_99 text-xs"
                                size="txtNunitoRegular12Black90099"
                              >
                                Jun
                              </Text>
                            </div>
                          </div>
                          <Img
                            className="h-3"
                            src="images/img_progress.svg"
                            alt="progress_Two"
                          />
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              23,400
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[31%] md:w-full">
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="text-black-900_99 text-xs"
                              size="txtNunitoRegular12Black90099"
                            >
                              Jul
                            </Text>
                          </div>
                          <div className="bg-indigo-900 h-3 ml-3.5 my-0.5 rounded-br-[30px] rounded-tr-[30px] w-[19%]"></div>
                          <div className="flex flex-col items-center justify-start ml-3.5">
                            <Text
                              className="text-black-900_01 text-xs"
                              size="txtNunitoRegular12Black90001"
                            >
                              5,000
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col items-center justify-start left-[12%] top-[0]">
                      <Text
                        className="text-black-900_99_01 text-lg"
                        size="txtNunitoBold18Black9009901"
                      >
                        Premiums Signed by Month
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-end justify-start mx-auto top-[0] w-full">
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-1.5">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900_03 sm:text-xl"
                        size="txtNunitoBold24Black90003"
                      >
                        Reinsurance Fac Data
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-10 items-center justify-start md:ml-[0] ml-[625px] p-2.5 w-[12%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_salesanalytics.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-2 items-center justify-center w-[82%] md:w-full">
                        <Text
                          className="text-black-900_01 text-sm"
                          size="txtNunitoRegular14Black90001"
                        >
                          10-06-2021
                        </Text>
                        <Img
                          className="h-1.5 w-[7px]"
                          src="images/img_arrowdown2.svg"
                          alt="location"
                        />
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] w-[12%] md:w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-2.5 w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_salesanalytics.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start w-[82%] md:w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-full">
                            <Text
                              className="text-black-900_01 text-sm"
                              size="txtNunitoRegular14Black90001"
                            >
                              10-10-2021
                            </Text>
                            <Img
                              className="h-1.5 w-[7px]"
                              src="images/img_arrowdown2.svg"
                              alt="location_One"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white-A700 flex flex-row font-sfprotext h-9 md:h-auto inset-x-[0] items-center justify-center mx-auto p-2 rounded-[10px] shadow-bs1 top-[4%] w-[420px] sm:w-full">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScreenFourPage;
