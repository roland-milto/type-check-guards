# areFinite

## คำอธิบาย

`areFinite` ตรวจสอบว่าค่าหนึ่งเป็นอาร์เรย์ที่ไม่ว่างซึ่งองค์ประกอบทั้งหมดเป็นตัวเลขที่เป็นจำนวนจำกัด (finite) หรือไม่
โดยจะคืนค่า `true` หากเป็นเช่นนั้น และคืนค่า `false` ในกรณีอื่น

### กรณีการใช้งาน

ตรวจสอบความถูกต้องของอาร์เรย์อินพุตเชิงตัวเลข (เช่น ชุดข้อมูลกราฟ, รายการพิกัด, ตัวอย่างการวัด) ก่อนทำการคำนวณ
เพื่อให้แน่ใจว่าผลลัพธ์เป็น `true` เฉพาะเมื่อค่าทั้งหมดเป็นตัวเลขที่เป็นจำนวนจำกัด (finite)

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areFinite` เมื่อคุณต้องการให้แน่ใจว่าอาร์เรย์ไม่ว่างและมีเฉพาะตัวเลขที่เป็นจำนวนจำกัด (finite) เท่านั้น
> โดยมันจะคืนค่า `false` สำหรับอาร์เรย์ว่าง และสำหรับอาร์เรย์ที่มี `NaN` หรือค่าอนันต์

### ข้อดี

- คืนค่า `true` เฉพาะเมื่ออินพุตเป็นอาร์เรย์ที่ไม่ว่างและทุกองค์ประกอบเป็นตัวเลขที่เป็นจำนวนจำกัด (finite) เท่านั้น
- ปฏิเสธ `Infinity`, `-Infinity` และ `NaN` โดยอาศัยการตรวจ `isFinite` สำหรับแต่ละองค์ประกอบ
- ให้ผลลัพธ์แบบบูลีนที่เรียบง่าย (`true`/`false`) เหมาะสำหรับการทำ guard และโฟลว์การตรวจสอบความถูกต้อง (validation)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areFinite(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบทั้งหมดเป็นจำนวนจำกัด (finite) หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // จริง
console.log(areFinite(b)); // เท็จ
console.log(areFinite(c)); // เท็จ

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areFinite(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:37:44 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>