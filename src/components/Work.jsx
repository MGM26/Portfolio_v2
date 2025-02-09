/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */

/**
 * Components 
 */
import ProjectCard from './ProjectCard';

const works = [
    {
      imgSrc: '/images/favicon.svg',
      title: 'College and Juvenile Personal Projects x 10+',
      tags: ['Excel', 'Python', 'SQL', 'Web-Design', 'App Dev', 'Java', 'C++', '++more'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/favicon.svg',
      title: 'European General Pharama Warehousing ETL and Consulting',
      tags: ['Big Phrma', 'SQL', 'Python', 'Big Data', 'AWS'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/favicon.svg',
      title: 'Japanese Phrama Code Optimization',
      tags: ['SQL', 'Apache Spark'],
      projectLink: ''
    },
    {
      imgSrc: '/images/favicon.svg',
      title: 'USA API data fetch and automation using API integration',
      tags: ['API', 'Python'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/favicon.svg',
      title: 'USA Speciality Pharma Warehousing ETL and Consulting',
      tags: ['SP/SD', 'SQL', 'Python', 'Big Data', 'AWS'],
      projectLink: '/'
    },
    {
      imgSrc: '/images/favicon.svg',
      title: 'Personal Portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: '/'
    },
  ];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
             <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
             </h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc,title,tags,projectLink},key) => (
                    <ProjectCard 
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        key={key}
                        classes="reveal-up"
                    />
            ))}
        </div>
        </div>
    </section>
  )
}

export default Work