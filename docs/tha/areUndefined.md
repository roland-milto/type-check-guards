# areUndefined

## คำอธิบาย

`areUndefined` ตรวจสอบว่าองค์ประกอบทุกตัวในอาร์เรย์ที่ให้มาเป็น `undefined` หรือไม่

### กรณีการใช้งาน

ตรวจสอบว่ารายการผลลัพธ์แบบ optional ไม่มีค่าจริงใด ๆ (มีแต่ `undefined`) เช่น หลังจากทำการ map การค้นหา (lookup)
ที่รายการที่ไม่พบถูกแทนด้วย `undefined` และคุณต้องการยืนยันว่าการค้นหาทั้งหมดล้มเหลว

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areUndefined` เมื่อคุณต้องการยืนยันว่า `unknown[]` มีเฉพาะค่า `undefined` เท่านั้น; ฟังก์ชันจะคืนค่า `false`
> สำหรับอาร์เรย์ว่างและอินพุตที่ไม่ใช่อาร์เรย์/ไม่ถูกต้อง เนื่องจากมีการตรวจสอบ `isFilledArray` ภายใน

### ข้อดี

- คืนค่า `false` สำหรับค่าที่ไม่ใช่อาร์เรย์และอาร์เรย์ว่าง โดยกำหนดให้ต้องเป็นอาร์เรย์ที่มีข้อมูลผ่าน `isFilledArray`
- ทำให้มั่นใจว่าองค์ประกอบทุกตัวเป็น `undefined` ไม่ใช่แค่บางตัว ทำให้เจตนาชัดเจน
- มีประโยชน์ในฐานะเพรดิเคตแบบ guard เมื่อทำการตรวจสอบคอลเลกชันอินพุตที่ไม่ทราบแน่ชัด

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areUndefined(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบเป็น `undefined` หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // จริง
const r2 = areUndefined(b); // เท็จ
const r3 = areUndefined(c); // เท็จ

// หมายเหตุ: คืนค่าเป็นเท็จสำหรับอาร์เรย์ว่าง
const r4 = areUndefined([]); // เท็จ
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areUndefined(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 13:58:24 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>