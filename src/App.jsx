import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import NavigatorRouter from './routes/routes'

function App() {

  return (
    <Router>
      <Toaster />
      <NavigatorRouter />
    </Router>
  )
}

export default App
