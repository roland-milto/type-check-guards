# isPrimitive

## คำอธิบาย

`isPrimitive` ใช้กำหนดว่าค่าที่กำหนดเป็น primitive หรือไม่ (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### กรณีการใช้งาน

ตรวจสอบความถูกต้องของอินพุตขณะรันไทม์ (เช่น ฟิลด์ใน payload ของ API, ค่าคอนฟิก, หรือข้อมูลที่ผู้ใช้ให้มา)
เพื่อให้แน่ใจว่าค่าเป็น primitive ก่อนทำการ serialize, บันทึก log, หรือใช้การดำเนินการที่ใช้ได้เฉพาะกับ primitive

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `isPrimitive` เพื่อการ์ดอินพุต `unknown` ก่อนจะปฏิบัติต่อมันเป็นอ็อบเจ็กต์หรือฟังก์ชัน โดยมันจะคืนค่า `true`
> สำหรับ primitive และ `false` สำหรับอ็อบเจ็กต์และฟังก์ชัน

### ข้อดี

- ตรวจสอบได้อย่างรวดเร็วและไม่ต้องจัดสรรหน่วยความจำว่า ค่าหนึ่งเป็น primitive ของ JavaScript หรือไม่
- จัดการ `null` ได้อย่างถูกต้องว่าเป็น primitive (แม้ว่า `typeof null` จะเป็น `"object"`)
- ช่วยทำให้ค่า `unknown` แคบลงก่อนทำการดำเนินการที่ใช้ได้เฉพาะกับอ็อบเจ็กต์

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isPrimitive(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการตรวจสอบว่าเป็นชนิด primitive หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isPrimitive(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:58:06 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>