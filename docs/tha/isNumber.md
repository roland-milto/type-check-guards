# isNumber

## คำอธิบาย

`isNumber` ตรวจสอบว่าค่าเป็นตัวเลขที่มีขอบเขตจำกัดและไม่ใช่ `NaN` หรือไม่.

### กรณีการใช้งาน

ตรวจสอบอินพุตตัวเลขจากแหล่งที่ไม่น่าเชื่อถือ (ฟอร์ม, พารามิเตอร์ในคิวรี, เพย์โหลด JSON) ก่อนการคำนวณ การจัดเก็บ
หรือการตรวจช่วงค่า เพื่อให้แน่ใจว่ามีเพียงตัวเลขที่มีขอบเขตจำกัดเท่านั้นที่ผ่าน (`true`) และอย่างอื่นทั้งหมดคืนค่า
`false`.

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isNumber` เพื่อตรวจสอบค่า `unknown` ก่อนทำเลขคณิต โดยมันจะปฏิเสธ `NaN`, `Infinity` และ `-Infinity`.

### ข้อดี

- คืนค่า `true` เฉพาะสำหรับตัวเลข JavaScript ที่เป็นตัวเลขจริงเท่านั้น (ตรวจชนิดพร้อมทั้งปฏิเสธ `NaN` และค่าอนันต์).
- ป้องกันบั๊กการตรวจสอบความถูกต้องที่พบบ่อย ซึ่ง `NaN`, `Infinity` หรือ `-Infinity` เผลอผ่านว่าเป็นตัวเลข.
- เหมาะสำหรับใช้เป็นตัวป้องกันขณะรันไทม์กับอินพุตที่ไม่ทราบชนิด (เช่น JSON, อินพุตผู้ใช้, API ภายนอก).
- เรียบง่าย รวดเร็ว และไม่มีผลข้างเคียง.

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isNumber(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ.

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input เป็นตัวเลขจำกัดที่ถูกต้อง
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isNumber(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 13:11:36 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>