import React from 'react'

const Pokeinfo = ({data}) => {
    console.log(data);
  return (
    <>

    {
        (!data)?"":(    

            <>

            <h1> {data.name}</h1>
        <img src={data.sprites.other.dream_world.front_default} alt="" />
        <div className="abilities">
            <div className="abilities-type">
                    {data.abilities.map(poke=>{
                            return (
                    <div className="group">
                                    <h2>{poke.ability.name}</h2>
                                </div>    

                            )

                    })}
           
             
            </div>
            
            <div className="base-stat">
                {data.stats.map(poke=>{
                        return (
                            <>
                            <h3>{poke.stat.name} :{ poke.base_stat}</h3>
                            </>
                        )

                })}
                <h3>HP :30</h3>
                <h3>Atack :52</h3>
                <h3>Defence :90</h3>
                <h3>Special Attack :50</h3>
                <h3>Speed :80</h3>
            </div>
        </div>
            </>
        )

    }
        
    </>
  )
}

export default Pokeinfo