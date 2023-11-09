import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/routeConfig";
import { AuthProvider } from "./context/useAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <RouterConfig />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
