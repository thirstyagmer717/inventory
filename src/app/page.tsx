"use client"
import debounce from "lodash/debounce";
import { useState, useEffect } from "react";

type Product = {
  name: string;
  vendor: string;
  _id: string;
};

export default function Products() {
  const [data, setData] = useState<Product[]>([]);
  const [searchResult, setSearchResult] = useState<Product[]>([]);
  const [searchVal, setSearchVal] = useState<string>("");

  const debouncedSearch = debounce(() => {
    if (searchVal === "") {
      setSearchResult(data);
      return;
    }

    const mySearch = searchVal.split(",").filter((element) => element);
    if (mySearch.length === 0) {
      return;
    }

    setSearchResult(
      data.filter((product) =>
        mySearch.some((term) =>
          product.name
            .toLocaleLowerCase()
            .includes(term.toLocaleLowerCase().trim())
        )
      )
    );
  }, 300);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const temp2: Product[] = await response.json();
        setData(temp2);
        setSearchResult(temp2);
        console.log(temp2.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 mx-8">
      <textarea
        name="search"
        placeholder="Product Name"
        rows={4}
        onChange={(e) => {
          setSearchVal(e.target.value);
          debouncedSearch();
        }}
        className="w-full border-2 border-black px-2 py-1 rounded"
      ></textarea>
      <button
        type="button"
        onClick={debouncedSearch}
        className="bg-blue-500 px-4 py-1 rounded my-4"
      >
        Search
      </button>
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
  );
}
