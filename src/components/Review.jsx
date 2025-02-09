/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */
/**
 * Node Modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

/**
 *Register GSAP plugins 
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from './ReviewCard.jsx';

const reviews = [
    {
      content: 'Detail Oriented and highly skilled!',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    },
    {
      content: 'asdasdasdas a asd asd asdas',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    },
    {
      content: 'sdfsdfsdesdfessxfdvxcxcsdfdsfwersdfswsersefsfgdssfsdf',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    },
    {
      content: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Aakash Sinha',
      imgSrc: '/images/favicon.svg',
      company: 'ZS Associates'
    }
  ];

const Review = () => {

  useGSAP(() =>{
    gsap.to('.scrub-slide',{
      scrollTrigger:{
        trigger:'.scrub-slide',
        scrub:true,
        start: '-200% 80%',
        end :'400% 80%',
        markers:true
      },
      x: '-1000'

    })
  });

  return (
    <section className="section overflow-hidden" id="reviews">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                What People Say About Me
            </h2>
            <div className="flex items-stretch gap-8 w-fit scrub-slide">
                {
                    reviews.map(({content,name,imgSrc,company}, key) => (
                            <ReviewCard key={key} content={content} name={name} imgSrc={imgSrc} company={company} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Review