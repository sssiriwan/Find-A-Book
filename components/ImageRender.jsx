export default function RenderImage({ value }) {
  const imageLinks = value.volumeInfo.imageLinks;

  // ตรวจสอบว่า imageLinks มีค่าหรือไม่
  if (imageLinks) {
    // เรียกใช้ img แสดงภาพ
    return (
      <div className=" w-full h-full place-item-center pl-28 ">
        <img
          className=" rounded-lg shadow-2xl object-cover "
          src={imageLinks.thumbnail}
        />
      </div>
    );
  } else {
    // imageLinks ไม่มีข้อมูล แสดงข้อความแจ้ง
    return (
      <div className=" w-full place-self-center pl-28">No image found.</div>
    );
  }
}
