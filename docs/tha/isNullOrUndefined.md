# isNullOrUndefined

## คำอธิบาย

ตรวจสอบว่าค่าที่กำหนดเป็น `null` หรือ `undefined` หรือไม่

### กรณีการใช้งาน

ใช้ `isNullOrUndefined` เมื่อคุณต้องการถือว่า `null` และ `undefined` เป็น “ไม่มีค่า” เหมือนกัน เช่น
การตรวจสอบอินพุตที่เป็นทางเลือก, การทำให้เพย์โหลด API เป็นรูปแบบมาตรฐาน, หรือการป้องกันเส้นทางโค้ดก่อนทำการ dereference
ค่าที่อาจไม่มีอยู่

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isNullOrUndefined` เพื่อป้องกันกรณีค่าว่างหายไปก่อนเข้าถึงพร็อพเพอร์ตีหรือเรียกเมธอด; ฟังก์ชันนี้จะคืนค่า `true`
> เฉพาะเมื่อเป็น `null` และ `undefined` เท่านั้น

### ข้อดี

- มีการ์ดที่ชัดเจนและนำกลับมาใช้ซ้ำได้สำหรับตรวจจับ `null` และ `undefined` ในที่เดียว
- คืนค่าเป็นบูลีนแบบง่าย (`true`/`false`) ที่นำไปประกอบใช้ในเงื่อนไขและการตรวจสอบความถูกต้องได้สะดวก
- ช่วยหลีกเลี่ยงข้อผิดพลาดขณะรันที่พบบ่อย โดยตรวจสอบค่าว่างหายไปก่อนเข้าถึงพร็อพเพอร์ตีหรือเรียกเมธอด

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isNullOrUndefined(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบว่าเป็น `null` หรือ `undefined` หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // จัดการค่าที่ขาดหายไป
}

console.log(isNullOrUndefined(b)); // จริง
console.log(isNullOrUndefined(c)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isNullOrUndefined(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 00:35:36 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>