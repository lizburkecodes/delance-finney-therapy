import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

import Home from './pages/Home';
import Community from './pages/Community';
import Training from './pages/Training';
import Contact from './pages/Contact';  

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="community" element={<Community />} />
        <Route path="training" element={<Training />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
