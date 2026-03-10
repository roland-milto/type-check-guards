# areFloats

## คำอธิบาย

`areFloats` ตรวจสอบว่าอาร์เรย์ที่กำหนดมีข้อมูลและทุกองค์ประกอบเป็น float หรือไม่

### กรณีการใช้งาน

ใช้ `areFloats` เมื่อคุณได้รับ `unknown[]` (เช่น จาก JSON, พารามิเตอร์คิวรี หรือ API ภายนอก)
และคุณต้องแน่ใจว่ามันเป็นอาร์เรย์ที่มีข้อมูลซึ่งทุกรายการเป็น float ก่อนรันลอจิกเชิงตัวเลข เช่น การหาค่าเฉลี่ย
การอินเตอร์โพเลชัน หรือการคำนวณทางสถิติ

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areFloats` เพื่อการ์ด `unknown[]` ก่อนจะปฏิบัติต่อมันเป็น `number[]` ที่มีเฉพาะ float; ฟังก์ชันจะคืนค่า `false`
> สำหรับอาร์เรย์ว่างและสำหรับองค์ประกอบใด ๆ ที่ไม่ใช่ float

### ข้อดี

- คืนค่า `true` เฉพาะเมื่ออินพุตเป็นอาร์เรย์ที่ไม่ว่างและทุกองค์ประกอบเป็นเลขทศนิยม (float) เท่านั้น
- ล้มเหลวอย่างรวดเร็ว: คืนค่า `false` ทันทีที่พบองค์ประกอบที่ไม่ใช่ float
- ช่วยตรวจสอบความถูกต้องของอินพุตที่ไม่ทราบชนิดก่อนทำการคำนวณที่เฉพาะเจาะจงกับ float

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areFloats(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่ต้องการตรวจสอบว่าองค์ประกอบเป็น float หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // จริง
console.log(areFloats(b)); // เท็จ
console.log(areFloats(c)); // เท็จ

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areFloats(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:00:03 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>