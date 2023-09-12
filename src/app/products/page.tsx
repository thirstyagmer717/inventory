"use client"
import { useState,useEffect } from "react";
// let list = new Array();
// let products = new Array();
type product = {
    name: string,
    vendor: string,
    _id: string,
}
export default function Products() {  
    const [data, setData] = useState(new Array);
    const [searchResult, setSearchResult] = useState(new Array);
    const [searchVal,setSearchVal] = useState("");
    // function search(){
    //     if(searchVal=="" || searchVal==null){setSearchResult(data);return};

    //     const mySearch = searchVal.split(',').filter(element=>element) // Is an array of values in the search field comma separated
    //     if(mySearch.length==0)return;
        
    //     setSearchResult(data.filter(searchFilter));
    //     function searchFilter(temp:product){ 
    //         console.log(temp);
            
    //         for(let i=0;i<mySearch.length;i++){
    //             if(temp.name.toLocaleLowerCase().includes(mySearch[i].toLocaleLowerCase()))return true;
    //         }
    //         return false;
    //     }
    // }
    function search() {
        if (searchVal === "" || searchVal === null) {
          setSearchResult(data);
          return;
        }
      
        const mySearch = searchVal.split(",").filter((element) => element); // Is an array of values in the search field comma separated
        if (mySearch.length === 0) {
          return;
        }
      
        setSearchResult(
          data.filter((product) =>
            mySearch.some((term) => product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
          )
        );
      }
    useEffect(() => {
    fetch("/api/product").then(temp=>temp.json()).then((temp2)=>{
        setData(temp2);
        console.log(temp2.length);
        
        setSearchResult(temp2);
    });  

    }, [])
    
    return (
        <>
        <div className="flex flex-col items-center mt-10">
            <input name="search" placeholder="Product Name" onChange={e=>setSearchVal(e.target.value)} type="text" className=" border-2 border-black px-2 py-1 rounded"></input>
            <button type="submit" onClick={search} className="bg-blue-200 px-4 py-1 rounded mt-4">Search</button>
            {/* <button onClick={logState}>logState</button> */}
            {searchResult.map((p)=>(
                <div key={p._id} className="flex justify-between w-1/3 mt-4">
                    <span>{p.name}</span>{" "}
                    <span>{p.vendor}</span>{" "}
                </div>
            ))}
        </div>   
        </>
    )
}