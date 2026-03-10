# areStrings

## คำอธิบาย

`areStrings` ตรวจสอบว่าอาร์เรย์ไม่ว่างและองค์ประกอบทั้งหมดเป็นสตริง โดยจะคืนค่า `true` เฉพาะในกรณีนั้นเท่านั้น

### กรณีการใช้งาน

ตรวจสอบข้อมูลจากภายนอกหรือข้อมูลที่ผู้ใช้ส่งมา (เช่น query params, JSON payloads, ฟิลด์ CSV)
เพื่อให้แน่ใจว่าคุณมีรายการสตริงที่ไม่ว่างก่อนนำไปประมวลผล

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areStrings` เพื่อตรวจสอบอาร์เรย์ที่ไม่ทราบชนิดก่อนนำไปใช้ตรรกะที่ใช้ได้เฉพาะกับสตริง; ฟังก์ชันนี้จะคืนค่า `false`
> สำหรับอาร์เรย์ว่าง

### ข้อดี

- รับประกันว่าแต่ละองค์ประกอบเป็นสตริงทั้งหมด และปฏิเสธอาร์เรย์ที่มีชนิดปะปนโดยคืนค่า `false`
- ปฏิเสธอาร์เรย์ว่าง ดังนั้น `true` จึงหมายถึงรายการสตริงที่ไม่ว่างเท่านั้น
- มีประโยชน์เป็นตัวตรวจสอบแบบรันไทม์อย่างรวดเร็วก่อนทำงานที่ใช้ได้เฉพาะกับสตริง (เช่น `trim`, `toLowerCase`)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areStrings(value)`

พารามิเตอร์:

- `value`: Expected type `string[]`.

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input เป็น string[] ที่ไม่ว่างเปล่าในขณะรันไทม์
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areStrings(value)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 30 January 2026 at 13:20:47 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>