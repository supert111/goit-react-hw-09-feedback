import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback}) => {
    return (
        <div>
            <button className={styles} type="button" name="good" onClick={onLeaveFeedback}>Good</button>
            <button className={styles} type="button" name="neutral" onClick={onLeaveFeedback}>Neutral</button>
            <button className={styles} type="button" name="bad" onClick={onLeaveFeedback}>Bad</button>
        </div>
    )
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;