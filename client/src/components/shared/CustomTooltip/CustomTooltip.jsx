import React from "react";
import { Tooltip } from "react-tooltip";

function CustomTooltip({ id, place = "top", type = "dark", effect = "solid", ...rest }) {
  return <Tooltip id={id} place={place} type={type} effect={effect} {...rest} />;
}

export default CustomTooltip;
