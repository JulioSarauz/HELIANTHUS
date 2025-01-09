import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export const AppRouter = () => {
    return (
        <Router>
            <InactividadProvider>
                <Routes>
                    {/* <Route path="*" element={<NoEncontrada />} /> */}
                </Routes>
            </InactividadProvider>
        </Router>
    );
};