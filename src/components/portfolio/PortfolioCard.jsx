import React from 'react'
import PropTypes from 'prop-types';

const PortfolioCard = (props) => {
  return (
    <div className='card-outer'>
        <div className='card-inner'>
        <div>
                <h1>
                    {props.typeName}
                </h1>

            </div>
            <div>
                <img className='h-25' src={props.url} alt={props.label} />
            </div>

            <div>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div>
                {props.logo}
            </div>
        </div>
           
    </div>   
  )
}

PortfolioCard.PropTypes = {
    typeName:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    logo:PropTypes.isRequired,

}

export default PortfolioCard