# arePromises

## คำอธิบาย

`arePromises` ใช้กำหนดว่าองค์ประกอบทั้งหมดในอาร์เรย์เป็นอินสแตนซ์ของ `Promise` หรือไม่

### กรณีการใช้งาน

ตรวจสอบว่ารายการที่สร้างแบบไดนามิกหรือได้รับมาจากภายนอกมีแต่ promise เท่านั้นก่อนนำมารวมผล (เช่น ด้วย `Promise.all`)

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `arePromises` เพื่อตรวจสอบ `unknown[]` ก่อนเรียก `Promise.all` หรือการดำเนินการอื่นที่ใช้ได้เฉพาะกับ promise;
> โดยจะคืนค่า `false` สำหรับอาร์เรย์ว่าง

### ข้อดี

- รับประกันว่าแต่ละองค์ประกอบเป็น `Promise` ก่อนที่คุณจะดำเนินการกับตรรกะที่เฉพาะเจาะจงสำหรับ promise
- คืนค่า `false` สำหรับอาร์เรย์ที่ไม่มีการเติมค่า ช่วยป้องกันผลลัพธ์ที่กำกวมสำหรับอินพุตที่ว่างเปล่า
- มีประโยชน์ในฐานะตัวป้องกันขณะรันไทม์เมื่อทำงานกับ `unknown[]` จากแหล่งภายนอก

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `arePromises(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่ต้องการตรวจสอบว่าเป็นอินสแตนซ์ของ Promise หรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values เป็นอาร์เรย์ของอินสแตนซ์ Promise ในขณะรันไทม์
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.arePromises(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 23:50:16 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>