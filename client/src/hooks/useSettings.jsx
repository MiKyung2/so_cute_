import { useState } from "react";

const useSettings = () => {
  const [imageSize, setImageSize] = useState("200px");

  const onChangeImageSize = (size) => {
    setImageSize(size);
  };

  return {
    imageSize,
    onChangeImageSize,
  };
};

export default useSettings;
