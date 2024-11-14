import React from 'react';
import PropTypes from 'prop-types';

const PortfolioCard = (props) => {
  return (
    <div className='card-outer'>
      <div className='card-inner'>
        <div>
          <h1>{props.typeName}</h1>
        </div>
        <div>
          <img className='h-25' src={props.url} alt={props.label} />
        </div>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div className="icon-container">
          {/* Render each icon passed as a prop */}
          {props.icons && (
            <div className="icons-wrapper">
              {props.icons.map((icon, index) => (
                <div key={index} className="icon-wrapper">
                  {icon}
                  <span className="icon-text">{icon.props.alt || 'Icon'}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PortfolioCard.propTypes = {
  typeName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.element),  // Array of React elements (icons)
};

export default PortfolioCard;
