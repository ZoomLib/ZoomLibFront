import React, { useState, useRef, useEffect } from "react";
import "../styles/ImageZoom.css";

interface ImageZoomProps {
  src: string; // 이미지 URL
  zoomLevel?: number; // 확대 비율 (기본값: 2)
  zoomAreaDimensions?: { width: number; height: number }; // 확대 영역의 너비와 높이
  containerWidth?: string; // 컨테이너 너비 (단위 포함 가능, 기본값 100%)
  containerHeight?: string; // 컨테이너 높이 (단위 포함 가능, 기본값 100%)
}

const ImageZoom = ({
  src,
  zoomLevel = 2,
  zoomAreaDimensions = { width: 200, height: 200 },
  containerWidth = "100%", // 기본값을 100%로 설정
  containerHeight = "100%", // 기본값을 100%로 설정
}: ImageZoomProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({
    width: 500,
    height: 500,
  });

  useEffect(() => {
    if (containerRef.current) {
      setContainerSize({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      });
    }
  }, [containerWidth, containerHeight]);

  const handleMouseEnter = () => setIsZoomed(true);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.min(
      Math.max(e.clientX - rect.left, zoomAreaDimensions.width / 2),
      containerSize.width - zoomAreaDimensions.width / 2
    );
    const y = Math.min(
      Math.max(e.clientY - rect.top, zoomAreaDimensions.height / 2),
      containerSize.height - zoomAreaDimensions.height / 2
    );
    setMousePosition({ x, y });
  };

  return (
    <div
      className="image-zoom-container"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        width: containerWidth,
        height: containerHeight,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={src}
        alt="Original"
        className="original-image"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      {/* 확대할 영역 표시 */}
      {isZoomed && (
        <div
          className="zoom-area"
          style={{
            width: `${zoomAreaDimensions.width}px`,
            height: `${zoomAreaDimensions.height}px`,
            overflow: "hidden",
            position: "absolute",
            top: Math.min(
              Math.max(mousePosition.y - zoomAreaDimensions.height / 2, 0),
              containerSize.height - zoomAreaDimensions.height
            ),
            left: Math.min(
              Math.max(mousePosition.x - zoomAreaDimensions.width / 2, 0),
              containerSize.width - zoomAreaDimensions.width
            ),
            pointerEvents: "none",
            border: "1px solid rgba(0, 0, 0, 0.3)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={src}
            alt="Zoomed Area"
            style={{
              position: "absolute",
              width: `${containerSize.width * zoomLevel}px`,
              height: `${containerSize.height * zoomLevel}px`,
              top: `-${
                mousePosition.y * zoomLevel - zoomAreaDimensions.height / 2
              }px`,
              left: `-${
                mousePosition.x * zoomLevel - zoomAreaDimensions.width / 2
              }px`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageZoom;
