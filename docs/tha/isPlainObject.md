# isPlainObject

## คำอธิบาย

ตรวจสอบว่า `value` ที่กำหนดเป็น plain object หรือไม่ และคืนค่า `true` หากใช่ มิฉะนั้นคืนค่า `false`

### กรณีการใช้งาน

ตรวจสอบว่าอินพุตแบบ `unknown` (เช่น JSON ที่พาร์สแล้ว ข้อมูลภายนอก หรืออาร์กิวเมนต์ของฟังก์ชัน) เป็น plain object
ก่อนอ่านคีย์หรือแมปมันไปเป็นอ็อบเจ็กต์คอนฟิกที่มีชนิดกำกับ

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> `isPlainObject` มีประโยชน์สำหรับการทำให้ค่า `unknown` แคบลงก่อนจะปฏิบัติต่อมันเหมือนอ็อบเจ็กต์ลักษณะ record;
> มันจะคืนค่า `true` เฉพาะกับค่าที่มี internal tag เป็น `[object Object]` เท่านั้น

### ข้อดี

- ให้การตรวจสอบที่เรียบง่ายและเชื่อถือได้ว่า ค่าหนึ่งเป็น plain object (เช่น `Object` / `{}`) หรือไม่ โดยคืนค่าเป็น
  `true` หรือ `false`
- ช่วยแยกแยะ plain object ออกจากอาร์เรย์ ฟังก์ชัน `null` และชนิดอื่น ๆ ที่ไม่ใช่ plain object
- มีประโยชน์ในฐานะ type guard ใน TypeScript เพื่อทำให้ค่า `unknown` แคบลงก่อนเข้าถึงพร็อพเพอร์ตีของอ็อบเจ็กต์

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `isPlainObject(value)`

พารามิเตอร์:

- `value`: ค่าที่ต้องการทดสอบว่าเป็น plain object หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // input เป็นอ็อบเจ็กต์ธรรมดาในที่นี้
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // จริง
console.log(isPlainObject([])); // เท็จ
console.log(isPlainObject(null)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.isPlainObject(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 6 February 2026 at 12:20:12 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>