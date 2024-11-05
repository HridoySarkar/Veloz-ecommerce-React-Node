import React, { useEffect, useRef } from 'react';
import './style.css';

const Index = () => {
    const nextBtnRef = useRef(null);
    const prevBtnRef = useRef(null);
    const listRef = useRef(null);
    const runningTimeRef = useRef(null);
    const timeRunning = 3000;
    const timeAutoNext = 7000;

    useEffect(() => {
        const nextBtn = nextBtnRef.current;
        const prevBtn = prevBtnRef.current;
        const list = listRef.current;
        const runningTime = runningTimeRef.current;

        const resetTimeAnimation = () => {
            runningTime.style.animation = 'none';
            runningTime.offsetHeight; // trigger reflow
            runningTime.style.animation = null;
            runningTime.style.animation = 'runningTime 7s linear 1 forwards';
        };

        const showSlider = (type) => {
            const sliderItemsDom = list.querySelectorAll('.item');
            if (type === 'next') {
                list.appendChild(sliderItemsDom[0]);
            } else {
                list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
            }

            resetTimeAnimation(); // Reset the running time animation
            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                nextBtn.click();
            }, timeAutoNext);
        };

        let runNextAuto = setTimeout(() => {
            nextBtn.click();
        }, timeAutoNext);

        nextBtn.onclick = () => showSlider('next');
        prevBtn.onclick = () => showSlider('prev');

        resetTimeAnimation(); // Start the initial animation

        return () => clearTimeout(runNextAuto); // Cleanup on unmount
    }, []);

    return (
        <div className="carousel">
            <div className="list" ref={listRef}>
                {[
                    { name: 'EAGLE', img: 'image/eagel1.jpg' },
                    { name: 'OWL', img: 'image/owl1.jpg' },
                    { name: 'CROW', img: 'image/crow.jpg' },
                    { name: 'BUTTERFLY', img: 'image/butterfly1.jpeg' },
                    { name: 'OWL', img: 'image/owl2.jpg' },
                    { name: 'EAGLE', img: 'image/eagel3.jpg' },
                    { name: 'KINGFISHER', img: 'image/kingfirser2.jpeg' },
                    { name: 'PARROT', img: 'image/parrot2.jpg' },
                    { name: 'HERON', img: 'image/heron.jpeg' },
                    { name: 'BUTTERFLY', img: 'image/butterfly2.jpg' },
                    { name: 'PARROT', img: 'image/parrot2.jpg' },
                ].map((item, index) => (
                    <div
                        className="item"
                        key={index}
                        style={{ backgroundImage: `url(${item.img})` }}
                    >
                        <div className="content">
                            <div className="title">SLIDER</div>
                            <div className="name">{item.name}</div>
                            <div className="des">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.</div>
                            <div className="btn">
                                <button>See More</button>
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button className="prev" ref={prevBtnRef}><</button>
                <button className="next" ref={nextBtnRef}>></button>
            </div>

            <div className="timeRunning" ref={runningTimeRef}></div>
        </div>
    );
};

export default Index;
