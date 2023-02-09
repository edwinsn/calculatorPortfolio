import React, { useState } from 'react'
import './projectCard.css'
import { Carousel } from 'react-responsive-carousel';
import arrowIcon from '../../../assets/images/deployIcon.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ProjectDescription from './ProjectDescription';

export default function ProjectCard({
  imgs,
  background,
  backgroundImage,
  secondaryBackground,
  className,
  tittle,
  icon,
  description,
  shortDescription,
  href,
  githubLink,
  color
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

  const style = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`,
  } : {
    backgroundColor: background,
  }

  return (
    <div className={'project-card column centered ' + className} >
      <div
        className='card column'
        style={style}
      >
        <input
          id="menu"
          type="checkbox"
          className='display-none'
          checked={on} />
        <div
          className='project-carousel'
        >
          <Carousel
            emulateTouch
            infiniteLoop showThumbs={false}
            useKeyboardArrows
            showStatus={false}
            autoPlay={false}
            className='nonselectable cursor-pointer'
            renderArrowPrev={(handler) => carouselArrow(handler, 'left')}
            renderArrowNext={(handler) => carouselArrow(handler, 'right')}
            onClickItem={() => setOn(!on)}
          >
            {projectImgs}
          </Carousel>
        </div>
        <ProjectDescription
          open={on}
          setOpen={setOn}
          tittle={tittle}
          icon={icon}
          description={description}
          shortDescription={shortDescription}
          href={href}
          githubLink={githubLink}
          background={secondaryBackground}
          color={color}
        />
      </div>
    </div>
  )
}
