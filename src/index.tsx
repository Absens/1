import './styles.css'
import { render } from 'react-dom'
import { App } from './App'
import { ErrorBoundary } from 'react-error-boundary'

render(
  <div className="earth">
    <div className="inner">
      <ErrorBoundary fallback={<div className="error">Error</div>}>
        <App />
      </ErrorBoundary>
    </div>
  </div>,

  document.getElementById('root')
)
