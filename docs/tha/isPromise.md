# isPromise

## คำอธิบาย

ระบุว่าค่าที่กำหนดเป็น `Promise` หรือไม่

### กรณีการใช้งาน

ใช้ `isPromise` เพื่อตรวจสอบอินพุตที่ไม่ทราบชนิดก่อนจะปฏิบัติกับมันเป็น `Promise` เช่น เมื่อจัดการค่าที่ได้จากปลั๊กอิน,
dynamic imports หรือ API ที่กำหนดชนิดแบบหลวม ๆ

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> `isPromise` ตรวจสอบด้วย `instanceof Promise` ดังนั้นจึงคืนค่า `true` เฉพาะสำหรับอินสแตนซ์ `Promise` จริงเท่านั้น (
> ไม่ใช่ thenable ทั่วไป)

### ข้อดี

- ให้การตรวจสอบขณะรันไทม์แบบง่าย ๆ ว่าค่าเป็น `Promise` หรือไม่
- ช่วยป้องกันเส้นทางโค้ดที่ต้องการอินสแตนซ์ `Promise` จริง โดยคืนค่า `true` หรือ `false` อย่างคาดเดาได้
- หลีกเลี่ยงผลบวกลวงจากอ็อบเจ็กต์แบบ “thenable” (เช่น `{ then() {} }`) ด้วยการกำหนดให้ต้องเป็นอินสแตนซ์ `Promise`
  จริงเท่านั้น

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isPromise(value)`

พารามิเตอร์:

- `value`: ค่าที่จะตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // จริง
console.log(isPromise(b)); // เท็จ
console.log(isPromise(123)); // เท็จ
console.log(isPromise(null)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isPromise(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:54:37 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>