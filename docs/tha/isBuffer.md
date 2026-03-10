# isBuffer

## คำอธิบาย

ตรวจสอบว่าค่าเป็น `Buffer` ของ Node.js หรือไม่ และคืนค่า `true` หรือ `false`

### กรณีการใช้งาน

ตรวจสอบอินพุตขณะรันไทม์ (เช่น เพย์โหลด API, ข้อมูลไฟล์ หรือบัฟเฟอร์ข้อความ) เพื่อให้แน่ใจว่าค่าเป็น `Buffer`
ก่อนประมวลผล และให้ได้ค่า `false` อย่างเชื่อถือได้เมื่อรันนอก Node.js ที่อาจไม่มี `Buffer`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isBuffer` เพื่อทำให้ค่า `unknown` แคบลงเป็น `Buffer` ก่อนเรียกใช้เมธอดที่เฉพาะกับ Buffer

### ข้อดี

- ตรวจจับอินสแตนซ์ `Buffer` ของ Node.js ได้อย่างปลอดภัยด้วย `Buffer.isBuffer`
- คืนค่า `false` ในสภาพแวดล้อมที่ไม่มี `Buffer` เพื่อหลีกเลี่ยงข้อผิดพลาดขณะรันไทม์
- ทำงานกับอินพุตชนิด `unknown` ได้ ทำให้เหมาะสำหรับการตรวจสอบขณะรันไทม์และการทำให้ชนิดแคบลง (type narrowing)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isBuffer(value)`

พารามิเตอร์:

- `value`: ค่าที่จะทดสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // จริง
console.log(isBuffer(b)); // เท็จ

if (isBuffer(a)) {
  // ที่นี่ a เป็น Buffer
  console.log(a.toString("utf8"));
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isBuffer(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 16:33:33 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>