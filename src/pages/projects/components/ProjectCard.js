import React, { useState } from 'react'
import './projectCard.css'
import githubLinkIcon from '../../../assets/images/githubprojectLink.svg'
import linkIcon from '../../../assets/images/goto.svg'
import { Carousel } from 'react-responsive-carousel';
import arrowIcon from '../../../assets/images/deployIcon.svg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useWindowDimensions from '../../components/useWindowDimensions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

export default function ProjectCard({
  imgs,
  tittle,
  icon,
  description,
  shortDescription,
  href,
  githubLink,
  backgroundColor,
  className
}) {


  const { width } = useWindowDimensions()

  const issmallView = width < 950

  const [on, setOn] = useState(false);


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
    <div className={'project-card column centered ' + className}>
      <div className='card column'
        style={{ backgroundColor }}
      >
        <input id="menu" type="checkbox" checked={on} />
        
        <Carousel
          emulateTouch
          infiniteLoop showThumbs={false}
          useKeyboardArrows
          showStatus={false}
          autoPlay={false}
          className='project-carousel nonselectable'
          renderArrowPrev={(handler) => carouselArrow(handler, 'left')}
          renderArrowNext={(handler) => carouselArrow(handler, 'right')}
          onClickItem={() => setOn(!on)}
        >
          {projectImgs}
        </Carousel>

        <div className="project-body column centered">

          <FontAwesomeIcon icon={faAngleUp} className="iconUp" onClick={() => setOn(!on)} />

          <div className='tittle-section centered'>
            <span className='project-tittle'>
              {tittle}

            </span>
            <img src={icon} alt='' className='project-icon' />
          </div>
          {!issmallView && <p className='text-centered project-description' >{description}</p>}
          {issmallView && <p className='text-centered project-description' >{shortDescription}</p>}
          <div className='project-actions flex'>
            <a href={href}
              className='project-link-icon'
              target="_blank"
              rel="noreferrer">
              <img src={linkIcon} alt='' />
            </a>
            <a href={githubLink}
              className="project-github-link"
              target="_blank"
              rel="noreferrer">
              <img src={githubLinkIcon} alt='' />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}
