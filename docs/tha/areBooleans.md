# areBooleans

## คำอธิบาย

`areBooleans` ตรวจสอบว่าอาร์เรย์ที่ไม่ว่างเปล่าที่กำหนดมีเฉพาะค่าบูลีนเท่านั้น โดยคืนค่า `true` หากเป็นเช่นนั้น
และคืนค่า `false` หากไม่ใช่

### กรณีการใช้งาน

ตรวจสอบข้อมูลที่ผู้ใช้ให้มาหรือข้อมูลจากภายนอก (เช่น เพย์โหลด JSON, พารามิเตอร์คิวรี, อาร์เรย์คอนฟิก)
เพื่อให้แน่ใจว่ารายการที่ไม่ว่างเปล่ามีเฉพาะบูลีนเท่านั้น ก่อนนำไปใช้ตรรกะบูลีนหรือส่งให้ API ที่คาดหวัง `boolean[]`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areBooleans` เพื่อตรวจสอบ `unknown[]` ก่อนจะปฏิบัติกับมันเป็น `boolean[]`; ฟังก์ชันนี้คืนค่า `false`
> สำหรับอาร์เรย์ว่าง ดังนั้นให้จัดการกรณีนั้นอย่างชัดเจนหากควรอนุญาตให้เป็นรายการว่างได้

### ข้อดี

- คืนค่า `true` เฉพาะเมื่อทุกองค์ประกอบเป็นบูลีน และอินพุตเป็นอาร์เรย์ที่ไม่ว่างเปล่าเท่านั้น
- ป้องกันผลบวกลวงโดยปฏิเสธอาร์เรย์ว่าง (คืนค่า `false`)
- เหมาะสำหรับใช้เป็นตัวตรวจสอบขณะรันไทม์ก่อนทำงานที่รองรับเฉพาะบูลีน (เช่น `every`, `some`, การลดค่าด้วยตรรกะ)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areBooleans(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบเป็นบูลีนหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areBooleans(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:42:52 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>