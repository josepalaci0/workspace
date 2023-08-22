import React, { useRef, useEffect, useState } from 'react';
import Box from './box'; 
import { DefaultAxios } from '../../petitions/axios';

const Gallery = () => {
    const [boxData,setBoxData]=useState([]);     
    const scrollContainerRef = useRef(null);
    let scrollInterval = null;

    useEffect(() => {
        DefaultAxios.Get('databox').then((response)=> setBoxData(response.data) )
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