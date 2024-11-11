// src/index.ts
import ImageZoom from './components/ImageZoom';

export { ImageZoom };
export default ImageZoom;

// 사용 코드 
// import React from 'react';
// import './App.css';
// import ImageZoom from '../src/components/ImageZoom.tsx';

// function App() {
//   return (
//     <div className="App">
//       <h1>Image Zoom Demo</h1>
//       <ImageZoom
//         src="https://via.placeholder.com/600x400"
//         zoomLevel={5} //확대 비율
//         smoothZoom={true} //확대 비율 변경시 smooth하게 이동하기
//         smoothZoomDuration={5} //smooth속도
//         showZoomArea={true}
//         zoomAreaDimensions={{ width: 100, height: 100 }} //확대영역 선택 box 너비 높이
//         enlargedDimensions={{ width: 400, height: 400 }} //확대한 이미지 너비 높이
//         enlargedOverlayPosition = {{top: 60, left: 50 }} //확대한 이미지 위치
//         zoomAreaBorder = '20px solid rgba(255, 255, 255, 0.7)' // 기본 확대 영역 테두리 스타일
//         enlargedBorder = '20px solid rgba(255, 200, 200, 0.7)'// 확대된 이미지 테두리 스타일
//       />
//     </div>
//   );
// }

// export default App;
