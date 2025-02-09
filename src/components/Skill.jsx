/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */

/**
 * Components 
 */
import SkillCard from './SkillCard';


const skillItem = [
    {
      imgSrc: '/images/favicon.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/favicon.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
  return (
    <section id="skill" className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                My humble skill-set vault, bared espeically for you:
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                I have worked with a variety of high performance tools and technologies, to create some of the most amazing projects. Here are some of the tools and technologies that I have worked with.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc },key) => (
                        <SkillCard 
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            key={key}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill