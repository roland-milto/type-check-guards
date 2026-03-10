# isNull

## คำอธิบาย

กำหนดว่าค่า `value` ที่ให้มานั้นเป็น `null` หรือไม่

### กรณีการใช้งาน

ใช้ `isNull` เพื่อยืนยันความถูกต้องของอินพุตหรือฟิลด์ใน payload ของ API ในกรณีที่ `null` เป็นค่าสัญญาณ (sentinel)
ที่มีความหมายและต้องจัดการแตกต่างจาก `undefined` หรือค่าอื่น ๆ

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isNull` เมื่อคุณต้องการแยกความแตกต่างระหว่าง `null` กับ `undefined` และค่า falsy อื่น ๆ; ฟังก์ชันนี้จะคืนค่า
`true` เฉพาะเมื่อเป็น `null` เท่านั้น

### ข้อดี

- ให้การตรวจสอบ `null` อย่างแม่นยำโดยไม่ปะปนกับ `undefined`
- ทำงานได้อย่างเชื่อถือได้กับอินพุตทุกประเภท เพราะรับค่าเป็น `unknown`
- เรียบง่าย รวดเร็ว และไม่มีผลข้างเคียง; คืนค่าเพียง `true` หรือ `false` เท่านั้น

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isNull(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบว่าเป็น `null` หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); // จริง
console.log(isNull(b)); // เท็จ

if (isNull(a)) {
  // a เป็น null ที่นี่
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isNull(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isNull](../_analysis/isNull.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 15:41:07 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>