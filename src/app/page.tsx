"use client"
import { useState, useEffect } from "react";
type product = {
  name: string,
  vendor: string,
  _id: string,
}
export default function Products() {
  const [data, setData] = useState(new Array);
  const [searchResult, setSearchResult] = useState(new Array);
  const [searchVal, setSearchVal] = useState("");
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
        mySearch.some((term) => product.name.toLocaleLowerCase().includes(term.toLocaleLowerCase().trim()))
      )
    );
  }
  useEffect(() => {
    fetch("/api/product").then(temp => temp.json()).then((temp2) => {
      setData(temp2);
      console.log(temp2.length);
      setSearchResult(temp2);
    });

  }, [])

  return (
    <>
      <div className="flex flex-col items-center mt-10 mx-8">
        <textarea name="search" placeholder="Product Name" rows={4} onChange={e => setSearchVal(e.target.value)} className=" w-full border-2 border-black px-2 py-1 rounded"></textarea>
        <button type="submit" onClick={search} className="bg-blue-200 px-4 py-1 rounded my-4">Search</button>
        <table className="table-fixed border-separate border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Name</th>
              <th className="border border-gray-500 p-2">Vendor</th>
            </tr>
          </thead>
          <tbody>
          {searchResult.map((p) => (
            <tr key={p._id}>
              <td className="border border-gray-500 p-2">{p.name}</td>
              <td className="border border-gray-500 p-2">{p.vendor}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  )
}