import React from 'react';
import PropTypes from 'prop-types';

const OutlineButton = ({
    href,
    target,
    label,
    icon,
    classes = ''
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-outline ${classes}`}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : null}
            </button>
        );
    }
}

OutlineButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};

export default OutlineButton;
