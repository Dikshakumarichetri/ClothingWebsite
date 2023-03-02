import React from "react";

function Svg(props) {
    const { icon, classname, width, height, color, paddedLeft } = props;

    const MenIcon = (
        <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 1 224 0a128 128 0 1 1 0 256zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 36-146.9c2-8.1 9.8-13.4 17.9-11.3c70.1 17.6 121.9 81 121.9 156.4c0 17-13.8 30.7-30.7 30.7H285.5c-2.1 0-4-.4-5.8-1.1l.3 1.1H168l.3-1.1c-1.8 .7-3.8 1.1-5.8 1.1H30.7C13.8 512 0 498.2 0 481.3c0-75.5 51.9-138.9 121.9-156.4c8.1-2 15.9 3.3 17.9 11.3l36 146.9 33.4-123.9z" /></svg>
    );
    const WomenIcon = (
        <svg
            width="20"
            height="20"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path class="cls-1" d="M101.74,391.73,176.91,512H89.6a19.26,19.26,0,0,1-19.2-19.2C70.4,457.54,82,421.57,101.74,391.73ZM352,192V160a19.26,19.26,0,0,0-19.2-19.2H192A19.26,19.26,0,0,0,172.8,160v29.12a93.45,93.45,0,0,0,33.79,72.13l4.61,3.84v45.18l51.2,32.9,51.2-32.9V265.73l4.8-3.84A89.2,89.2,0,0,0,352,192ZM185.6,299.89v-23a119,119,0,0,1-38.4-87.79V160A44.85,44.85,0,0,1,192,115.2H332.8A44.85,44.85,0,0,1,377.6,160v32a114.61,114.61,0,0,1-38.4,85.8v22.09a184.59,184.59,0,0,1,82,44.66,74.44,74.44,0,0,0,3.45-26.46L416,153.6a153.6,153.6,0,0,0-307.2,0l-8.66,164.49a74.44,74.44,0,0,0,3.45,26.46A184.59,184.59,0,0,1,185.6,299.89Zm76.79,59.74h0Zm76.81-33.09v62.72c0,7.43-6.56,12.27-12.13,8.94L262.4,359.64,197.73,398.2c-5.57,3.32-12.13-1.51-12.13-8.94V326.54c-25.83,7.6-48.7,23.25-67.15,43.63L207.09,512H317.71l88.65-141.83C387.9,349.79,365,334.15,339.2,326.54Zm83.86,65.19L347.89,512H435.2a19.26,19.26,0,0,0,19.2-19.2C454.4,457.54,442.83,421.57,423.06,391.73ZM322,369.09V333.71L286.62,351.4Zm-119,0,35.38-17.69L203,333.71Z" /></svg>
    );
    switch (icon) {
        case "MenIcon":
            return MenIcon;
        case "WomenIcon":
            return WomenIcon;
        default:
            return null;
    }

}

export default Svg;