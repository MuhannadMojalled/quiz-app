import React from 'react';
import './ProgBar.css';

function ProgBar({ progress, answeredCount, totalQuestions }) {
    return (
        <div className="prog-bar-container">
            <p>{answeredCount} of {totalQuestions} questions answered</p>
            <div className="prog-bar">
                <div
                    className="prog-bar__fill"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
}

export default ProgBar;