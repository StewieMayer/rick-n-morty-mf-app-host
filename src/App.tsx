import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return <BrowserRouter>
    <Routes>
     <Route path="/" element={<div className="flex min-w-screen bg-black text-white p-2">Hello Module Federation!</div>} /> 
    </Routes>
  </BrowserRouter>;
};

export default App;
