# isValidDate

## คำอธิบาย

`isValidDate` ตรวจสอบว่าค่าที่กำหนดเป็นอ็อบเจ็กต์ `Date` ที่ถูกต้องหรือไม่ และจะคืนค่า `true`
เฉพาะสำหรับวันที่จริงที่ไม่ใช่วันที่ไม่ถูกต้อง

### กรณีการใช้งาน

ตรวจสอบอินพุตของผู้ใช้หรือข้อมูลจาก API ที่อาจมีวันที่ เพื่อให้แน่ใจว่าค่านั้นเป็นอินสแตนซ์ `Date`
จริงและไม่ใช่วันที่ที่ไม่ถูกต้อง ก่อนทำการคำนวณวันที่ การจัดรูปแบบ หรือการเปรียบเทียบ

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isValidDate` ก่อนเรียกเมธอดของ `Date` (เช่น `toISOString`, `getTime`) กับค่าที่มีชนิดเป็น `unknown`
> เพื่อให้แน่ใจว่าเป็นอ็อบเจ็กต์ `Date` ที่ถูกต้อง

### ข้อดี

- รับประกันว่าค่าเป็นอินสแตนซ์ของ `Date` จริง ๆ ไม่ใช่แค่สตริงหรือเลขที่ดูเหมือนวันที่
- ปฏิเสธวันที่ที่ไม่ถูกต้อง (เช่น `new Date("invalid")`) โดยตรวจสอบค่าเวลาเป็น `NaN`
- การ์ดแบบบูลีนที่เรียบง่าย ใช้งานได้ง่ายในเงื่อนไขและไปป์ไลน์การตรวจสอบความถูกต้อง
- ช่วยป้องกันข้อผิดพลาดขณะรันไทม์เมื่อเรียกเมธอดของวันที่ โดยตรวจสอบอินพุตก่อน

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isValidDate(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isValidDate } from "@type-check/guards";

const input: unknown = new Date();

if (isValidDate(input)) {
  // input เป็นอินสแตนซ์ของ Date ที่ถูกต้อง
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a valid Date");
}

console.log(isValidDate(new Date("invalid"))); // เท็จ
console.log(isValidDate("2025-12-22")); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isValidDate(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isValidDate](../_analysis/isValidDate.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:53:16 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>