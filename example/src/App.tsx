import React from 'react'

import PageNotFoundError from 'experiment-page-not-found'
import 'experiment-page-not-found/dist/index.css'

const App = () => {
  return (
    <div className='full-page'>
      <PageNotFoundError />
    </div>
  )
}

export default App
