export default function AuthorsList({value}){
    const authors = value.volumeInfo.authors;
  
    // ตรวจสอบว่า authors มีค่าหรือไม่
    if (authors) {
      // เรียกใช้ map() หาก authors มีข้อมูล
      const renderedAuthors = authors.map((author, index) => {
        return (
          <span className="tag" key={index}>
            authors : {author}
          </span>
        );
      });
  
      return (
        <div className="authors-list">
          <div className="author">
            {renderedAuthors}
          </div>
        </div>
      );
    } else {
      // authors ไม่มีข้อมูล แสดงข้อความแจ้ง
      return (
        <div className="authors-list">
          <div className="author">
            No authors found.
          </div>
        </div>
      );
    }
  };