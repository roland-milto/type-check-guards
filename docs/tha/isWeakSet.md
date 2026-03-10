# isWeakSet

## คำอธิบาย

ระบุว่า `value` ที่กำหนดเป็น `WeakSet` ของอ็อบเจ็กต์หรือไม่

### กรณีการใช้งาน

ใช้ `isWeakSet` เมื่อรับอินพุตที่ไม่มีการกำหนดชนิด (เช่น จาก API ภายนอก การกำหนดค่าแบบไดนามิก หรือค่า `unknown`)
และคุณต้องยืนยันว่าเป็น `WeakSet` ก่อนใช้งานการดำเนินการที่เฉพาะเจาะจงกับ `WeakSet`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isWeakSet` เพื่อทำให้ค่า `unknown` แคบลงเป็น `WeakSet<object>` ขณะรันไทม์; โปรดทราบว่า `WeakSet`
> สามารถเก็บได้เฉพาะการอ้างอิงอ็อบเจ็กต์เท่านั้น

### ข้อดี

- ให้การตรวจสอบขณะรันไทม์แบบง่าย ๆ ว่าค่าหนึ่งเป็น `WeakSet` หรือไม่
- ช่วยป้องกันข้อผิดพลาดของชนิดข้อมูล โดยทำให้มั่นใจว่าเฉพาะอินสแตนซ์ของ `WeakSet` เท่านั้นที่ถูกปฏิบัติว่าเป็นเช่นนั้น
- ทำงานได้กับอินพุต `unknown` ใด ๆ และคืนค่าผลลัพธ์แบบบูลีนที่ชัดเจน (`true`/`false`)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isWeakSet(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // จริง
console.log(isWeakSet(b)); // เท็จ

if (isWeakSet(a)) {
  // a เป็น WeakSet ในขณะรันไทม์
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isWeakSet(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:19:35 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>