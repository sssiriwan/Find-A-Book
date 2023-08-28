export default function DescriptionRender({value}) {
  const description = value.volumeInfo.description;

  // ตรวจสอบว่า description มีค่าหรือไม่
  if (description) {
    // แสดง description
    return <div className=" line-clamp-3" > 
      {description}
      </div>;
  } else {
    // description ไม่มีข้อมูล แสดงข้อความแจ้ง
    return <div>No description found.</div>;
  }
}
