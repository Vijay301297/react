import { useState } from "react";

const messages  = [
    'Learning React is good',
    'Learning Django is very good',
    'Larning DSA is ultimate'
]


export default function App() {
    
    const [step, stepIncrement] = useState(1);
    const [openModal, closeModal] = useState(true);

    function previousHandler() {
        if (step>1) stepIncrement((curStep) => curStep - 1);
    }

    function nextHandler() {
        if (step<3) stepIncrement((curStep) => curStep + 1);
        // stepIncrement(step+1);
    }

    return (
        <>
        <button className="close" onClick={() => closeModal((om) => !om )}>&times;</button>
        {
            openModal && (
                <div className="steps">
                    <div className="numbers">
                        <div className={step >=1 ? 'active': ''}>1</div>
                        <div className={step >=2 ? 'active': ''}>2</div>
                        <div className={step >=3 ? 'active': ''}>3</div>
                    </div>
                    <p className="message">Step {step} : {messages[step-1]}</p>
                    <div className="buttons">
                        <button style={{background: '#7950f2', color:'#fff'}} onClick={previousHandler}>Previous</button>
                        <button style={{background: '#7950f2', color:'#fff'}} onClick={nextHandler}>Next</button>
                    </div>
                </div>
            )
        }
        </>
    );
}
