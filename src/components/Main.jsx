import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios"
const Main = () => {
    const [pokeData, setpokeData] = useState([])

    const [loading, setloading] = useState(true);
    const [nextUrl, setnextUrl] = useState();
    const [prevUrl, setprevUrl] = useState();
    const [pokeDex, setpokeDex] = useState();

    const [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon?limit=6")

    const pokeFunction =async() => {
        setloading(true);

        const res=await axios.get(url);
        // console.log(res.data.results);
        setnextUrl(res.data.next);
        setprevUrl(res.data.previous);
        getPokemon(res.data.results)
        setloading(false);
        // console.log('found');
        // console.log(pokeData)
    }

    const getPokemon =async(res) => {
        res.map(async (item)=>{
         const result=await axios.get(item.url) 
        //  console.log(result.data)

        setpokeData(state=>{
          state=[...state,result.data]
          state.sort((a,b)=>a.id>b.id?1:-1)
          return state;
        })

        })
        

    }

    useEffect(() => {
      console.log('i fire once');
      pokeFunction();
    
      
    }, [url])
    


  return (
    <>
      <div className="container">
        <div className="left-content-inner">
          <Card pokemon={pokeData} loading={loading} infoPokemon={poke=>setpokeDex(poke)}/>
        
        </div>

        <div className="right-content-inner">
          <Pokeinfo data={pokeDex}/>
          
        </div>
       
      </div> <div className="footer">
      {  prevUrl && <button  className="button-33" onClick={()=>{
                            setpokeData([])
                           seturl(prevUrl) 
                        }}>Previous</button>}
            { nextUrl && <button className="button-33" onClick={()=>{
                            setpokeData([])
                            seturl(nextUrl)
                        }}>Next</button>}
          </div>
    </>
  );
};

export default Main;
