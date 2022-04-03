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

  //If screen width is too small center the description text
  const descriptionClass = isDesktopView ? "" : "text-centered "

  //If screen width is too small center the tags section
  const tagsClass = isDesktopView ? "" : " centered "

  const tagsList = tags.map(tag => <span className='project-tag'>{tag}</span>)


  return (
    <div  className='project-section'>
      <p className="project-section-tittle">{isDesktopView ? "What can I do" : tittle}</p>
      <div className='flex wrap centered projects-section-body'>
        <div className='flex projects-list centered'>
          {projectsList}
        </div>
        <div className='project-section-text'>
          {isDesktopView &&
            <h1 className={' section-tittle '}>
              {tittle}
            </h1>
          }
          <p className={descriptionClass + " section-description "}>
            {description}
          </p>
          {isDesktopView && <div className={" project-section-tags " + tagsClass}>
            {tagsList}
          </div>}
          <div></div>
        </div>
      </div>
    </div >
  )

}