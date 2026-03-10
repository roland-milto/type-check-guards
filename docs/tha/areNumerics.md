# areNumerics

## คำอธิบาย

`areNumerics` ตรวจสอบว่าค่าเป็นอาร์เรย์ที่ไม่ว่างซึ่งทุกองค์ประกอบเป็นตัวเลขหรือไม่

### กรณีการใช้งาน

ใช้ `areNumerics` เพื่อตรวจสอบความถูกต้องของข้อมูลภายนอกหรือข้อมูลที่ไม่มีการระบุชนิด (เช่น payload ของ JSON,
พารามิเตอร์ของ query, อินพุตจากฟอร์ม) ก่อนคำนวณผลรวม ค่าเฉลี่ย หรือการคำนวณเชิงตัวเลขอื่น ๆ
โดยทำให้มั่นใจว่าอินพุตเป็นอาร์เรย์ตัวเลขที่ไม่ว่าง และคืนค่า `false` หากไม่เป็นไปตามเงื่อนไข

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areNumerics` เพื่อการ์ดอินพุตชนิด `unknown` ก่อนจะปฏิบัติต่อมันเป็นอาร์เรย์ตัวเลข; ฟังก์ชันจะคืนค่า `false`
> สำหรับค่าที่ไม่ใช่อาร์เรย์และอาร์เรย์ว่าง

### ข้อดี

- คืนค่า `true` เฉพาะเมื่ออินพุตเป็นอาร์เรย์ที่ไม่ว่างและทุกองค์ประกอบเป็นตัวเลข
- ล้มเหลวอย่างรวดเร็ว: หยุดตรวจทันทีที่พบองค์ประกอบที่ไม่ใช่ตัวเลข และคืนค่า `false`
- ช่วยตรวจสอบความถูกต้องของอินพุตที่ไม่ทราบชนิดได้อย่างปลอดภัยก่อนทำการคำนวณเชิงตัวเลข

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areNumerics(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่ต้องการตรวจสอบว่าองค์ประกอบเป็นตัวเลขหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // จริง
console.log(areNumerics(b)); // จริง
console.log(areNumerics(c)); // เท็จ
console.log(areNumerics(d)); // เท็จ
console.log(areNumerics(e)); // เท็จ

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areNumerics(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 6 February 2026 at 16:07:53 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>