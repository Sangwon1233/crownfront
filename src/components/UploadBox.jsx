import React, {useState} from "react";
import defaultImage from "../assets/face.svg";

const UploadBox = ()=> {
  const [previewUrl ,setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="upload-box-wrapper">
      <label htmlFor="imageUpload" className="upload-box">
        <img
          id="previewImage"
          src={previewUrl || defaultImage}
          alt="얼굴 사진 미리보기"
        />
        <div className="camera-icon">📷</div>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </label>
    </div>
  );
};
export default UploadBox;