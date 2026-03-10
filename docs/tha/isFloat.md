# isFloat

## คำอธิบาย

`isFloat` ใช้กำหนดว่า `value` ที่กำหนดเป็นเลขทศนิยมแบบจำนวนจำกัดหรือไม่ (เป็น `number` ที่ไม่ใช่จำนวนเต็ม).

### กรณีการใช้งาน

ตรวจสอบความถูกต้องของอินพุตตัวเลขที่ผู้ใช้ระบุซึ่งต้องการค่าที่มีเศษส่วน (เช่น ราคา การวัด อัตรา) และปฏิเสธจำนวนเต็ม,
`NaN` และค่าอนันต์

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isFloat` เมื่อคุณต้องการรับเฉพาะอินพุตตัวเลขที่เป็นจำนวนจำกัดและไม่เป็นจำนวนเต็ม
> โดยจะปฏิเสธจำนวนเต็มและตัวเลขที่ไม่เป็นจำนวนจำกัด

### ข้อดี

- คืนค่า `true` เฉพาะสำหรับตัวเลขที่เป็นจำนวนจำกัดและไม่เป็นจำนวนเต็ม (ไม่รวมจำนวนเต็ม, `NaN`, `Infinity` และ
  `-Infinity`).
- ทำงานได้กับอินพุตทุกชนิด (`unknown`) และจำกัดชนิดอย่างปลอดภัยด้วยการตรวจสอบ `typeof value === "number"`.
- ใช้ตัวตรวจสอบตัวเลขที่มีมาในตัว (`Number.isInteger`, `Number.isFinite`) เพื่อพฤติกรรมที่คาดเดาได้.

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isFloat(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบว่าเป็นเลขทศนิยมหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isFloat } from "@type-check/guards";

const inputs: unknown[] = [3.14, -0.1, 1e-7, 42, "3.14", NaN, Infinity];

for (const value of inputs) {
  if (isFloat(value)) {
    // ค่าเป็นตัวเลขขณะรันไทม์; มีค่าจำกัดและไม่ใช่จำนวนเต็ม
    const rounded = value.toFixed(2);
    console.log("float:", value, "rounded:", rounded);
  } else {
    console.log("not a float:", value);
  }
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isFloat(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isFloat](../_analysis/isFloat.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:10:12 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>