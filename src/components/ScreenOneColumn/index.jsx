import React from "react";

import { Text } from "components";

const ScreenOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-end justify-end px-1 w-auto md:w-full">
          <div className="flex flex-col h-20 md:h-auto items-end justify-start w-20">
            <Text
              className="md:text-5xl text-[64px] text-black-900 text-center"
              size="txtJostSemiBold64"
            >
              {props?.countertext}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

ScreenOneColumn.defaultProps = { countertext: "08" };

export default ScreenOneColumn;
