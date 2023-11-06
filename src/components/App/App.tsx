/* VENDOR */
import { Route, Routes } from "react-router-dom";

/* APPLICATION */
import { Header } from "../Header/Header";
import { Tasks } from "../Tasks/Tasks";
import { Categories } from "../Categories/Categories";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/categories" element={<Categories />} />
        <Route index element={<Tasks />} />
      </Routes>
    </div>
  );
}

export default App;
