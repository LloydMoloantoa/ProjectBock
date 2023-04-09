import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CampaignPage from './components/CampaignPage'
import { Container, Menu } from 'semantic-ui-react'
import Home from './components/Home'
import Post from './posts/Post';
import Add from './posts/Add';
import Edit from './posts/Edit';
import NotFound from './components/NotFound'


import {
  useNavigate,
} from 'react-router-dom'

function App() {
  let navigate = useNavigate()
  return (
    <Container>
      <Menu secondary>
        <Menu.Item
          name='home'
          onClick={() => navigate('/')}
        />
         <Menu.Item
          name='view post'
          onClick={() => navigate('/post')}
        />
      </Menu>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post' element= {<Post />} />
        <Route path='/create' element= {<Add />} />
        <Route path='/edit' element= {<Edit />} />
        <Route path='/campaigns/:address' element={<CampaignPage />} />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </Container>
  )
}

export default App
