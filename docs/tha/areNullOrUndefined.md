# areNullOrUndefined

## คำอธิบาย

ตรวจสอบว่าองค์ประกอบทั้งหมดในอาร์เรย์ที่กำหนดเป็น `null` หรือ `undefined` หรือไม่

### กรณีการใช้งาน

ตรวจสอบว่ารายการของฟิลด์ที่เป็นตัวเลือกไม่มีค่าจริงอยู่เลย (มีเพียง `null`/`undefined`)
ก่อนตัดสินใจข้ามการประมวลผลหรือแสดงสถานะ “ไม่ได้ระบุค่า”

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areNullOrUndefined` เมื่อคุณต้องการยืนยันว่าอาร์เรย์มีเฉพาะค่าที่หายไป (`null`/`undefined`) เท่านั้น
> โปรดทราบว่ามันจะคืนค่า `false` สำหรับอาร์เรย์ว่าง

### ข้อดี

- คืนค่า `true` เฉพาะเมื่อทุกองค์ประกอบเป็น `null` หรือ `undefined` เท่านั้น
- คืนค่า `false` สำหรับอาร์เรย์ว่าง ช่วยแยกความแตกต่างระหว่าง “ไม่มีข้อมูล” กับ “ค่าหายไปทั้งหมด”
- ทำงานกับ `unknown[]` ได้ ทำให้ปลอดภัยต่อการใช้งานก่อนการจำกัดชนิด (narrowing) ของประเภทข้อมูล

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areNullOrUndefined(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areNullOrUndefined(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 00:31:44 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>