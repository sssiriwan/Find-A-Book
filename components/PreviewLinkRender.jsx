export default function PreviewLinkRender({ value }) {
  const previewLink = value.volumeInfo.previewLink;

  // ตรวจสอบว่า previewLink มีค่าหรือไม่
  if (previewLink) {
    // แสดง previewLink
    return <a href={previewLink}>Preview</a>;
  }
}
