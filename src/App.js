import './App.css';
import CursosStore from './stores/CursosStore';
import Menu from "./Menu";
import { Provider } from "mobx-react";
function App() {
  return (
    <Provider CursosStore={CursosStore}>
      <Menu></Menu>
    </Provider>

  );
}

export default App;
