import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

//import Navbar from './component_app/Navbar';
import Home from './component_app/Home';
import Dashboard from './component_dashboard/Dashboard';
import Login from './component_auth/Login';
import NosCv from './component_dashboard/NosCv';
import { DejaClient } from './component_dashboard/DejaClient';
import ProcedureTerminer from './component_dashboard/ProcedureTerminer';
import ProcedureRembourser from './component_dashboard/ProcedureRembourser';
import Profil from './component_auth/Profil';
import Propos from './component_entreprise/Propos';
import Contact from './component_entreprise/Contact';
import Faq from './component_entreprise/Faq';
import ContactDashboard from './component_dashboard/ContactDashboard';
import Canada from './component_destination/Canada';
import Allemagne from './component_destination/Allemagne';
import Russie from './component_destination/Russie';
import Bielorussie from './component_destination/Bielorussie';
import Chypre from './component_destination/Chypre';
import Moldavie from './component_destination/Moldavie';
import Serbie from './component_destination/Serbie';
import EntreExpress from './component_programme/EntreExpress';
import  ResidencePermante from './component_programme/ResidencePermante';
import Parrainage from './component_programme/Parrainage';
import PermitEtude from './component_programme/PermitEtude';
import Visiteur from './component_programme/Visiteur';
import Travail from './component_programme/Travail';

//import Footer from './component_app/Footer';
const isLog = (elt) =>{

  const localUser = (JSON.parse(localStorage.getItem("planugo-user") || "null"))

  if(!localUser)
  return <Navigate to={"/login"} replace/>
  return elt 
}

const isNotLog = (elt) =>{

  const localUser = (JSON.parse(localStorage.getItem("planugo-user") || "null"))

  if(localUser)
  return <Navigate to={"/dashboard"} replace />
  return elt 
}

function App() {



  return (
    <Router>
      <div className="App">
        {/*<Navbar/>*/}
        <Routes>
          <Route path="/" element={<Home />} />


          <Route path="/login" element={isNotLog(<Login />)} />
          <Route path="/dashboard" element={ isLog(<Dashboard/>)} />
          <Route path="/curriculum" element={ isLog(<NosCv />)} /> 
          <Route path="/mon-profil" element={isLog(<Profil />)} /> 
          <Route path="/nos-clients" element={isLog(<DejaClient />)} /> 
          <Route path="/contact-dashboard" element={isLog(<ContactDashboard />)} />
          <Route path='/procedure-terminer' element={isLog(<ProcedureTerminer/>)}/>
          <Route path='/rembourssement' element={isLog(<ProcedureRembourser/>)}/>



          <Route path='/a-propos' element={< Propos/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/faq' element={<Faq/>}/>
          <Route path='/canada' element={<Canada/>}/>
          <Route path='/allemagne' element={<Allemagne/>}/>
          <Route path='/russie' element={<Russie/>}/>
          <Route path='/bielorussie' element={<Bielorussie/>}/>
          <Route path='/chypre' element={<Chypre/>}/>
          <Route path='/moldavie' element={<Moldavie/>}/>
          <Route path='/serbie' element={<Serbie/>}/>
          <Route path='/entree-express' element={<EntreExpress/>}/>
          <Route path='/residence-permanente' element={<ResidencePermante/>}/>
          <Route path='/parrainage' element={<Parrainage/>}/>
          <Route path='/permis-etude' element={<PermitEtude/>}/>
          <Route path='/visiteur' element={<Visiteur/>}/>
          <Route path='/permis-de-travail' element={<Travail/>}/>


        </Routes>

      </div>
      {/*<Footer />*/}
    </Router>
  );
}

export default App;
