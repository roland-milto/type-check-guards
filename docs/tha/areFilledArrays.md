# areFilledArrays

## คำอธิบาย

`areFilledArrays` ตรวจสอบว่าอาร์เรย์สองมิติไม่ว่าง และอาร์เรย์ย่อยทั้งหมดไม่ว่าง

### กรณีการใช้งาน

ใช้ `areFilledArrays` เพื่อตรวจสอบอินพุตแบบตารางหรือคล้ายเมทริกซ์ (เช่น แถว CSV ข้อมูลกริด ผลลัพธ์ที่จัดกลุ่ม)
เพื่อให้คุณสามารถสมมติได้อย่างปลอดภัยว่ามีอาร์เรย์ย่อยอย่างน้อยหนึ่งอัน และไม่มีอาร์เรย์ย่อยใดว่าง

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areFilledArrays` เมื่อคุณต้องการให้แน่ใจว่าอาร์เรย์ 2 มิติมีอย่างน้อยหนึ่งแถว และทุกแถวมีอย่างน้อยหนึ่งองค์ประกอบ
> ก่อนทำการวนลูปหรือเข้าถึงด้วยการอินเด็กซ์

### ข้อดี

- ตรวจสอบว่าอาร์เรย์ชั้นนอกไม่ว่าง และอาร์เรย์ชั้นในทุกอันก็ไม่ว่างด้วย โดยจะคืนค่า `true`
  ก็ต่อเมื่อเป็นไปตามทั้งสองเงื่อนไขเท่านั้น
- ใช้ได้กับชนิดขององค์ประกอบใดๆ ภายในอาร์เรย์ย่อย (เช่น ตัวเลข สตริง อ็อบเจ็กต์ อาร์เรย์ซ้อน)
  เพราะตรวจสอบเพียงสถานะว่าอาร์เรย์ “มีข้อมูล” หรือไม่ ไม่ได้ตรวจสอบเนื้อหาขององค์ประกอบ
- ให้ผลลัพธ์แบบบูลีนที่เรียบง่าย (`true`/`false`) เหมาะสำหรับใช้เป็นการ์ดก่อนประมวลผลข้อมูลแบบสองมิติ

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areFilledArrays(array)`

พารามิเตอร์:

- `array`: อาร์เรย์สองมิติที่ต้องการตรวจสอบ

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // จริง
console.log(areFilledArrays(b)); // จริง
console.log(areFilledArrays(c)); // จริง
console.log(areFilledArrays(d)); // เท็จ
console.log(areFilledArrays(e)); // เท็จ
console.log(areFilledArrays(f)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areFilledArrays(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 6 February 2026 at 11:59:26 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>