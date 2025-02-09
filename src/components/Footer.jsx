/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: '#contact'
    },
    {
      label: 'LinkedIn',
      href: '#contact'
    },
    {
      label: 'Twitter X',
      href: '#contact'
    },
    {
      label: 'Instagram',
      href: '#contact'
    },
    {
      label: 'CodePen',
      href: '#contact'
    }
  ];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">
            <div className="lg:grid lg:grid-cols-2 ">
                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Here&apos;s To collaborating right now!
                    </h2>
                    <ButtonPrimary 
                    href="mailto:mayank26091999@gmail.com"
                    label="Let's Get Started!"
                    icon="chevron_right" classes="reveal-up"                    />
                </div>
                <div className="grid grid-cols-2 gap-4  lg:pl-20">
                    <div>
                        <p className="font-semibold mb-2 px-10 text-zinc-300 reveal-up">
                            Site Map
                        </p>
                            <ul>
                                {
                                    sitemap.map(({label,href},key)=>(
                                        <li key={key}>
                                            <a href={href} className="block text-sm text-zinc-400 py-1 px-14 transition-[bg-colors,colors] hover:text-zinc-200 hover:bg-zinc-800 rounded-full active:bg-zinc-200 active:text-zinc-950 reveal-up">
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                    </div>
                    <div>
                        <p className="font-semibold mb-2 px-9 text-zinc-300 reveal-up">
                            Social Handles
                        </p>
                            <ul>
                                {
                                    socials.map(({label,href},key)=>(
                                        <li key={key}>
                                            <a href={href} target="_blank" className="block text-sm text-zinc-400 py-1 px-14 transition-[bg-colors,colors] hover:text-zinc-200 hover:bg-zinc-800 rounded-full active:bg-zinc-200 active:text-zinc-950 reveal-up">
                                                {label}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between pt-10 mb-8">
                <a href="" className="reveal-up">
                    <img src="/images/favicon.svg" width={40} height={40} alt="Logo"/>
                </a>
                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2025 <span className="text-zinc-200">MGM-Mayank</span>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer