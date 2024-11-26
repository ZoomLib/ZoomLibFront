# dh-zoom

**dh-zoom**은 React 기반의 이미지 확대 미리보기 라이브러리로, 마우스 오버 시 이미지의 특정 부분을 확대하여 보여줍니다. 
간단한 설정과 다양한 커스터마이징 옵션을 통해 전자상거래 사이트의 제품 이미지 확대, 갤러리 이미지 확대 등 다양한 용도로 활용할 수 있습니다.

---

## 📚 목차
1. [소개](#✨-소개)
2. [설치](#⚙️-설치)
3. [사용법](#🛠️-사용법)
   - [기본 예제](#기본-예제)
4. [주요 기능](#🎯-주요-기능)
5. [API 레퍼런스](#📖-api-레퍼런스)
6. [커스터마이징](#🎨-커스터마이징)
7. [FAQ](#❓-faq)
8. [기여](#🤝-기여)
9. [라이선스](#📄-라이선스)

---

## ✨ 소개

**dh-zoom**은 이미지 위에 마우스를 올리면 해당 위치의 확대된 이미지를 원형 또는 사각형 영역으로 보여주는 React 컴포넌트입니다. 
확대 영역의 크기, 확대 비율, 테두리 스타일 등 다양한 속성을 통해 커스터마이징이 가능합니다.

---

## ⚙️ 설치

`npm` 또는 `yarn`을 사용하여 설치할 수 있습니다.
```
npm install dh-zoom
또는
yarn add dh-zoom
```
---

## 🛠️ 사용법

**기본 예제**
아래는 기본적인 사용법입니다.

```
import React from "react";
import "./App.css";
import { ImageZoom } from "../src"; // ImageZoom import (index.tsx에서 export된 컴포넌트)

function App() {
  return (
    <div className="App">
      <h1>Image Zoom Demo</h1>
      <ImageZoom
        src="https://via.placeholder.com/600x400" // 이미지 URL
        zoomLevel={3} // 확대 비율 (기본값: 2)
        zoomAreaDimensions={{ width: 200, height: 200 }} // 확대 영역의 크기
        containerWidth="600px" // 컨테이너의 너비
        containerHeight="400px" // 컨테이너의 높이
        border="2px solid rgba(0, 0, 0, 0.5)" // 확대 영역의 테두리 스타일
        borderColor="rgba(0, 0, 0, 0.5)" // 확대 영역의 테두리 색상
        borderRadius="10px" // 확대 영역의 모서리 반경
        backgroundColor="rgba(255, 255, 255, 0.8)" // 확대 영역의 배경 색상
      />
    </div>
  );
}

export default App;

```
---

## 🎯 주요 기능

```
이미지 확대 미리보기: 마우스 오버 시 해당 위치의 확대된 이미지를 보여줍니다.

커스터마이징 가능한 확대 영역: 확대 영역의 크기, 모양, 스타일 등을 조정할 수 있습니다.

확대 비율 설정: zoomLevel 속성을 통해 확대 비율을 조절할 수 있습니다.

반응형 디자인: 컨테이너의 크기를 퍼센트 또는 고정 크기로 설정하여 다양한 화면 크기에 대응합니다.

간단한 사용법: 최소한의 설정으로 쉽게 적용 가능합니다.
```
---

## 📖 API 레퍼런스

## ImageZoom Props

| Prop                | Type                           | Default                             | Description                        |
|---------------------|--------------------------------|-------------------------------------|------------------------------------|
| `src`               | `string`                      | **Required**                       | 확대할 이미지의 URL                |
| `zoomLevel`         | `number`                      | `2`                                | 확대 비율                           |
| `zoomAreaDimensions`| `{ width: number; height: number }` | `{ width: 200, height: 200 }`     | 확대 영역의 너비와 높이            |
| `containerWidth`    | `string`                      | `"100%"`                           | 컨테이너의 너비 (단위 포함)        |
| `containerHeight`   | `string`                      | `"100%"`                           | 컨테이너의 높이 (단위 포함)        |
| `border`            | `string`                      | `"1px solid rgba(0, 0, 0, 0.3)"`  | 확대 영역의 테두리 스타일          |
| `borderColor`       | `string`                      | `"rgba(0, 0, 0, 0.3)"`            | 확대 영역의 테두리 색상            |
| `borderRadius`      | `string`                      | `"50%"`                            | 확대 영역의 모서리 반경            |
| `backgroundColor`   | `string`                      | `"white"`                          | 확대 영역의 배경 색상              |

---

## 🤝 기여

1.이슈를 생성하거나 풀 리퀘스트를 제출하여 프로젝트에 기여할 수 있습니다.  
2.버그 수정이나 기능 추가 시 관련 테스트 코드를 함께 작성해주세요.  
3.기여에 대한 자세한 내용은 CONTRIBUTING.md를 참고하세요.

---

## 📄라이선스
dh-zoom은 MIT 라이선스 하에 배포됩니다.
