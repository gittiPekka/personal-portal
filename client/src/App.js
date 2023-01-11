import { useState, useEffect } from 'react'
import Subject from './components/Subject'
import subjectService from './services/subjects'


const App = () => {
  const [subjects, setSubjects] = useState([]);
  const [activeSubject, setActiveSubject] = useState(1);

  useEffect(() => {
    subjectService
      .getAll()
      .then(initialSubjects => {
        setSubjects(initialSubjects)
      })
  }, [])

  const activeChanger = (event) => {
    setActiveSubject(event.target.value);
  }

  return (
    <div>
        <h1>P55MGD45 kotisivu</h1>
        <ul>
          {subjects.map(subject => 
          <Subject key={subject.id}
            subject={subject}
            activeSubject={activeSubject}
            index={subject.index}
            handleActiveChange={activeChanger}/>
          )}
        </ul>
    </div>    
  )
}

export default App;