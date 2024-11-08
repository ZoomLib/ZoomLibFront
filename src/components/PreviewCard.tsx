// src/components/PreviewCard.tsx
import React, { useEffect, useState } from 'react';
import '../styles/PreviewCard.css';

interface PreviewData {
    title: string;
    description: string;
    image: string;
}

interface PreviewCardProps {
    url: string;
    styleType?: 'card' | 'popup'; // 스타일 타입을 선택할 수 있도록 옵션 제공
}

const PreviewCard: React.FC<PreviewCardProps> = ({ url, styleType = 'card' }) => {
    const [previewData, setPreviewData] = useState<PreviewData>({
        title: 'Loading...',
        description: '',
        image: '',
    });

    useEffect(() => {
        if (url) {
            fetchPreviewData(url);
        }
    }, [url]);

    const fetchPreviewData = async (url: string) => {
        try {
            const response = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
            const data = await response.json();
            setPreviewData({
                title: data.title || 'No Title',
                description: data.description || 'No Description',
                image: data.image || '/default-image.png',
            });
        } catch (error) {
            console.error('Error fetching preview data:', error);
        }
    };

    return (
        <div className={`preview-card ${styleType}`}>
            <img src={previewData.image} alt="Preview" className="preview-image" />
            <div className="preview-overlay">
                <h3>{previewData.title}</h3>
                <p>{previewData.description}</p>
            </div>
        </div>
    );
};

export default PreviewCard;
