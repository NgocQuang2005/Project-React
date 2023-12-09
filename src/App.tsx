
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import HomePage from './Component/HomePage'
import Customer from './Component/Customer'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/blog' element={<Customer/>}/>
          <Route path='/category' element={<Customer/>}/>
          <Route path='/product' element={<Customer/>}/>
          <Route path='/login' element={<Customer/>}/>
          <Route path='/customer' element={<Customer/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App
