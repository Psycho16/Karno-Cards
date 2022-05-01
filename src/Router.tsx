import React from "react"
import { HashRouter, Route, Routes } from "react-router-dom"

import IndexPage from "./pages/IndexPage"


const Router = (): JSX.Element => {
  return (
    <HashRouter>
      
      <Routes>
        <Route path={'/'} element={<IndexPage />}/> 

      </Routes>
    </HashRouter>
  )
}

export default Router
