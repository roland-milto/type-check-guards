# isUndefined

## คำอธิบาย

ตรวจสอบว่าค่าที่กำหนดเป็น `undefined` หรือไม่

### กรณีการใช้งาน

ใช้ `isUndefined` เพื่อทำ guard ให้กับอินพุตที่เป็น optional, ตรวจจับพร็อพเพอร์ตีที่ขาดหายไป หรือแยกความแตกต่างระหว่าง
“ไม่ได้ส่งมา” (`undefined`) กับ “ว่างแบบตั้งใจ” (`null`)

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isUndefined` เมื่อคุณต้องการตรวจจับ `undefined` โดยเฉพาะ (ไม่ใช่ `null`) โดยปลอดภัยเพราะอาศัยเงื่อนไข
`typeof value === "undefined"`

### ข้อดี

- ให้การตรวจสอบ `undefined` ที่ชัดเจนและระบุอย่างชัดแจ้งด้วย `typeof` ช่วยหลีกเลี่ยงกรณีขอบ (edge cases)
  ที่เกี่ยวข้องกับตัวแปรที่ยังไม่ได้ประกาศ
- คืนค่าผลลัพธ์เป็นบูลีนแบบง่าย (`true`/`false`) เหมาะสำหรับการทำ guard, การแตกแขนงเงื่อนไข
  และตรรกะการตรวจสอบความถูกต้อง
- ช่วยแยก `undefined` ออกจากค่า “ว่าง” อื่น ๆ เช่น `null`, `0`, `""` หรือ `NaN`

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isUndefined(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  // x เป็น undefined ที่นี่
} else {
  // x ไม่เป็น undefined ที่นี่
}

const a = isUndefined(undefined); // true
const b = isUndefined(null);      // false

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isUndefined(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isUndefined](../_analysis/isUndefined.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:04:45 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>