import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";

function App(): JSX.Element {
  return (
    <div className="container mx-auto ">
      <div className="bg-gray-200 h-16 md:h-20 flex items-center">
        <div className="text-3xl md:text-5xl font-bold ml-3">UEC Links</div>
      </div>
      <div className="px-2 pt-2">
        <Router>
          <Route path="/" exact component={Index} />
        </Router>
      </div>
    </div>
  );
}

export default App;
