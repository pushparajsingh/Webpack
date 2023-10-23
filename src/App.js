import "./App.css";
import React, { Suspense } from "react";
const Button = React.lazy(() => import("MicroFrontend/Button"));
const Abhisek = React.lazy(() => import("MicroFrontend/Abhisek"));

function App() {
  return (
    <div className="App">
      <h2>MicroFront End</h2>
     <Suspense>
      <Button buttonName={"Pushpa"}/>
      <Abhisek Name={"Pushparaj !"}/>
     </Suspense>
      <h1>Webpack with webpack-bundle-analyzer</h1>
      <h2> Delete this all URL from HTML file and file also </h2>
      {/* <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
     <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
     <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
     <h1> npm install dotenv-webpack --save-dev //for env use and see documentation https://github.com/mrsteele/dotenv-webpack/blob/master/README.md</h1>
    </div>
  );
}

export default App;
