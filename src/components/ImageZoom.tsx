import React, { useState } from "react";
import "../styles/ImageZoom.scss";

interface ImageZoomProps {
  src: string; // 이미지 URL
  zoomLevel?: number; // 확대 비율 (기본값: 2)
  smoothZoom?: boolean; // 부드럽게 확대 여부
  smoothZoomDuration?: number; // 부드러운 확대 시 걸리는 시간 (초 단위)
  showZoomArea?: boolean; // 확대 영역 표시 여부
  zoomAreaDimensions?: { width: number; height: number }; // 확대 영역의 너비와 높이
  enlargedDimensions?: { width: number; height: number }; // 클릭 시 나타나는 확대 영역의 너비와 높이
  enlargedOverlayPosition?: { top: number; left: number }; // 클릭 시 나타나는 영역의 위치
  zoomAreaBorder?: string; // 확대 영역의 테두리 스타일
  enlargedBorder?: string; // 클릭 시 나타나는 확대 영역의 테두리 스타일
}

const ImageZoom = ({
  src,
  zoomLevel = 2,
  smoothZoom = false,
  smoothZoomDuration = 0.3,
  showZoomArea = false,
  zoomAreaDimensions = { width: 100, height: 100 },
  enlargedDimensions = { width: 400, height: 400 },
  enlargedOverlayPosition = { top: 50, left: 50 },
  zoomAreaBorder = "2px solid rgba(255, 255, 255, 0.7)", // 기본 확대 영역 테두리 스타일
  enlargedBorder = "2px solid rgba(255, 255, 255, 0.7)", // 기본 확대된 이미지 테두리 스타일
}: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => setIsZoomed(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleImageClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setClickPosition({ x, y });
    setIsEnlarged(true);
  };

  const handleCloseEnlarge = () => setIsEnlarged(false);

  return (
    <>
      <div
        className="image-zoom-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleImageClick}
      >
        <img src={src} alt="Original" className="original-image" />
        {/* 확대할 영역 표시 */}
        {showZoomArea && isZoomed && (
          <div
            className="zoom-area"
            style={{
              width: `${zoomAreaDimensions.width}px`,
              height: `${zoomAreaDimensions.height}px`,
              overflow: "hidden",
              position: "absolute",
              top: mousePosition.y - zoomAreaDimensions.height / 2,
              left: mousePosition.x - zoomAreaDimensions.width / 2,
              border: zoomAreaBorder, // 사용자 정의 zoomAreaBorder 사용
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              pointerEvents: "none",
            }}
          >
            <img
              src={src}
              alt="Zoomed Area"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: `${
                  (mousePosition.x / zoomAreaDimensions.width) * 100
                }% ${(mousePosition.y / zoomAreaDimensions.height) * 100}%`,
                transition: smoothZoom
                  ? `transform ${smoothZoomDuration}s ease`
                  : "none",
                position: "relative",
              }}
            />
          </div>
        )}
      </div>
      {/* 확대한 이미지  */}
      {isEnlarged && (
        <div className="enlarged-overlay" onClick={handleCloseEnlarge}>
          <div
            className="enlarged-container"
            style={{
              width: `${enlargedDimensions.width}px`,
              height: `${enlargedDimensions.height}px`,
              overflow: "hidden",
              position: "absolute",
              top: `${enlargedOverlayPosition.top}%`,
              left: `${enlargedOverlayPosition.left}%`,
              transform: "translate(-50%, -50%)",
              border: enlargedBorder, // 사용자 정의 enlargedBorder 사용
              backgroundColor: "rgba(0, 0, 0, 0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={src}
              alt="Enlarged View"
              className="enlarged-image"
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: `${
                  (clickPosition.x / enlargedDimensions.width) * 100
                }% ${(clickPosition.y / enlargedDimensions.height) * 100}%`,
                transition: smoothZoom
                  ? `transform ${smoothZoomDuration}s ease`
                  : "none",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageZoom;
