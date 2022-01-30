import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard';
import Assesment from './Components/Dashboard/Assesment'
import UserProfile from './Components/Dashboard/UserProfile';
import Library from './Components/Dashboard/Library';
import LiveClasses from './Components/Dashboard/LiveClasses'
import Discussion from './Components/Dashboard/Discussion'
import Calender from './Components/Dashboard/Calender';
import Reports from './Components/Dashboard/Reports';
import FeeCollection from './Components/Dashboard/FeeCollection'
import Documents from './Components/Dashboard/Documents'
import Notices from './Components/Dashboard/Notices'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="library" element={<Library />}/>
            <Route path="assesment" element={<Assesment/>} />
            <Route path="liveclasses" element={<LiveClasses />}/>
            <Route path="discussion" element={<Discussion />} />
            <Route path="calender" element={<Calender />} />
            <Route path="reports" element={<Reports />} />
            <Route path="feecollection" element={<FeeCollection />} />
            <Route path="documents" element={<Documents />} />
            <Route path="notices" element={<Notices />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
