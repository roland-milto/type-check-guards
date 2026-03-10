# isOfType

## คำอธิบาย

กำหนดว่า `value` ที่ให้มาตรงกับสตริงชนิดข้อมูลที่ระบุหรือไม่ โดยใช้ `typeof`
สำหรับชนิดข้อมูลพื้นฐานและใช้วิธีสำรองสำหรับชนิดข้อมูลที่ซับซ้อน

### กรณีการใช้งาน

ตรวจสอบและทำให้ค่า `unknown` แคบลง (เช่น คำตอบจาก API, อินพุตผู้ใช้, JSON ที่พาร์สแล้ว)
โดยเช็กว่าค่านั้นเป็นชนิดข้อมูลตามสตริงที่คาดหวังหรือไม่ ก่อนทำการดำเนินการที่ขึ้นกับชนิดข้อมูล

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isOfType` เพื่อแตกแขนงตามชนิดข้อมูลขณะรันไทม์เมื่อทำงานกับค่า `unknown`; ฟังก์ชันจะคืนค่า `true`/`false`
> และจัดการ `null` และ `undefined` แบบชัดเจน

### ข้อดี

- ตรวจสอบชนิดข้อมูลพื้นฐานด้วย `typeof` โดยตรงเพื่อความเร็วและความชัดเจน
- จัดการ `null` และ `undefined` ได้อย่างถูกต้อง ซึ่งการใช้ `typeof` เพียงอย่างเดียวไม่สามารถแยกแยะได้ตามที่ต้องการ
- รองรับสตริงชนิดข้อมูลที่ซับซ้อนหรือกำหนดเองผ่านการเปรียบเทียบแบบสำรองโดยใช้ `getTypeOf`
- คืนค่าผลลัพธ์เป็นบูลีนแบบง่าย (`true`/`false`) เหมาะสำหรับการทำ guard และการแตกแขนงเงื่อนไข

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isOfType(value, type)`

พารามิเตอร์:

- `value`: ค่าที่จะทดสอบเทียบกับ `type`
- `type`: สตริงที่แทนชนิดข้อมูลซึ่งต้องการตรวจสอบเทียบด้วย

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  // ที่นี่ input เป็นตัวเลข
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  // ที่นี่ input เป็นสตริง
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isOfType(value, type)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isOfType](../_analysis/isOfType.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 17:06:54 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>