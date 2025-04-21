import { useEffect, useState } from "react"
import { calculateLetterDensity, countCharacters, countSentences, countWords, estimateReadingTime } from '../counter-functions.js';
import CharLimitModal from "./CharLimitModal.jsx";

export default function CounterForm({setTextAnalysis, textAnalysis}) {
    const [maxLength, setMaxLength] = useState('');
    const [isCharLimitModalOpen, setIsCharLimitModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        userText: '',
        charLimit: false,
        excludeSpaces: false,
    })

    useEffect(() => {
        analyseText(formData.userText, formData.excludeSpaces)
    }, [formData])

    function analyseText(text, spaces) {
        setTextAnalysis({
            total_characters: countCharacters(text, spaces),
            total_words: countWords(text),
            total_sentences: countSentences(text),
            reading_time: estimateReadingTime(text),
            letter_density: calculateLetterDensity(text)
        })
    }

    function updateFormData(e) {
        const {name, value, type, checked} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    function handleCharLimitModal() {
        if (formData.charLimit) {
            setMaxLength(null);
        } else {
            setIsCharLimitModalOpen(true);
        }
    }
    
    return (
        <section>
        <form className="counter-form">
            <textarea placeholder="Type or paste your text here..." maxLength={maxLength} name="userText" id="userText" value={formData.userText} onChange={updateFormData}></textarea>

            <div className="form-footer">
                <div className="checkboxes">
                  <input type="checkbox" name="excludeSpaces" checked={formData.excludeSpaces} id="excludeSpaces" onChange={updateFormData}/>
                  <label htmlFor="excludeSpaces">exclude spaces</label>
            
                  <input type="checkbox" name="charLimit" id="charLimit" checked={formData.charLimit} onClick={handleCharLimitModal} onChange={updateFormData}/>
                  <label htmlFor="charLimit">set character limit {maxLength > 0 ? `(${maxLength})` : ''}</label>

                </div>
   
                <p className="approx-time">approx. reading time: <span>∼ {textAnalysis.reading_time < 1 ? '<1' : textAnalysis.reading_time}</span> min</p>
            </div>
            {textAnalysis.total_characters == maxLength && <p className="limit-warning">warning: you reached the character limit</p> }

        </form>
        {isCharLimitModalOpen && <div className="backdrop"></div>}
        {isCharLimitModalOpen && <CharLimitModal maxLength={maxLength} setIsCharLimitModalOpen={setIsCharLimitModalOpen} setFormData={setFormData} setMaxLength={setMaxLength}/>}

        </section>
    )
}