# isFinite

## คำอธิบาย

กำหนดว่า `value` ที่กำหนดเป็น `number` ที่เป็นจำนวนจำกัดหรือไม่

### กรณีการใช้งาน

ใช้ `isFinite` เพื่อตรวจสอบความถูกต้องของอินพุตที่ไม่ทราบชนิด (เช่น จาก JSON, ฟอร์ม หรือ API) ก่อนทำการคำนวณเชิงตัวเลข
เพื่อให้แน่ใจว่าค่านั้นเป็นตัวเลขจริงที่เป็นจำนวนจำกัด

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> `isFinite` คืนค่า `true` เฉพาะสำหรับตัวเลขที่เป็นจำนวนจำกัดเท่านั้น; มันคืนค่า `false` สำหรับ `NaN`, `Infinity`
> และค่าที่ไม่ใช่ตัวเลขทุกค่า

### ข้อดี

- ใช้ `Number.isFinite` ที่มีมาในตัวเพื่อการตรวจสอบความเป็นจำนวนจำกัดที่เชื่อถือได้
- คืนค่า `true` เฉพาะสำหรับตัวเลขที่เป็นจำนวนจำกัดเท่านั้น; คืนค่า `false` สำหรับ `NaN`, `Infinity`
  และอินพุตที่ไม่ใช่ตัวเลข
- เป็นเพรดิเคตที่เรียบง่าย ไม่มีผลข้างเคียง เหมาะสำหรับการตรวจสอบความถูกต้องและตรรกะการการ์ด

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isFinite(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบว่าเป็นจำนวนจำกัดหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers คือ: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // ที่นี่ value เป็นจำนวนจำกัด
  const doubled = value * 2;
  console.log(doubled);
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isFinite(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:32:00 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>