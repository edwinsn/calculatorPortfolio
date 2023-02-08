import React, { useState } from 'react'
import './projectCard.css'
import "./assets/backgrounds.css"
import { Carousel } from 'react-responsive-carousel';
import arrowIcon from '../../../assets/images/deployIcon.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ProjectDescription from './ProjectDescription';

export default function ProjectCard({
  imgs,
  background,
  className,
  tittle,
  icon,
  description,
  shortDescription,
  href,
  githubLink,
}) {


  const [on, setOn] = useState(true);

  const projectImgs = imgs?.map((img, index) => {
    return <img key={`proyectImg-${index}`} src={img} alt='' />
  });

  let carouselArrow = (handler, side) => {
    return <div onClick={handler}
      className={`arrow ${side} entered nonselectable`}>
      <img alt="" src={arrowIcon} />
    </div>
  }


  return (
    <div className={'project-card column centered ' + className} >
      <div className='card column'
        id={background}
      >
        <input id="menu" type="checkbox" checked={on} />

        <Carousel
          emulateTouch
          infiniteLoop showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          autoPlay={false}
          className='project-carousel nonselectable cursor-pointer'
          renderArrowPrev={(handler) => carouselArrow(handler, 'left')}
          renderArrowNext={(handler) => carouselArrow(handler, 'right')}
          onClickItem={() => setOn(!on)}
        >
          {projectImgs}
        </Carousel>
        <ProjectDescription
          open={on}
          setOpen={setOn}
          tittle={tittle}
          icon={icon}
          description={description}
          shortDescription={shortDescription}
          href={href}
          githubLink={githubLink}
        />
      </div>
    </div>
  )
}
