# Frontend Starter (Next.js App Router)

부트캠프 최종 프로젝트를 위한 **프론트엔드 공통 스타터 레포지토리**입니다.  
프로젝트 주제 공개 전까지, 팀 개발에 필요한 **기본 구조와 개발 환경**을 미리 구성해두었습니다.

---

## 기술 스택

- **Next.js** (App Router)
- **TypeScript**
- **CSS Modules**
- **Axios**
- **Zod**
- **ESLint (Flat Config) + Prettier**
- **Husky + Commitlint**
- **GitHub Actions (CI)**

---

## 프로젝트 구조

```txt
src/
├─ app/                # Next.js App Router
│  ├─ (root)/          # 홈 페이지 라우트 그룹
│  ├─ error.tsx        # Error Boundary
│  ├─ global-error.tsx # 전역 에러 처리
│  ├─ not-found.tsx    # 404 페이지
│  ├─ layout.tsx       # 전역 레이아웃
│  └─ globals.css      # 전역 스타일
│
├─ shared/             # 도메인과 무관한 공통 코드
│  ├─ apis/            # axios 인스턴스 / 인터셉터 / 에러 처리
│  ├─ constants/       # 전역 상수
│  ├─ utils/           # 순수 유틸 함수
│  └─ types/           # 공통 타입
│

---
```
