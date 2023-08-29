export default function CategoriesList({ value }) {
  const categories = value.volumeInfo.categories;

  // ตรวจสอบว่า categories มีค่าหรือไม่
  if (categories) {
    // เรียกใช้ map() หาก categories มีข้อมูล
    const renderedCategories = categories.map((category, index) => {
      return (
        <span className="tag" key={index}>
          <span className=" font-medium">Categories :</span> {category}
        </span>
      );
    });

    return (
      <div className="categories-list">
        <div className="category">{renderedCategories}</div>
      </div>
    );
  } else {
    // categories ไม่มีข้อมูล แสดงข้อความแจ้ง
    return (
      <div className="categories-list">
        <div className="category">No categories found.</div>
      </div>
    );
  }
}
