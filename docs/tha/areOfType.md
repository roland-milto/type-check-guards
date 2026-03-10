# areOfType

## คำอธิบาย

ตรวจสอบว่าองค์ประกอบทั้งหมดใน `array` ที่กำหนดเป็นชนิด `type` ที่ระบุหรือไม่

### กรณีการใช้งาน

ใช้ `areOfType` เพื่อยืนยันความถูกต้องของอินพุตที่ไม่ทราบชนิด (เช่น JSON ที่แปลงแล้ว, payload จาก API, อินพุตผู้ใช้)
ก่อนทำการดำเนินการที่ขึ้นกับชนิดกับทุกองค์ประกอบของอาร์เรย์

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> เนื่องจาก `areOfType` เป็น type guard, TypeScript จะทำให้อาร์เรย์แคบลงภายในบล็อก `if (areOfType(...)) {}` ให้เป็น
`Array<DataTypeOf<T>>`

### ข้อดี

- มี TypeScript type guard: เมื่อคืนค่าเป็น `true` อินพุตจะถูกทำให้แคบลงเป็น `Array<DataTypeOf<T>>`
- ตรวจสอบทุกองค์ประกอบกับชนิดรันไทม์ที่ร้องขอ ป้องกันไม่ให้อาร์เรย์ที่มีชนิดปะปนผ่านการตรวจสอบ
- ล้มเหลวอย่างรวดเร็ว: คืนค่า `false` ทันทีที่พบองค์ประกอบที่ไม่ตรงกัน
- ปฏิเสธค่าที่ไม่ใช่อาร์เรย์และอาร์เรย์ว่างตามการออกแบบ (ขึ้นอยู่กับ `isFilledArray`)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areOfType(array, type)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบ
- `type`: ชนิดที่จะใช้ตรวจสอบกับแต่ละองค์ประกอบในอาร์เรย์

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // ตอนนี้ values เป็น number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areOfType(array, type)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 17:11:43 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>