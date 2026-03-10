# areRegExes

## คำอธิบาย

`areRegExes` ตรวจสอบว่าค่าเป็นอาร์เรย์ที่มีข้อมูลและมีเฉพาะอ็อบเจ็กต์ `RegExp` เท่านั้นหรือไม่

### กรณีการใช้งาน

ตรวจสอบว่าตัวเลือกการกำหนดค่า (เช่น รายการแพตเทิร์น allow/deny)
เป็นอาร์เรย์ของนิพจน์ทั่วไปที่ไม่ว่างเปล่าก่อนนำไปใช้สำหรับการจับคู่

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areRegExes` เพื่อทำให้ `unknown` แคบลงเป็น `RegExp[]` ก่อนการวนลูปหรือการประกอบแพตเทิร์น

### ข้อดี

- รับประกันว่าค่าเป็นอาร์เรย์ที่ไม่ว่างเปล่า โดยทุกองค์ประกอบเป็นอินสแตนซ์ของ `RegExp`
- ให้ตัวป้องกันแบบบูลีนที่เรียบง่าย (`true`/`false`) สำหรับตรวจสอบความถูกต้องของอินพุตผู้ใช้หรือการกำหนดค่า
- ช่วยป้องกันข้อผิดพลาดขณะรันไทม์เมื่อโค้ดภายหลังสมมติว่าทุกรายการรองรับการทำงานของนิพจน์ทั่วไป

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areRegExes(array)`

พารามิเตอร์:

- `array`: ค่าที่จะตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areRegExes } from "@type-check/guards";

const patterns: unknown = [/[a-z]/, /[0-9]/];

if (areRegExes(patterns)) {
  // ที่นี่ patterns เป็นอาร์เรย์ของ RegExp
  const combined = new RegExp(patterns.map(r => r.source).join("|"));
  console.log(combined.test("abc123"));
} else {
  throw new TypeError("Expected a non-empty array of RegExp");
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areRegExes(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areRegExes](../_analysis/areRegExes.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:22:20 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>