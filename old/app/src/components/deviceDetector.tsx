import React from "react";

const device = () => {
  const ua = window.navigator.userAgent.toLowerCase();
  if (
    ua.indexOf("iphone") > 0 ||
    ua.indexOf("ipod") > 0 ||
    (ua.indexOf("android") > 0 && ua.indexOf("mobile") > 0)
  ) {
    return "sp";
  }
  if (ua.indexOf("ipad") > 0 || ua.indexOf("android") > 0) {
    // iOS12 まで
    return "tab";
  }
  if (
    ua.indexOf("ipad") > -1 ||
    (ua.indexOf("macintosh") > -1 && "ontouchend" in document)
  ) {
    // iOS13 以降
    return "tab";
  }
  return "pc";
};

interface IDeviceDetectorProps {
  setDevice: (device: string) => void;
}
const DeviceDetector: React.FC<IDeviceDetectorProps> = (props) => {
  props.setDevice(device());
  return <React.Fragment />;
};
export default DeviceDetector;
