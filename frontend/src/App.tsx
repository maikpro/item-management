import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    )
  );

  return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
  );
}

export default App;
