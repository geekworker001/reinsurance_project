import React from "react";

const sizeClasses = {
  txtSFProTextRegular17: "font-normal font-sfprotext",
  txtEverettMedium18: "font-everett font-medium",
  txtAeonikProTRIALRegular28: "font-aeonikprotrial font-normal",
  txtInterBold25: "font-bold font-inter",
  txtNunitoSemiBold12Blue700: "font-nunito font-semibold",
  txtEverettMedium18WhiteA700: "font-everett font-medium",
  txtOutfitRegular40: "font-normal font-outfit",
  txtEverettRegular12Gray600: "font-everett font-normal",
  txtJostSemiBold64: "font-jost font-semibold",
  txtJostSemiBold20: "font-jost font-semibold",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtAeonikProTRIALRegular22Deeporange60001: "font-aeonikprotrial font-normal",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtInterBold20: "font-bold font-inter",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtNunitoSemiBold10: "font-nunito font-semibold",
  txtEverettMedium12: "font-everett font-medium",
  txtEverettRegular12Red500: "font-everett font-normal",
  txtEverettMedium12WhiteA700: "font-everett font-medium",
  txtNunitoSemiBold16: "font-nunito font-semibold",
  txtAeonikProTRIALRegular22Yellow80001: "font-aeonikprotrial font-normal",
  txtInterSemiBold15Black900: "font-inter font-semibold",
  txtNunitoSemiBold12IndigoA200: "font-nunito font-semibold",
  txtVollkornRomanSemiBold48: "font-semibold font-vollkorn",
  txtNunitoSemiBold12: "font-nunito font-semibold",
  txtNunitoRegular12: "font-normal font-nunito",
  txtPoppinsSemiBold14Yellow900: "font-poppins font-semibold",
  txtNunitoRegular14: "font-normal font-nunito",
  txtJostSemiBold20Gray60075: "font-jost font-semibold",
  txtInterMedium11: "font-inter font-medium",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtAeonikProTRIALRegular22Green800: "font-aeonikprotrial font-normal",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtNunitoBold18Black9009901: "font-bold font-nunito",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtNunitoRegular12Black90099: "font-normal font-nunito",
  txtNunitoRegular10: "font-normal font-nunito",
  txtPoppinsMedium14Deeporange600: "font-medium font-poppins",
  txtPoppinsRegular12Gray60002: "font-normal font-poppins",
  txtEverettRegular12: "font-everett font-normal",
  txtNunitoSemiBold24: "font-nunito font-semibold",
  txtEverettRegular12WhiteA700: "font-everett font-normal",
  txtNunitoBold18: "font-bold font-nunito",
  txtNunitoSemiBold16Black90087: "font-nunito font-semibold",
  txtQuestrialRegular40: "font-normal font-questrial",
  txtRubikRomanMedium24: "font-medium font-rubik",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsMedium14: "font-medium font-poppins",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtInterSemiBold10: "font-inter font-semibold",
  txtNunitoRegular12Black90001: "font-normal font-nunito",
  txtAeonikProTRIALRegular14Gray60001: "font-aeonikprotrial font-normal",
  txtEverettRegular12Red400: "font-everett font-normal",
  txtNunitoSemiBold16Indigo200: "font-nunito font-semibold",
  txtAeonikProTRIALRegular12: "font-aeonikprotrial font-normal",
  txtAeonikProTRIALRegular16: "font-aeonikprotrial font-normal",
  txtAeonikProTRIALRegular14: "font-aeonikprotrial font-normal",
  txtNunitoRegular12Black900a2: "font-normal font-nunito",
  txtNunitoRegular14Black90001: "font-normal font-nunito",
  txtNunitoBold24: "font-bold font-nunito",
  txtEverettRegular12LightgreenA700: "font-everett font-normal",
  txtNunitoSemiBold16Black9008701: "font-nunito font-semibold",
  txtInterSemiBold15: "font-inter font-semibold",
  txtNunitoSemiBold12Green700: "font-nunito font-semibold",
  txtInterSemiBold12: "font-inter font-semibold",
  txtPoppinsRegular36: "font-normal font-poppins",
  txtPoppinsRegular10Bluegray500: "font-normal font-poppins",
  txtEverettRegular12WhiteA700cc: "font-everett font-normal",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtNunitoBold24Black90003: "font-bold font-nunito",
  txtAeonikProTRIALRegular22: "font-aeonikprotrial font-normal",
  txtNunitoSemiBold16Black9007f: "font-nunito font-semibold",
  txtZenKakuGothicAntiqueBold15: "font-bold font-zenkakugothicantique",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
