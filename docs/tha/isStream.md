# isStream

## คำอธิบาย

`isStream` ตรวจสอบว่าค่าที่กำหนดเป็นอ็อบเจ็กต์สตรีมหรือไม่ (สตรีมแบบ Node.js, `ReadableStream` หรือ `WritableStream`).

### กรณีการใช้งาน

ตรวจสอบอินพุตที่อาจเป็นได้ทั้งอ็อบเจ็กต์ทั่วไปหรือสตรีม (เช่น การอัปโหลดไฟล์, HTTP body หรือไปป์ไลน์การประมวลผล)
และแยกตรรกะตามว่าค่านั้นเป็นสตรีมหรือไม่

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isStream` เพื่อทำให้ชนิดของ `unknown` แคบลงก่อนเรียกเมธอดของสตรีม โดยมันรู้จักอ็อบเจ็กต์ที่มีลักษณะเป็นสตรีมแบบ
> Node.js (ผ่าน `pipe`/`on`) และ Web Streams (`ReadableStream`/`WritableStream`) เมื่อมีโกลบอลเหล่านั้นอยู่

### ข้อดี

- ตรวจจับอ็อบเจ็กต์ที่มีลักษณะเป็นสตรีมแบบ Node.js ที่พบบ่อยได้อย่างปลอดภัย โดยตรวจสอบว่ามีฟังก์ชัน `pipe` และ `on`
  หรือไม่
- รองรับ Web Streams ด้วย โดยรู้จัก `ReadableStream` และ `WritableStream` เมื่อมีให้ใช้งาน
- คืนค่าผลลัพธ์เป็นบูลีนแบบง่าย (`true`/`false`) เหมาะสำหรับใช้เป็นการ์ดและตรรกะแบบแยกแขนง

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isStream(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import fs from "node:fs";
import { isStream } from "@type-check/guards";

const nodeStream = fs.createReadStream("file1.txt");

if (isStream(nodeStream)) {
  // nodeStream มีลักษณะเหมือนสตรีม; คุณสามารถใช้งาน API สตรีมทั่วไปได้อย่างปลอดภัย
  nodeStream.on("data", (chunk) => {
    console.log("chunk length:", chunk.length);
  });
}

console.log(isStream({}));
console.log(isStream(null));
console.log(isStream("notAStream"));
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isStream(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isStream](../_analysis/isStream.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:43:22 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>