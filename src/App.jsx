import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./component/Top"; // Import Top component
import Main from "./component/Main"; // Import Main component

function App() {
    return (
        <>
            <Top />  {/* Top component appears first */}
            <Main /> {/* Main component appears below Top */}
        </>
    );
}

export default App;
