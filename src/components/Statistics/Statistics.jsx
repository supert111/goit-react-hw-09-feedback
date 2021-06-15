import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <h2>Statistics</h2>
            { good || neutral || bad                         
                ?   <ul className={styles.wrapper}>
                        <li className={styles.list}>Good: {good}</li>
                        <li className={styles.list}>Neutral: {neutral}</li>
                        <li className={styles.list}>Bad: {bad}</li>
                        <li className={styles.list}>Total: {total}</li>
                        <li className={styles.list}>Positive fedback: {positivePercentage}%</li>
                    </ul>
                :   <Notification message="No feedback given" />
            }
        </>         
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics;