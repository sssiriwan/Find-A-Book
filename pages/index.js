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
    <main className=" w-screen h-screen grid grid-cols-1 place-items-center pt-[50px]">
      <div className=" w-3/4 text-center">
        <h1 className=" pb-3 text-[45px]">📚Find a Book.</h1>
        <input
          className=" text-black w-1/4 text-center "
          type="text"
          placeholder="Search for books...🤓"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {results.map((result, index) => {
        return (
          <div
            key={result.id}
            className=" w-3/4 h-64 text-black grid grid-cols-3 py-2 border-spacing-2"
          >
            <RenderImage value={result} />
            <div className=" col-span-2 ">
              <p className=" text-lg font-semibold line-clamp-1">
                {result.volumeInfo.title}
              </p>

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
