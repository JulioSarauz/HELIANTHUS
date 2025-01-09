import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "../rutas/Inicio";


export const AppRouter = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                </Routes>
        </Router>
    );
};