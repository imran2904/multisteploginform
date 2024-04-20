import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DribbbleSignup from "./components/DribbbleSignup";
import FinishPage from './components/FinishPage';
import EmailVerification from './components/EmailVerification';

function App() {

  return (
     <BrowserRouter>   
   
     <div className=" ">
   
      <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/Email" element={<EmailVerification/>}/>
      <Route path="/signup" element={<DribbbleSignup/>}/> 
      <Route path="/finish" element={<FinishPage/>} />
      
      </Routes>
      </div>
     </BrowserRouter>

    
  );
}

export default App;

