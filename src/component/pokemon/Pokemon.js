import React from "react";
import useData from "./useData";
import './Pokemon.css';

const Pokemon = () => {
    const { data: pokemon, loading, error } = useData();
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
      <div className="container">
        {
          pokemon.map((p) => (
            <div key={p.id} className="card">
              <img src={p.sprites.front_shiny} alt={p.name} />
              <h3 className="h3">{p.name}</h3>
              </div>
        ))
        }
      </div>
    );
}
export default Pokemon;