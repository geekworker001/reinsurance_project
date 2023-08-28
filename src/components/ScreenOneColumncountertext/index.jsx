import React from "react";

import { Text } from "components";

const ScreenOneColumncountertext = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-end px-1 w-auto md:w-full">
          <div className="flex flex-col h-20 md:h-auto items-start justify-start w-20">
            <Text
              className="md:text-5xl text-[64px] text-black-900 text-center"
              size="txtJostSemiBold64"
            >
              {props?.countervalue}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ScreenOneColumncountertext.defaultProps = { countervalue: "25" };

export default ScreenOneColumncountertext;
