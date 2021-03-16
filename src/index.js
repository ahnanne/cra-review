import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'

import Sea from './components/Sea/Sea';

render(
  <StrictMode>
    <Sea />
  </StrictMode>,
  document.getElementById('root')
)
