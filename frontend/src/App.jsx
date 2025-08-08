import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Blog from './pages/Blog'
import Home from './pages/Home'
import Layout from './pages/admin/layout'
import Dashboard from './pages/admin/dashboard'
import AddBlog from './pages/admin/addblog'
import ListBlog from './pages/admin/listBlog'
import Comments from './pages/admin/comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/admin' element={true? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='AddBlog' element={<AddBlog/>}/>
          <Route path='ListBlog' element={<ListBlog/>}/>
          <Route path='Comments' element={<Comments/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
