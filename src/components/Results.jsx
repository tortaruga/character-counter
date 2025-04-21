import { useState } from "react";
import LetterDensityItem from "./LetterDensityItem.jsx";

export default function Results({textAnalysis}) {
    const [showAllLetters, setShowAllLetters] = useState(false);

    let letterDensityItems;
    if (showAllLetters) {
        letterDensityItems = textAnalysis.letter_density?.map(letter => {
            return (
                <LetterDensityItem letter={letter[0]} amount={letter[1]} totalCharacters={textAnalysis.total_characters} />
            )
        })
    } else {
        const firstFiveLetters = textAnalysis.letter_density?.slice(0, 5);
        letterDensityItems = firstFiveLetters?.map((letter, index) => {
            return (
                <LetterDensityItem key={index} letter={letter[0]} amount={letter[1]} totalCharacters={textAnalysis.total_characters} />
            )
        })
    }
    
    return (
        <section className="results">
            <div className="count-results">
               <div className="characters">
                <p className="result">{textAnalysis.total_characters}</p>
                <p className="result-tag">total characters</p>
               </div>

               <div className="words">
                <p className="result">{textAnalysis.total_words}</p>
                <p className="result-tag">Word count</p>
               </div>

               <div className="sentences">
                <p className="result">{textAnalysis.total_sentences}</p>
                <p className="result-tag">sentence count</p>
               </div>
            </div>
            
            <div className="letter-density">
                <h1>letter density</h1>
                {letterDensityItems?.length === 0 && <p>Start typing to see the analysis</p> }
                {letterDensityItems}
                {(textAnalysis.letter_density?.length > 5) && (
                   <button className="show-more" onClick={() => setShowAllLetters(prevState => !prevState)}>
                       {showAllLetters ? 'show less' : 'show more'}
                  </button>
                )}
            </div>
        </section>
    )
}