import "../styles/UploadBox.css";
import { useState } from 'react';

const MAX_MB = 8;                         // 허용 용량(MB)
const MAX_MP = 12;                        // 허용 해상도(메가픽셀)
const ALLOWED_TYPES = /image\/(jpeg|png|webp)/i;
const toMB = (b) => (b / 1048576).toFixed(1);

const defaultImage = new URL("../assets/face.svg", import.meta.url).href;
const RAW_BASE = import.meta.env.VITE_API_BASE_URL || "/api/v1";
const API_BASE = RAW_BASE.replace(/\/+$/, ""); // 끝 슬래시 제거

const UploadBox = () => {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [annotatedImgUrl, setAnnotatedImgUrl] = useState(null);
  const [responseText, setResponseText] = useState("");
  const [llm, setLlm] = useState("gpt");

  const handleFileChange = (e) => {
  const selected = e.target.files?.[0];
    if (!selected) return;

      // 1) 포맷 체크
      if (!ALLOWED_TYPES.test(selected.type)) {
        alert("JPG/PNG/WEBP 형식만 지원합니다.");
        e.target.value = "";
        return;
      }

      // 2) 용량 체크
      if (selected.size > MAX_MB * 1024 * 1024) {
        alert(`파일이 너무 큽니다 (${toMB(selected.size)}MB). ${MAX_MB}MB 이하로 업로드해주세요.`);
        e.target.value = "";
        return;
      }

    // 3) 해상도(메가픽셀) 체크
    const objUrl = URL.createObjectURL(selected);
    const img = new Image();
    img.onload = () => {
      const mp = (img.naturalWidth * img.naturalHeight) / 1e6;
      
      if (mp > MAX_MP) {
        URL.revokeObjectURL(objUrl);
        alert(
          `이미지 해상도가 너무 큽니다 (${img.naturalWidth}x${img.naturalHeight} ≈ ${mp.toFixed(1)}MP).\n` +
          `해상도를 낮춘 사진을 업로드해주세요. (권장: ${MAX_MP}MP 이하)`
        );
        e.target.value = "";
        return;
      }

      // ✅ 통과 시 상태 반영
    setFile(selected);
      // 이전 blob URL 정리
    setPreviewUrl(prev => {
      if (prev?.startsWith('blob:')) URL.revokeObjectURL(prev);
      return objUrl; // 새 미리보기는 revoke 하지 않음
      });
    };
    img.onerror = () => {
      URL.revokeObjectURL(objUrl);
      alert("이미지 파일을 읽을 수 없습니다. 다른 사진으로 시도해주세요.");
      e.target.value = "";
    };
    img.src = objUrl;
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
  
    setLoading(true); // ✅ 시작 시 로딩 true

    try {
      const url = `${API_BASE}/${String(endpoint).replace(/^\/+/, "")}`;
      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text);
      }

      // 여기가 중요! 전체 json 중에서 필요한 값만 분리해서 set
      const json = await res.json();
      setResponseText(json.interpretation || "");
      const toAbs = (u) =>
        (u?.startsWith("http") || u?.startsWith("data:"))
          ? u
          : `${API_BASE}/${String(u || "").replace(/^\/+/, "")}`;
      setAnnotatedImgUrl(toAbs(json.annotated_image));

    } catch (err) {
      setResponseText("ERROR:\n" + err.message);
      setAnnotatedImgUrl(null);
    } finally {
      setLoading(false);   // ✅ 성공/실패 상관없이 무조건 실행
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
        {loading ? (
          <p style={{ color: "#333", fontWeight: "bold" }}>얼굴 관상 분석 중...</p>
        ) : (
          <button onClick={() => postImageToAPI("interpret", { llm })}>
            나의 관상보기
          </button>
        )}
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
            color: "#000",
          }}
        >
          {responseText}
        </pre>
      )}

    </div>
  );
};

export default UploadBox;
