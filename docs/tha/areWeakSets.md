# areWeakSets

## คำอธิบาย

ตรวจสอบว่าอินพุตเป็นอาร์เรย์ที่ไม่ว่างและทุกองค์ประกอบเป็น `WeakSet` หรือไม่ โดยจะคืนค่า `true` เฉพาะในกรณีนั้นเท่านั้น

### กรณีการใช้งาน

ตรวจสอบอินพุตขณะรันไทม์ (เช่น จาก API, คอนฟิกูเรชัน หรือข้อมูลที่ผู้ใช้ให้มา) เพื่อให้แน่ใจว่าคุณมีรายการอินสแตนซ์
`WeakSet` ที่ไม่ว่างก่อนดำเนินการตรรกะที่ขึ้นอยู่กับพฤติกรรมของ `WeakSet`

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areWeakSets` เพื่อตรวจสอบอินพุตที่ไม่ทราบชนิดก่อนจะปฏิบัติกับมันเป็น `WeakSet[]` โดยมันจะคืนค่า `false`
> สำหรับอาร์เรย์ว่างและสิ่งที่ไม่ใช่อาร์เรย์

### ข้อดี

- รับประกันว่าองค์ประกอบทุกตัวในอาร์เรย์อินพุตเป็น `WeakSet`
- คืนค่า `false` สำหรับอาร์เรย์ว่าง เพื่อป้องกันผลลัพธ์ “ถูกต้องทั้งหมด” โดยไม่ตั้งใจเมื่อข้อมูลหายไป
- ล้มเหลวอย่างปลอดภัยโดยคืนค่า `false` เมื่ออินพุตไม่ใช่อาร์เรย์ที่มีข้อมูล (รวมถึง `null`)
- มีประโยชน์เป็นตัวป้องกันก่อนทำงานที่ต้องใช้อินสแตนซ์ `WeakSet`

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areWeakSets(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าเป็นอ็อบเจ็กต์ `WeakSet` หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a เป็นอาร์เรย์ที่ไม่ว่างซึ่งประกอบด้วยอินสแตนซ์ของ WeakSet
}

console.log(areWeakSets(a)); // จริง
console.log(areWeakSets(b)); // เท็จ
console.log(areWeakSets(c)); // เท็จ
console.log(areWeakSets(null as unknown)); // เท็จ

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areWeakSets(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 14:11:19 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>