import React, { useRef, useEffect } from 'react';
import Box from './Box'; // Importa el componente Box
const Gallery = () => {
    const boxData = [
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },
        {
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
            text: 'Explorando paisajes vívidos y misteriosos, viajé con el viento como compañero. Aventuras inolvidables marcaron cada paso, creando recuerdos que iluminan mi camino siempre',
        },

        // Agrega más objetos para más imágenes y texto
    ];

    const totalItems = boxData.length;
    const scrollContainerRef = useRef(null);
    let scrollInterval = null;

    useEffect(() => {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const clientWidth = scrollContainerRef.current.clientWidth;

        scrollContainerRef.current.scrollLeft =
            (scrollWidth - clientWidth) / 2; // Alinear al centro al cargar
    }, []);

    const startScroll = (direction) => {
        clearInterval(scrollInterval);

        scrollInterval = setInterval(() => {
            if (scrollContainerRef.current) {
                const scrollAmount = direction === 'prev' ? -1 : 1;
                scrollContainerRef.current.scrollLeft += scrollAmount;

                if (
                    (direction === 'prev' && scrollContainerRef.current.scrollLeft <= 0) ||
                    (direction === 'next' &&
                        scrollContainerRef.current.scrollLeft >=
                        scrollContainerRef.current.scrollWidth -
                        scrollContainerRef.current.clientWidth)
                ) {
                    scrollContainerRef.current.scrollLeft =
                        direction === 'prev'
                            ? scrollContainerRef.current.scrollWidth - 1
                            : 0;
                }
            }
        }, 10); // Controla la velocidad de desplazamiento aquí
    };

    const stopScroll = () => {
        clearInterval(scrollInterval);
    };

    return (
        <div className="gallery-container">
            <div
                className="box-container"
                ref={scrollContainerRef}
                onMouseEnter={stopScroll}
                onMouseLeave={stopScroll}
            >
                {boxData.map((data, index) => (
                    <Box key={index} imageUrl={data.imageUrl} text={data.text} />
                ))}
            </div>
            <div className="controllers">
                <div className="button-container">
                    <button
                        className="prev-button"
                        onMouseDown={() => startScroll('prev')}
                        onMouseUp={stopScroll}
                    >
                        ←
                    </button>
                </div>
                <div className="button-container">
                    <button
                        className="next-button"
                        onMouseDown={() => startScroll('next')}
                        onMouseUp={stopScroll}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;