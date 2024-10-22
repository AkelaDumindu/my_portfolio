
import PropTypes from 'prop-types';

const PrimaryButton = ({
    href,
    target,
    label,
    icon,
    classes = ''
}) => {
    if (href) {
        return (
            <a href={href} target={target} className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : null}
            </a>
        );
    } else {
        return (
            <button className={`btn btn-primary ${classes}`}>
                {label}
                {icon ? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> : null}
            </button>
        );
    }
}

PrimaryButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string,
};

export default PrimaryButton;
