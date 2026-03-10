# areIntegers

## คำอธิบาย

`areIntegers` ใช้กำหนดว่าทุกองค์ประกอบในอาร์เรย์ที่กำหนดเป็นจำนวนเต็มทั้งหมดหรือไม่ โดยจะคืนค่า `true` หากใช่ และคืนค่า
`false` หากไม่ใช่

### กรณีการใช้งาน

ใช้ `areIntegers` เพื่อตรวจสอบข้อมูลที่ผู้ใช้ให้มาหรือข้อมูลจากภายนอก (เช่น พารามิเตอร์คิวรี, เพย์โหลด JSON, แถว CSV)
เมื่อโลจิกของคุณต้องการรายการของค่าจำนวนเต็มที่มีข้อมูลครบ เช่น ID, ตัวนับ, ออฟเซ็ตสำหรับการแบ่งหน้า,
หรือดัชนีของอาร์เรย์

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areIntegers` เป็นการ์ดขณะรันไทม์สำหรับอินพุต `unknown[]` ก่อนที่จะปฏิบัติต่อมันเป็น `number[]`
> ที่มีเฉพาะจำนวนเต็ม หากคืนค่า `false` แสดงว่าอินพุตอาจไม่ใช่อาร์เรย์ที่มีค่า (filled array)
> หรือมีอย่างน้อยหนึ่งค่าที่ไม่ใช่จำนวนเต็ม

### ข้อดี

- คืนค่า `true` เฉพาะเมื่อทุกองค์ประกอบเป็นจำนวนเต็ม มิฉะนั้นจะคืนค่า `false`
- ช่วยตรวจสอบความถูกต้องของอินพุตที่ไม่ทราบแน่ชัดก่อนทำงานที่รองรับเฉพาะจำนวนเต็ม (เช่น การทำดัชนี, การนับ, ID)
- ล้มเหลวอย่างรวดเร็ว: หยุดตรวจทันทีที่พบองค์ประกอบที่ไม่ใช่จำนวนเต็ม

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areIntegers(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบเป็นจำนวนเต็มหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // จริง
console.log(areIntegers(b)); // จริง
console.log(areIntegers(c)); // เท็จ

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areIntegers(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 01:00:51 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>