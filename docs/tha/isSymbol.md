# isSymbol

## คำอธิบาย

`isSymbol` ใช้กำหนดว่าค่าที่กำหนดเป็นชนิด `symbol` หรือไม่ โดยคืนค่า `true` สำหรับสัญลักษณ์ และ `false` ในกรณีอื่น

### กรณีการใช้งาน

ตรวจสอบว่าค่า `unknown` เป็น `symbol` ก่อนนำไปใช้เป็นตัวระบุที่ไม่ซ้ำ คีย์ของรีจิสทรี
หรือคีย์พร็อพเพอร์ตีแบบคำนวณในอ็อบเจ็กต์และแมป

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isSymbol` เพื่อจำกัด `unknown` ให้เป็น `symbol` ก่อนเรียกใช้ฟังก์ชันที่เกี่ยวข้องกับสัญลักษณ์
> หรือก่อนใช้เป็นคีย์พร็อพเพอร์ตีแบบคำนวณ

### ข้อดี

- ให้การตรวจสอบขณะรันไทม์ที่เรียบง่ายและเชื่อถือได้สำหรับชนิดปฐมภูมิ `symbol` ของ JavaScript
- ช่วยจำกัดค่า `unknown` ให้แคบลงก่อนใช้ API ที่เฉพาะกับสัญลักษณ์ (symbol) หรือก่อนเก็บไว้เป็นคีย์
- หลีกเลี่ยงผลบวกลวงด้วยการใช้ `typeof` ซึ่งเป็นวิธีมาตรฐานในการตรวจจับค่า `symbol`

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isSymbol(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input เป็นสัญลักษณ์ที่นี่
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isSymbol(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:29:03 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>