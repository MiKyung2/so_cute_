import React, { useState } from "react";
import SideMenu from "./components/SideMenu";
import useImage from "./hooks/useImage";
import useSettings from "./hooks/useSettings";
import "./App.css";

function App() {
  const { loading, error, imageUrl, fetchImage } = useImage();
  const { imageSize, onChangeImageSize } = useSettings();
  const [imageList, setImageList] = useState([]);

  const handleClick = async () => fetchImage();
  const handleChangeSelect = (e) => onChangeImageSize(e.target.value);

  const handleClickSave = () => {
    if (imageUrl === null) return alert("이미지를 생성해주세요.");
    setImageList((prev) => [
      {
        image: imageUrl,
        date: new Date().toLocaleDateString("ko-KR", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      },
      ...prev,
    ]);
  };

  return (
    <>
      <SideMenu imageList={imageList} />
      <div className="container">
        <h1>귀여운 이미지 생성기</h1>
        <div>
          <select value={imageSize} onChange={handleChangeSelect}>
            <option value="200px">200px</option>
            <option value="300px">300px</option>
            <option value="500px">500px</option>
            <option value="700px">700px</option>
          </select>
          <button type="button" onClick={handleClick} disabled={loading}>
            {loading ? "생성 중..." : "이미지 생성"}
          </button>
          <button type="button" onClick={handleClickSave}>
            저장
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
      {imageUrl !== null && (
        <>
          {imageUrl.map((image) => (
            <div
              className="imageBox"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: imageSize,
              }}
            />
          ))}
        </>
      )}
    </>
  );
}

export default App;
