# getTypeOf

## คำอธิบาย

`getTypeOf` ส่งคืนป้ายกำกับชนิดข้อมูลที่ละเอียดและอ่านเข้าใจได้สำหรับค่าที่กำหนด
รวมถึงชนิดตัวเลขที่ปรับละเอียดและชนิดอ็อบเจ็กต์ที่เฉพาะเจาะจง

### กรณีการใช้งาน

ใช้ `getTypeOf` เพื่อทำให้การตรวจจับชนิดข้อมูลเป็นมาตรฐานในการตรวจสอบอินพุตและการวินิจฉัย (diagnostics)—เช่น ปฏิเสธ
`nan`, ยอมรับเฉพาะ ID ที่เป็น `integer`, จัดการสตริงตัวเลขอย่าง `decimal` ให้ต่างจาก `string` ธรรมดา
หรือบันทึกชนิดอ็อบเจ็กต์ที่แม่นยำ เช่น `date` และ `regexp`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ชนิดค่าที่ส่งคืนคือ `DataTypeAsString | string` ให้มองว่าเป็นป้ายกำกับเชิงพรรณนา;
> เมื่อต้องแตกแขนงเงื่อนไขให้เปรียบเทียบกับลิเทอรัลที่รู้จัก เช่น `integer`, `float`, `nan`, `array`, `null` และ
`undefined`

### ข้อดี

- ส่งคืนสตริงชนิดข้อมูลที่ละเอียดกว่า JavaScript `typeof` รวมถึงชนิดย่อยของตัวเลข เช่น `integer`, `float` และ `nan`
- แยกแยะ `null` และ `undefined` อย่างชัดเจนเป็น `null` และ `undefined`
- ตรวจจับรูปแบบสตริงตัวเลขที่พบบ่อย และรายงานเป็น `binary`, `octal`, `decimal` หรือ `hexadecimal` แทนที่จะเป็น `string`
  ธรรมดา
- ระบุอาร์เรย์เป็น `array` และใช้ `Object.prototype.toString` เพื่อให้ชื่อชนิดอ็อบเจ็กต์ที่เฉพาะเจาะจง (เช่น `date`,
  `regexp`, `map`, `set`)
- มีประโยชน์มากสำหรับการตรวจสอบความถูกต้อง (validation), การบันทึก (logging) และการดีบัก (debugging)
  ที่ต้องการป้ายกำกับชนิดข้อมูลที่สม่ำเสมอและอ่านเข้าใจได้

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `getTypeOf(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการใช้เพื่อระบุชนิดข้อมูล

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// ตัวอย่างการตรวจสอบ
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.getTypeOf(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 6 February 2026 at 13:15:14 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>