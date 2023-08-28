import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthorsList from "@/components/AuthorsList";
import RenderImage from "@/components/ImageRender";
import CategoriesList from "@/components/CategoriesList";
import DescriptionRender from "@/components/DescriptionRender";
import PreviewLinkRender from "@/components/PreviewLinkRender";

export default function Home() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then((response) => {
        setResults(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  console.log(results);

  return (
    <main className=" w-full grid grid-cols-1 place-items-center">
      <h1>Find a Book</h1>
      <input
        className=" text-black"
        type="text"
        placeholder="Search for books..."
        onChange={(e) => setQuery(e.target.value)}
      />
      
        {results.map((result, index) => {
          return (
            <div key={result.id} className=" w-3/4 text-black grid grid-cols-3 py-2 ">
              <RenderImage value={result}  />
              <div className=" col-span-2">
                <p>{result.volumeInfo.title}</p>

                <AuthorsList value={result} />

                <CategoriesList value={result} />

                <DescriptionRender value={result} />

                <PreviewLinkRender value={result} />
              </div>
            </div>
          );
        })}
      
    </main>
  );
}
