# isWeakMap

## คำอธิบาย

กำหนดว่าค่า `value` ที่กำหนดเป็นอินสแตนซ์ของ `WeakMap` หรือไม่

### กรณีการใช้งาน

ใช้ `isWeakMap` เมื่อคุณรับค่าแบบ `unknown` (เช่น จาก public API, ระบบปลั๊กอิน หรือคอนฟิกแบบไดนามิก)
และต้องตรวจสอบว่าเป็น `WeakMap` ก่อนใช้งานพฤติกรรมที่เฉพาะเจาะจงของ `WeakMap`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> `isWeakMap` ทำการตรวจสอบด้วย `instanceof WeakMap`; เป็นการ์ดขณะรันไทม์ที่คืนค่า `true` เฉพาะเมื่อเป็นอินสแตนซ์
`WeakMap` จริงเท่านั้น

### ข้อดี

- ตรวจสอบขณะรันไทม์ได้อย่างง่ายว่าค่าเป็น `WeakMap` หรือไม่
- ช่วยป้องกันการใช้งาน API ที่ต้องการ `WeakMap` ผิดพลาด โดยคืนค่า `true`/`false` แทนการโยนข้อผิดพลาด
- ทำงานได้กับอินพุตชนิด `unknown` ทำให้สะดวกที่ขอบเขตของโมดูล (เช่น การพาร์สข้อมูล, ข้อมูลภายนอก
  หรือโค้ดที่ไม่มีการกำหนดชนิด)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isWeakMap(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  // a เป็น WeakMap ในขณะรันไทม์
}

console.log(isWeakMap(a)); // true
console.log(isWeakMap(b)); // false
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isWeakMap(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isWeakMap](../_analysis/isWeakMap.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 13:27:22 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>