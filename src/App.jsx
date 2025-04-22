import CounterForm from "./components/CounterForm"
import Footer from "./components/Footer";
import Results from "./components/Results"
import { useEffect, useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      document.querySelector('body').classList.toggle('dark');
    }, [darkMode]); 

    const [textAnalysis, setTextAnalysis] = useState({
        total_characters: 0,
        total_words: 0,
        total_sentences: 0,
        reading_time: 0,
        letter_density: null
    })

  return (
    <>
    <main>
      <button onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-btn" aria-label="dark mode"></button>
      <h1 className="main-h1"><span>Character</span> Counter</h1>

      <h2 className="intro">Analyze your text in real time</h2>
      <CounterForm textAnalysis={textAnalysis} setTextAnalysis={setTextAnalysis}/>
      <Results textAnalysis={textAnalysis} />
    </main>

    <Footer />
    </>
  )
}

export default App
