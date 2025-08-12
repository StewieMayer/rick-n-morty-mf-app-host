import { BrowserRouter, Route, Routes } from "react-router-dom";
import MfCharacters from "@remotes/MfCharacters";
import Layout from "@components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MfCharacters />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
