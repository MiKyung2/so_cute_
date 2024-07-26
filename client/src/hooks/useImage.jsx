import axios from "axios";
import { useState } from "react";

const useImage = () => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchImage = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "/api/proxy?q=강아지, 고양이 등 모든 사람이 귀엽게 생각하는 이미지 5장"
      );
      console.log({ response });
      setImageUrl(response.data);
    } catch (err) {
      setImageUrl(null);
      setError("이미지를 생성하는 중 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  return {
    loading,
    error,
    imageUrl,
    fetchImage,
  };
};

export default useImage;
