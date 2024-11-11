import React, { useState } from 'react';
import '../styles/ImageZoom.css';

interface ImageZoomProps {
  src: string; // 이미지 URL
  zoomLevel?: number; // 확대 비율 (기본값: 2)
}

const ImageZoom: React.FC<ImageZoomProps> = ({ src, zoomLevel = 2 }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);

  // 마우스 오버로 확대 상태 관리
  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  // 전체 화면 모드 토글
  const handleFullScreenToggle = () => setIsFullScreen(!isFullScreen);

  return (
    <div
      className={`image-zoom-container ${isFullScreen ? 'fullscreen' : ''}`}
      onClick={handleFullScreenToggle}
      role="button" // role 추가
    >
      <img
        src={src}
        alt="Zoomable"
        className={`image ${isZoomed ? 'zoomed' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transform: `scale(${isZoomed ? zoomLevel : 1})` }}
      />
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={handleFullScreenToggle}>
          <img src={src} alt="Fullscreen" className="fullscreen-image" />
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
