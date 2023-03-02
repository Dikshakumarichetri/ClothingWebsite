import React, { useState } from 'react';
import Svg from '../icons/svg'; // point to your svgs.js wherever that may be

function SvgImage(props) {

    const { name, classname, height, width, color } = props;

    return (
        <Svg icon={name} classname={classname} height={height} width={width} color={color} />
    )
}

export default SvgImage;