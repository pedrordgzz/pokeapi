import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './componentes/Navbar';
import { GaleriaPokemon } from './componentes/Pokemon';
import { GaleriaDigimon } from './componentes/Digimon';
import { Error } from './componentes/Error';

// Componente para que aparezca algo en la página de inicio
const Inicio: React.FC = () => (
    <div className="mensaje">
        <h1>Bienvenido a la Poke-Digi de Pedro Juan Rodríguez Jiménez</h1>
        <p>Selecciona una opción del menú para ver que pokemons o digimon te salen.</p>
    </div>
);

const App: React.FC = () => {
    return (
        <BrowserRouter>
{/* El Navbar vlo pongo fuera para que aparezca siempre si o si */}
            <Navbar />
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/gen1" element={<GaleriaPokemon min={1} max={151} />} />
                    <Route path="/gen2" element={<GaleriaPokemon min={152} max={251} />} />
                    <Route path="/gen3" element={<GaleriaPokemon min={252} max={386} />} />
                    <Route path="/digimon" element={<GaleriaDigimon />} />
                    <Route path="*" element={<div className="mensaje"><Error/></div>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;