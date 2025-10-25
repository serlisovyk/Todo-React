import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import Layout from './components/Layout/Layout'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Layout>
      <App />
    </Layout>
  </StrictMode>
)
