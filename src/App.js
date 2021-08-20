import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserView, MobileView } from 'react-device-detect'

import Creator from './sections/creator/components/Creator'
import Preview from './sections/preview/components/Preview'
import FloatMenu from './sections/float-menu/components/FloatMenu'

import './App.css'



const App = () => {
  const templateIsSelected = useSelector(state => state.creator.templateIsSelected)
  return(
    <div className="app">
      <BrowserView viewClassName="browser-view">
        <Creator />
        <Preview />
        {templateIsSelected ? <FloatMenu /> : null}
      </BrowserView>
      <MobileView>
        <div className="mobile-view">
          <div className="header">
            c
            <span>(</span>
            v
            <span>)</span>
            reator
            <span>.</span>
          </div>
          <div>
            Sorry, this application currently does not support mobile & tablet devices <span>:/</span>
          </div>          
        </div>
      </MobileView>      
    </div>
  )
}

export default App
