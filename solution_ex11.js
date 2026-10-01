/*
 * PHÂN TÍCH TRADE-OFF: .slice() vs .substring() vs .substr()
 * | Đặc điểm            | .slice() (Khuyên dùng)       | .substring()           | .substr() ️ Lỗi thời) |
 * |---------------------|------------------------------|------------------------|-------------------------|
 * | Chỉ số âm (-x)      | Đếm ngược từ cuối chuỗi      | Bị ép về 0             | start âm đếm ngược      |
 * | Khi start > end     | Trả về chuỗi rỗng "" (An toàn)| Tự hoán đổi 2 chỉ số   | N/A (tham số 2 là length)|
 * | Chuẩn dự án hiện đại| Dùng mặc định (nhất quán)    | Hạn chế dùng           | Tuyệt đối CẤM dùng      |
 */

const patientRecords = [
  "NGOAI-1024-2026",
  "NHI-0955-2025",
  "TIM-8842-2026",
  "CAPCUU--2026",
];

console.log("--- KẾT QUẢ BÓC TÁCH MÃ HỒ SƠ ---");

for (let i = 0; i < patientRecords.length; i++) {
  const record = patientRecords[i];

  const firstDashIndex = record.indexOf("-");
  const lastDashIndex = record.lastIndexOf("-");

  const deptCode = record.slice(0, firstDashIndex);

  const patientNumber = record.slice(firstDashIndex + 1, lastDashIndex);

  console.log(`Hồ sơ gốc: ${record}`);
  console.log(`- Mã Khoa : ${deptCode}`);
  console.log(
    `- Số TT   : ${patientNumber === "" ? "KHÔNG HỢP LỆ (Trống)" : patientNumber}`,
  );
  console.log(`- Năm     : ${year}`);
  console.log("-----------------------------------------");
}
