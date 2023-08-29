import React from "react";

const MainWrapper = ({ children, className }
: WrapperProps
) => {
    return (
        <div
            className={`w-full max-w-[1028px] px-5 md:px-10 mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default MainWrapper
