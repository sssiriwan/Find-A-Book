export default function RenderImage({ value }) {
  const imageLinks = value.volumeInfo.imageLinks;

  // ตรวจสอบว่า imageLinks มีค่าหรือไม่
  if (imageLinks) {
    // เรียกใช้ img แสดงภาพ
    return (
      <div>
        <img src={imageLinks.thumbnail} />
      </div>
    );
  } else {
    // imageLinks ไม่มีข้อมูล แสดงข้อความแจ้ง
    return <div>No image found.</div>;
  }
}
