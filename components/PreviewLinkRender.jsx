export default function PreviewLinkRender({ value }) {
  const previewLink = value.volumeInfo.previewLink;

  // ตรวจสอบว่า previewLink มีค่าหรือไม่
  if (previewLink) {
    // แสดง previewLink
    return (
      <a href={previewLink}>
        <button class=" w-max h-max rounded-lg p-1  text-yellow-50 bg-[#dc6666] hover:bg-[#e95757] active:bg-[#dd6b6b] focus:outline-none focus:ring focus:ring-[#f9c0c0] ">
          Preview
        </button>
      </a>
    );
  }
}
