import ReactDOM from 'react-dom/client'
import axios from 'axios'
import App from './App'


axios.get('http://ipnumber:3001/').then(response => {
  const subjects = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App subjects={subjects} />)
})