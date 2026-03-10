# isBigInt

## คำอธิบาย

`isBigInt` ตรวจสอบว่าค่าที่กำหนดเป็นชนิด `bigint` หรือไม่ โดยคืนค่า `true` สำหรับ BigInt แบบ primitive และคืนค่า `false`
ในกรณีอื่น

### กรณีการใช้งาน

ตรวจสอบความถูกต้องและทำให้ค่าแคบลงจากแหล่งที่ไม่มีการกำหนดชนิด (เช่น การพาร์ส JSON, อินพุตผู้ใช้, API ภายนอก)
ก่อนทำการคำนวณที่เฉพาะกับ BigInt หรือจัดเก็บลงในฟิลด์ที่รองรับเฉพาะ BigInt

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isBigInt` เพื่อทำให้ `unknown` แคบลงเป็น `bigint` ก่อนทำเลขคณิตของ BigInt (เช่น `+`, `*`)
> ซึ่งต้องใช้ออเปอแรนด์เป็น BigInt

### ข้อดี

- ให้การตรวจสอบขณะรันไทม์ที่เรียบง่ายและเชื่อถือได้สำหรับชนิดข้อมูลพื้นฐาน `bigint`
- ช่วยทำให้ค่า `unknown` แคบลงก่อนทำการดำเนินการที่ใช้ได้เฉพาะกับ BigInt เท่านั้น
- หลีกเลี่ยงผลบวกลวง: ตัวเลขปกติ สตริง และชนิดอื่น ๆ จะคืนค่า `false`

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isBigInt(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // จริง
console.log(isBigInt(10));  // เท็จ
console.log(isBigInt("10")); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isBigInt(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 23:33:35 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>