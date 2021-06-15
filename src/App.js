import { useState, useEffect } from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

export default function App () { 

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(good + neutral + bad);
    }, [good, neutral, bad]);
    
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / total) * 100);
    }

    const handleClick = (element) => {
        const { name } = element.target;

        switch (name) {
            case 'good': setGood(prevState => prevState + 1);
                break;
            case 'neutral': setNeutral(prevState => prevState + 1);
                break;
            case 'bad': setBad(prevState => prevState + 1);
                break;
            default: return;
        }
    }

        return (
            <div>
                <Section title="Please leave feedback"> 
                    <FeedbackOptions options={(good + neutral + bad)} onLeaveFeedback={handleClick} />
                    <Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad} 
                        total={total} 
                        positivePercentage={countPositiveFeedbackPercentage()} />
                </Section>
            </div>
        )
    }