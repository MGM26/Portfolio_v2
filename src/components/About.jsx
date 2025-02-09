/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */
const aboutItems = [
    {
      label: 'Project done',
      number: 15
    },
    {
      label: 'Years of experience',
      number: 3
    },
    {
      label: 'Accolades Celeberated',
      number: 4
    }
  ];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 md:p-12 rounded-2xl reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    Welcome!, I&apos;m Mayank Sharma, a multi talented gud boii. I am a full stack developer and a UI/UX designer. I have a passion for creating and designing beautiful and functional websites. I have experience in working with various technologies like React, Node.js, Express, MongoDB, and many more. I am always looking for new opportunities to learn and grow. I am available for work, so feel free to contact me.
                </p>
                <div className="flex flex-wrap items-start gap-4 md:gap-7">
                    {
                    aboutItems.map(({ label, number },key) => (
                    <div key={key} >
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                            <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400 md:max-w-[12ch]">{label}</p>
                    </div>
                    ))
                }
                <img src="./Images/favicon.svg" alt="logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]"></img>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About