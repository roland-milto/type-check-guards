# isBoolean

## คำอธิบาย

กำหนดว่าค่าที่กำหนดเป็น `boolean` หรือไม่.

### กรณีการใช้งาน

ตรวจสอบข้อมูลภายนอกหรือข้อมูลที่ไม่ได้ระบุชนิด (เช่น ตัวแปรสภาพแวดล้อม, เพย์โหลด JSON, พารามิเตอร์คิวรี)
เพื่อให้แน่ใจว่าค่าเป็น `boolean` ก่อนนำไปใช้ในตรรกะแบบมีเงื่อนไข.

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isBoolean` เพื่อทำให้ `unknown` แคบลงเป็น `boolean` ก่อนนำไปใช้กับการดำเนินการของบูลีน.

### ข้อดี

- ตรวจสอบขณะรันไทม์ได้อย่างง่ายและรวดเร็วด้วย `typeof`.
- ช่วยตรวจสอบความถูกต้องของอินพุตที่ไม่ทราบชนิดก่อนใช้ตรรกะที่เฉพาะกับบูลีน.
- คืนค่าผลลัพธ์ `boolean` ที่คาดเดาได้ (`true`/`false`).

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isBoolean(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบ.

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input เป็นบูลีนที่นี่
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isBoolean(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:38:13 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>