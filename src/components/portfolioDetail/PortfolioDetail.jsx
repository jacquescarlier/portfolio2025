import PropTypes from 'prop-types';

const PortfolioDetail = ({ project, title, tags }) => {
  const siteProject = project
  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {title}</h1>
        {!siteProject && (
        <>
        <a href={tags} target="_blank" rel="noopener"><span>GitHub</span></a>
        </>
        )}
        {siteProject && (
          <>
            <a href={project} target="_blank" rel="noopener"><span>Site</span></a>
            <a href={tags} target="_blank" rel="noopener"><span>GitHub</span></a>
          </>
        )}
      </div>
    </section>
  )
}

PortfolioDetail.propTypes = {
 project: PropTypes.array,
  title: PropTypes.string.isRequired, // Validation pour la prop 'title'
  tags: PropTypes.array.isRequired,
};

export default PortfolioDetail; 