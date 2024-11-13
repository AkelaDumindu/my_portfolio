import PropTypes from 'prop-types'
import './skill.css';

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
  return (
    <div className={'skill-card-outer  justify-evenly flex items-center gap-4' + classes}>
        <figure className='items-center'>
            <img src={imgSrc} width={32} height={32} alt={label} />
        </figure>

        <div>
             <h3>{label}</h3>
            
            
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard