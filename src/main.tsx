// @ts-expect-error ReactDom having no export is just a typescript problem
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styling/style.css'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

)
