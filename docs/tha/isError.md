# isError

## คำอธิบาย

ตรวจสอบว่า `value` ที่กำหนดเป็นอินสแตนซ์ของ `Error` หรือไม่

### กรณีการใช้งาน

ใช้ `isError` เมื่อคุณได้รับค่า `unknown` (เช่น จากบล็อก `catch`, คอลแบ็ก หรือไลบรารีภายนอก)
และคุณต้องการระบุอย่างปลอดภัยว่ามันเป็น `Error` หรือไม่ ก่อนอ่าน `message`, `name` หรือ `stack`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isError` เพื่อการ์ดค่าชนิด `unknown` (เช่น จาก `catch`) ก่อนจะปฏิบัติต่อมันเป็น `Error`

### ข้อดี

- ให้การตรวจสอบขณะรันไทม์แบบง่าย ๆ ว่าค่าเป็นอินสแตนซ์ของ `Error` หรือไม่
- ช่วยทำให้ชนิดของอินพุตที่ไม่ทราบแน่ชัดแคบลงก่อนเข้าถึงพร็อพเพอร์ตีของ `Error` เช่น `message` หรือ `stack`
- ลดความเสี่ยงของข้อยกเว้นขณะรันไทม์เมื่อจัดการค่าจาก `catch`, API ภายนอก หรือแหล่งที่ไม่มีการกำหนดชนิด

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isError(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบเทียบกับชนิด `Error`

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isError } from "@type-check/guards";

function formatFailure(value: unknown): string {
  if (isError(value)) {
    return `Error: ${value.message}`;
  }
  return "Unknown failure";
}

console.log(formatFailure(new Error("Boom")));
console.log(formatFailure("Boom"));
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isError(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isError](../_analysis/isError.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 6 February 2026 at 12:47:23 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>