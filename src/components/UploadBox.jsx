import React, { useState } from "react";
import "../styles/UploadBox.css";

const defaultImage = new URL("../assets/face.svg", import.meta.url).href;
const API_BASE = "http://3.35.218.157:5000/api/v1";

const UploadBox = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [annotatedImgUrl, setAnnotatedImgUrl] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [llm, setLlm] = useState("gpt");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selected);
  };

  const postImageToAPI = async (endpoint, extraFields = {}) => {
    if (!file) {
      alert("이미지를 먼저 업로드하세요.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);
    Object.entries(extraFields).forEach(([key, value]) =>
      formData.append(key, value)
    );

    try {
      const res = await fetch(`${API_BASE}/${endpoint}`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      // 여기가 중요! 전체 json 중에서 필요한 값만 분리해서 set
      const json = await res.json();
      setResponseText(json.interpretation); // 👈 해석 텍스트만 보여주자
      setAnnotatedImgUrl(json.annotated_image); // 👈 이건 <img>에 자동 반영됨

    } catch (err) {
      setResponseText("ERROR:\n" + err.message);
      setAnnotatedImgUrl(null);
    }
  };

  return (
    <div className="upload-box-wrapper">
      <label htmlFor="imageUpload" className="upload-box">
        <img src={previewUrl || defaultImage} alt="preview" />
        <div className="camera-icon">📷</div>
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </label>

      {/* LLM 선택 */}
      <div style={{ marginTop: "1rem" }}>
        <label>LLM 선택:</label>
        <select value={llm} onChange={(e) => setLlm(e.target.value)}>
          <option value="gpt">GPT</option>
          <option value="gemini">Gemini</option>
        </select>
      </div>

      {/* 버튼들 */}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={() => postImageToAPI("interpret", { llm })}>
          나의 관상보기
        </button>
      </div>

      {/* 선 그려진 이미지 출력 */}
      {annotatedImgUrl && (
        <div style={{ marginTop: "1rem" }}>
          <h3>분석 이미지</h3>
          <img src={annotatedImgUrl} alt="annotated" style={{ maxWidth: "100%" }} />
        </div>
      )}
      
      {/* 응답 출력 */}
      {responseText && (
        <pre
          style={{
            background: "#f7f7f7",
            padding: "1rem",
            whiteSpace: "pre-wrap",
            marginTop: "1rem",
          }}
        >
          {responseText}
        </pre>
      )}

    </div>
  );
};

export default UploadBox;
