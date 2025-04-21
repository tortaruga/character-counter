export default function LetterDensityItem({letter, amount, totalCharacters}) {
    const percentage = ((amount / totalCharacters) * 100).toFixed(2) || 0;
    return (
        <div className="letter-density-item">
            <p>{letter}</p>
            <div className="bar">
                <div className="progress" style={{width: percentage + '%'}}></div>
            </div>
            <p className="percentage">{amount} ({percentage}%)</p>
        </div>
    )
}