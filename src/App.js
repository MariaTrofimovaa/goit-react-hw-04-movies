import React from "react";
import Navigation from "./components/navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";
import ROUTES from "./routes/movieRoutes";

const App = () => {
  return (
    <>
      <div className="navContainer">
        <Navigation />
      </div>
      <AppRoutes routes={ROUTES} fallback={<p>Loading...</p>} />
    </>
  );
};

export default App;
