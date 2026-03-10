# arePlainObjects

## คำอธิบาย

ตรวจสอบว่าองค์ประกอบทั้งหมดของอาร์เรย์เป็นอ็อบเจ็กต์แบบ plain หรือไม่ โดยจะคืนค่า `true`
ก็ต่อเมื่อทุกองค์ประกอบผ่านเกณฑ์

### กรณีการใช้งาน

ตรวจสอบข้อมูลภายนอกหรือข้อมูลที่ไม่ได้กำหนดชนิด (เช่น JSON ที่แปลงแล้ว, payload จาก API, การส่งฟอร์ม)
เพื่อให้แน่ใจว่าคุณได้รับอาร์เรย์ที่ไม่ว่างและทุกรายการเป็นอ็อบเจ็กต์แบบ plain ก่อนทำการวนลูปและอ่านพร็อพเพอร์ตี

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `arePlainObjects` เพื่อยืนยันความถูกต้องของอินพุตที่ไม่ทราบชนิดก่อนนำไปใช้เป็น `Record<string, unknown>[]` (
> หรือโครงสร้างอ็อบเจ็กต์ที่เข้มงวดกว่า) ใน TypeScript

### ข้อดี

- รับประกันว่าองค์ประกอบทุกตัวในอาร์เรย์อินพุตเป็นอ็อบเจ็กต์แบบ plain โดยจะคืนค่า `true`
  ก็ต่อเมื่อทุกรายการตรงตามเงื่อนไข
- ปฏิเสธอินพุตที่ไม่ถูกต้องตั้งแต่เนิ่น ๆ (ไม่ใช่อาร์เรย์หรือเป็นอาร์เรย์ว่าง) โดยคืนค่า `false`
- ถือว่าอ็อบเจ็กต์ที่สร้างด้วย object literal และอ็อบเจ็กต์ที่สร้างด้วย `Object.create(null)` เป็นอ็อบเจ็กต์แบบ plain
  ที่ถูกต้องทั้งคู่

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `arePlainObjects(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบเป็นอ็อบเจ็กต์แบบ plain หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // จริง
const b = arePlainObjects([{}, Object.create(null)]); // จริง
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // เท็จ
const d = arePlainObjects([] as unknown[]); // เท็จ
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.arePlainObjects(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 16:56:15 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>