/**
 * @copyright 2025 MGM-Mayank
 * @license Apache-2.0
 */
/*
*Node Modules 
*/
import PropTypes from 'prop-types' 

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: {fontVariationSettings: '"FILL" 1'}  

})

console.log(ratings);

const ReviewCard = ({
    content,
    name,
    imgSrc,
    company
}) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

        <div className="flex gap-1 mb-3 items-center">
            {ratings.map(({icon, style}, key) => (
                <span className="relative flex items-center tracking-wide " key={key}> 
                <span className="material-symbols-rounded text-yellow-400 text-[18px]"
                style={style}>{icon}
                </span>
                <span className="absolute top-1 right-1/4 rounded-full w-2.5 h-2.5 bg-yellow-500  text-[18px] animate-ping"></span>
                </span>
            ))}
        </div>
        <p className='text-zinc-400 mb-8 break-words'>
            {content}
        </p>
        <div className="flex items-center gap-2 mt-auto">
            <figure className="img-box w-12 h-12 rounded-full overflow-hidden">
                <img src={imgSrc} alt={name} widht={44} height={44} loading='lazy' className="img-cover" />
            </figure>
        <div >
          <p>{name}</p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
        </div>

    </div>
  )
}

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default ReviewCard