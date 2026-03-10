# areStreams

## คำอธิบาย

`areStreams` ใช้กำหนดว่าค่าหนึ่งเป็นอาร์เรย์ที่มีข้อมูล (ไม่ว่าง) ซึ่งทุกองค์ประกอบเป็น `Stream` หรือไม่

### กรณีการใช้งาน

ตรวจสอบคอลเลกชันที่ผู้ใช้ระบุหรือถูกสร้างแบบไดนามิก (เช่น สตรีมอ่านไฟล์หลายรายการ) ก่อนทำการ pipe, resume
หรือดำเนินการอื่น ๆ กับมันเป็นกลุ่ม

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areStreams` เพื่อตรวจสอบอินพุตที่ไม่ทราบชนิดก่อนจะปฏิบัติต่อมันเป็น `Stream[]`; ฟังก์ชันจะคืนค่า `true`
> ก็ต่อเมื่อค่านั้นเป็นอาร์เรย์ที่ไม่ว่างและทุกองค์ประกอบเป็น `Stream`

### ข้อดี

- รับประกันว่าอินพุตเป็นอาร์เรย์ที่มีข้อมูล (ไม่ว่าง) ซึ่งทุกองค์ประกอบเป็น `Stream`
- ให้ตัวป้องกันแบบ `true`/`false` ที่เรียบง่ายสำหรับตรวจสอบคอลเลกชันของสตรีมก่อนประมวลผล
- ล้มเหลวอย่างรวดเร็ว: คืนค่า `false` ทันทีที่พบองค์ประกอบที่ไม่ใช่ `Stream`
- ช่วยป้องกันข้อผิดพลาดขณะรันไทม์เมื่อโค้ดสมมติว่าทุกรายการเป็นอินสแตนซ์ของ `Stream`

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areStreams(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าเป็นอ็อบเจ็กต์ Stream หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import fs from "node:fs";
import { areStreams } from "@type-check/guards";

const stream1 = fs.createReadStream("file1.txt");
const stream2 = fs.createReadStream("file2.txt");

const input: unknown = [stream1, stream2];

if (areStreams(input)) {
  // input เป็นอาร์เรย์ที่มีอ็อบเจ็กต์ Stream อยู่ครบถ้วน
  for (const s of input) {
    s.resume();
  }
} else {
  throw new TypeError("Expected a filled array of Stream objects");
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areStreams(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areStreams](../_analysis/areStreams.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:36:03 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>