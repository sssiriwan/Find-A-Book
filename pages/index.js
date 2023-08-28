import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import AuthorsList from "@/components/AuthorsList";


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
  // try {
  return (
    <main>
      <h1>Find a Book</h1>
      <input
        className=" text-black"
        type="text"
        placeholder="Search for books..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result, index) => {
          return (
            <div key={result.id} className=" text-black">
              <div>{result.volumeInfo.title}</div>
              <div>
                <img src={result.volumeInfo.imageLinks.thumbnail} />
              </div>
              <div className="authors-list">
                <div className="author">
                  <AuthorsList value={result} />
                </div>
              </div>

              <div>{result.volumeInfo.description}</div>
              <a href={result.volumeInfo.previewLink}>Link</a>
            </div>
          );
        })}
      </ul>
    </main>
  );
  //  } catch (error) {
  //    return (<>
  //      <p>Book not found🧐, Try Searching under a different name🤓</p>

  //     </>
  //    );
  //  }
}

{
  /* <div className="authors-list">
              <div className="author">
              {result.volumeInfo.authors.map((author, index) => {
                return (
                  <span className="tag" key={index}>
                   authors : {author}
                  </span>
                );
              })} </div>
            </div> */
}


// const authorsList = (result) => {
//   const authors = result.volumeInfo.authors;

//   // ตรวจสอบว่า authors มีค่าหรือไม่
//   if (authors) {
//     // เรียกใช้ map() หาก authors มีข้อมูล
//     const renderedAuthors = authors.map((author, index) => {
//       return (
//         <span className="tag" key={index}>
//           authors : {author}
//         </span>
//       );
//     });

//     return (
//       <div className="authors-list">
//         <div className="author">
//           {renderedAuthors}
//         </div>
//       </div>
//     );
//   } else {
//     // authors ไม่มีข้อมูล แสดงข้อความแจ้ง
//     return (
//       <div className="authors-list">
//         <div className="author">
//           No authors found.
//         </div>
//       </div>
//     );
//   }
// };

// {result.volumeInfo.authors.map((author, index) => {
//   return (
//     <span className="tag" key={index}>
//       authors : {author}
//     </span>
//   );
// })}