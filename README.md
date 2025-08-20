# 🚀 관상 분석 프로젝트 - React 프론트엔드

## 📌 목차
1. 사전 준비  
2. 설치 및 환경 구성  
3. 주요 페이지 구조  
4. API 연동 방식  
5. 상태 관리  
6. 실행 예시  
7. 주의사항 및 팁  

---

## 1. 사전 준비
- **Node.js** 18 이상 (Vite 호환성 고려)  
- **yarn** 또는 **npm** 패키지 매니저  
- 백엔드(API 서버) 실행 상태 확인 (`/var/www/back` Flask 서버)  
- `.env` 환경변수 설정 필수  

---

## 2. 설치 및 환경 구성
```bash
# 프로젝트 클론
git clone <repo_url>
cd front

# 의존성 설치
yarn install
# or
npm install


3. 주요 페이지 구조
src/
 ├── api/              # Axios API 모듈
 ├── components/       # 공용 UI 컴포넌트
 ├── pages/            # 주요 페이지
 │    ├── Upload.jsx        # 이미지 업로드 페이지
 │    ├── Result.jsx        # 관상 분석 결과 페이지
 │    └── NotFound.jsx      # 404 페이지
 ├── store/            # Zustand 전역 상태관리
 ├── styles/           # CSS / Tailwind 스타일
 ├── App.jsx           # 라우팅 및 메인 구조
 └── main.jsx          # 진입 파일

4. API 연동 방식
Axios를 사용하여 백엔드 Flask 서버와 통신

업로드된 이미지를 multipart/form-data로 전송

주요 엔드포인트:

POST /api/v1/metrics → 얼굴 랜드마크 및 메트릭 추출

POST /api/v1/annotate → GPT 기반 관상 해석 결과

.env에서 API 기본 URL 관리 (VITE_API_BASE_URL)


5. 상태 관리
Zustand 사용

사용자 업로드 이미지, 분석 결과, 로딩 상태를 전역으로 관리

javascript
import { create } from 'zustand';

export const useAnalysisStore = create(set => ({
  image: null,
  result: null,
  setImage: (img) => set({ image: img }),
  setResult: (res) => set({ result: res })
}));

6. 실행 예시
# 개발 서버 실행
yarn dev
# or
npm run dev

# 빌드
yarn build
# or
npm run build

# 로컬 빌드 미리보기
yarn preview
