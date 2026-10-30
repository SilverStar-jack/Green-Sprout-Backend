# 김도윤 포트폴리오

정적 HTML, CSS, 바닐라 JavaScript로 만든 백엔드 개발자 포트폴리오입니다. GitHub Pages에서 저장소 하위 경로로도 사용할 수 있도록 페이지 리소스 경로를 상대 경로로 작성했습니다.

## 파일 구성

```text
index.html                         포트폴리오 콘텐츠와 섹션 구조
css/
  style.css                        색상, 레이아웃, 반응형 및 접근성 스타일
js/
  script.js                        모바일 메뉴, 프로젝트 안내 모달, 이메일 복사 등
assets/
  favicon.svg                      브라우저 탭에 표시되는 KD 아이콘
artifacts/doyun-portfolio/
  vite.config.ts                   Replit 미리보기와 정적 빌드 설정
  dist/public/                     빌드 시 생성되는 정적 배포 파일
README.md                          수정 및 GitHub Pages 배포 안내
```

## 콘텐츠 수정

- `index.html`에서 이름, 소개, 기술, 활동, 연락처와 프로젝트 안내를 수정합니다.
- 기술의 실제 활용 프로젝트나 활동이 정해지면 해당 기술 설명을 보완합니다. 현재 활용 맥락이 입력되지 않은 항목은 사실을 지어내지 않도록 안내 문구로 표시합니다.
- 실제 프로젝트가 생기면 프로젝트 섹션에 목적, 담당 역할, 기술, 주요 기능, 해결한 문제, 결과와 배운 점을 추가합니다. 제공되지 않은 프로젝트 내용은 비워 두었습니다.
- 스타일은 `css/style.css`, 메뉴와 모달 동작은 `js/script.js`에서 조정합니다.
- 이미지가 필요하면 `assets/`에 저장하고 `index.html`에서 `assets/파일명`처럼 상대 경로로 연결합니다.

## GitHub Pages 배포

1. `index.html`, `css/`, `js/`를 포함해 저장소 최상위 경로에 파일을 올립니다.
2. GitHub 저장소에서 **Settings → Pages**를 엽니다.
3. **Build and deployment**의 Source에서 **Deploy from a branch**를 선택합니다.
4. 배포할 브랜치와 폴더로 `/(root)`를 선택한 뒤 저장합니다.
5. Pages가 제공하는 주소에서 사이트를 확인합니다. 배포에는 백엔드 서버나 데이터베이스가 필요하지 않습니다.

Replit 미리보기와 빌드에는 `artifacts/doyun-portfolio`의 Vite 설정을 사용합니다. GitHub Pages는 소스의 `index.html`과 상대 경로의 CSS·JavaScript 파일을 직접 제공합니다.
