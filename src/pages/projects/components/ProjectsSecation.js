import ProjectCard from './ProjectCard'
import useWindowDimensions from '../../components/useWindowDimensions'
import './projectsSections.css'


export let ProjectsSection = function ({ projects, tittle, description, tags }) {

  const { width } = useWindowDimensions()

  //If screen width is too small include only one project
  const projectsList = width > 950 ? (<>
    <ProjectCard
      {...projects[0]}
    />
    <ProjectCard
      {...projects[1]}
    />
  </>) : <ProjectCard
    {...projects[0]}
  />

  const isDesktopView = width > 950
  const isMediumView = width < 1244

  //If screen width is too small center the description text
  const descriptionClass = !isMediumView ? "" : "text-centered "

  //If screen width is too small center the tags section
  const tagsClass = isDesktopView ? "" : " centered "

  const tagsList = tags.map(tag => <span className='project-tag text-white'>{tag}</span>)


  return (
    <div className='project-section'>
      <p className="project-section-tittle text-white">{isDesktopView ? "What I can do" : tittle}</p>
      <div className='flex wrap projects-section-body'>
        <div className='flex projects-list centered'>
          {projectsList}
        </div>
        <div className={`project-section-text`}>
          {isDesktopView &&
            <h1 className={` section-tittle text-white ${isMediumView && ' centered '}`}>
              {tittle}
            </h1>
          }
          <p className={`${descriptionClass} section-description text-white `}>
            {description}
          </p>
          <br />
          {isDesktopView &&
            <div className={` project-section-tags tagsClass ${isMediumView && ' centered '}`} >
              {tagsList}
            </div>}
          <div></div>
        </div>
      </div>
    </div >
  )

}