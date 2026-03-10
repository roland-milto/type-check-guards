# areValidDates

## คำอธิบาย

กำหนดว่าอาร์เรย์ไม่ว่างและประกอบด้วยอ็อบเจ็กต์ `Date` ที่ถูกต้องทั้งหมดหรือไม่

### กรณีการใช้งาน

ใช้ `areValidDates` เพื่อตรวจสอบอาร์เรย์ที่ผู้ใช้ให้มาหรือที่ได้จาก API ก่อนทำการดำเนินการที่อิงตามวันที่ (
การเรียงลำดับ, การตรวจสอบช่วง, การจัดรูปแบบ) เพื่อให้มั่นใจว่าทุกรายการเป็นอ็อบเจ็กต์ `Date` ที่เป็นจริงและถูกต้อง
และรายการไม่ว่าง

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> `areValidDates` จะคืนค่า `false` สำหรับอาร์เรย์ว่าง;
> ตรวจสอบให้แน่ใจว่าอาร์เรย์ตั้งใจให้ไม่ว่างก่อนที่จะพึ่งพามันเป็นขั้นตอนการตรวจสอบความถูกต้อง

### ข้อดี

- คืนค่า `true` เฉพาะเมื่อทุกองค์ประกอบเป็นอินสแตนซ์ `Date` ที่ถูกต้อง (ไม่มีวันที่ไม่ถูกต้อง เช่น
  `new Date('invalid')`).
- ปฏิเสธอินพุตว่างโดยคืนค่า `false` เพื่อให้มั่นใจว่าคุณยอมรับเฉพาะรายการวันที่ที่มีความหมายและไม่ว่างเท่านั้น
- ให้การตรวจสอบแบบบูลีนสไตล์การ์ดที่เรียบง่าย ซึ่งประกอบร่วมกับการตรวจสอบอื่น ๆ ได้ง่าย

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areValidDates(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบ ซึ่งอาจมีอ็อบเจ็กต์ `Date` อยู่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // จริง
console.log(areValidDates(b)); // เท็จ
console.log(areValidDates(c)); // เท็จ
console.log(areValidDates(d)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areValidDates(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:34:20 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>