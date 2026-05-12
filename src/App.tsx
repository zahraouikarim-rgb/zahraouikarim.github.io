import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { ArtistPage } from './pages/ArtistPage';

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0f] text-slate-50">
        <Routes>
          <Route path="/" element={<><Navbar /><HomePage /></>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/artist/:slug" element={<ArtistPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
