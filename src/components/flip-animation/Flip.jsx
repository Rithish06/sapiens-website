import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// gsap.registerPlugin(ScrollTrigger)

const Flip = (props) => {
    const cardRefs = useRef([]);
    const [flippedStates, setFlippedStates] = useState([]);

    // Initialize refs and states when cards prop changes
    useEffect(() => {
        cardRefs.current = props.cards.map((_, i) => cardRefs.current[i] ?? React.createRef());
        setFlippedStates(props.cards.map(() => false));
    }, [props.cards]);

    // Handle flip animation for individual cards
    const handleFlip = (index, isFlipped) => {
        const newFlippedStates = [...flippedStates];
        newFlippedStates[index] = isFlipped;
        setFlippedStates(newFlippedStates);

        gsap.to(cardRefs.current[index].current, {
            rotationY: isFlipped ? 180 : 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
    };

    return (
        <div className='flex justify-center lg:justify-between flex-wrap gap-y-[40px]'>
            {
                props.cards.map((card, index) => (
                    <div className='flex flex-col gap-3 items-center w-[33%] md:w-[20%] lg:w-[14%]' key={card.name}>
                        <div
                            ref={cardRefs.current[index]}
                            className={`w-[57px] h-[57px] lg:w-[100px] lg:h-[100px] bg rounded-full shadow-2xl cursor-pointer`}
                            style={{ transformStyle: "preserve-3d"}}
                            onMouseOver={() => handleFlip(index, true)}
                            onMouseLeave={() => handleFlip(index, false)}>
                            <div className="absolute inset-0 flex items-center justify-center backface-hidden w-[57px] h-[57px] lg:w-[100px] lg:h-[100px] bg rounded-full" style={{background : card.bgColor }}>
                                <img src={card.img1} className='w-[55px] h-[55px]' alt="" />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center backface-hidden w-[57px] h-[57px] lg:w-[100px] lg:h-[100px] bg rounded-full" style={{background : "white", transform: "rotateY(180deg)"}}>
                                <img src={card.img2} className='w-[32px] h-[32px] lg:w-[55px] lg:h-[55px]' alt="" />
                            </div>

                        </div>
                        <div className="font-heading font-[600] text-[11px] lg:text-[15px] text-center">{card.name}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default Flip