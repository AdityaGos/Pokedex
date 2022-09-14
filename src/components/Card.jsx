import React from "react";
import "./style.css";

const Card = ({ pokemon, loading,infoPokemon}) => {
  // const style = `card ${type}`;
  // console.log(style)
  console.log(pokemon)

  return (
    <>
      {loading ? (
        <h1> Loading...</h1>
      ) : (
        pokemon.map((item) => {
          const style=`card ${item.types[0].type.name}`;
          return (
            <>
              <div className={style}  key={item.id} onClick={()=>infoPokemon(item)}>
                <div className="number">
                  <small>#0{item.id}</small>
                </div>
                <img className="pokeImg" src={item.sprites.other.dream_world.front_default} alt="" />
                <div className="detail-wrapper">
                  <h3>{item.name}</h3>
                  <div className="innerdetails">
                    <small>
                      Type:<b>{item.types[0].type.name}</b>
                    </small>
                    {item.types[1]?<small>
                      
                      Type:<b>{ item.types[1].type.name}</b>
                      </small>:""}
                    
                  </div>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
