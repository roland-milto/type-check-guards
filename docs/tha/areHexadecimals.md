# areHexadecimals

## คำอธิบาย

ตรวจสอบว่าองค์ประกอบทั้งหมดในอาร์เรย์เป็นสตริงเลขฐานสิบหกหรือไม่ โดยจะคืนค่า `true`
เฉพาะสำหรับอาร์เรย์ที่ไม่ว่างและทุกรายการถูกต้อง

### กรณีการใช้งาน

ใช้ `areHexadecimals` เพื่อตรวจสอบอินพุตของผู้ใช้หรือข้อมูลจากภายนอก (เช่น ID, เช็กซัม, โค้ดสีที่ไม่มีเครื่องหมาย '#'
นำหน้า) ก่อนทำการพาร์สเลขฐานสิบหกหรือประมวลผลเพิ่มเติม

> **หมายเหตุสำหรับผู้ใช้ TypeScript:**
>
> ใช้ `areHexadecimals` เพื่อตรวจสอบอินพุตที่ไม่ทราบชนิดก่อนทำการพาร์สหรือแปลงค่า (เช่น ก่อน `parseInt(value, 16)`
> หรือการแปลงเป็น BigInt)

### ข้อดี

- ตรวจสอบว่าองค์ประกอบทุกตัวเป็นสตริงเลขฐานสิบหก และจะคืนค่า `true` เฉพาะเมื่อทุกรายการตรงตามเงื่อนไขเท่านั้น
- ปฏิเสธอาร์เรย์ว่างตามการออกแบบ โดยคืนค่า `false` เมื่อไม่มีข้อมูลอินพุต
- ให้ผลลัพธ์แบบบูลีนที่เรียบง่าย (`true`/`false`) เหมาะสำหรับใช้เป็นการ์ดและการตรวจสอบแบบคืนค่าก่อน (early-return)

## การใช้งาน

### ไวยากรณ์

ฟังก์ชัน:

- `areHexadecimals(array)`

พารามิเตอร์:

- `array`: อาร์เรย์ที่จะตรวจสอบว่าองค์ประกอบเป็นสตริงเลขฐานสิบหกหรือไม่

### นำเข้าฟังก์ชันแบบโลคัล

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### นำเข้าอ็อบเจ็กต์แบบโกลบอล

หากต้องการนำเข้าฟังก์ชันเป็นเมธอดของอ็อบเจ็กต์แบบโกลบอล ให้ใช้:

```ts
import "@type-check/guards/register-global-object.mjs";
```

จากนั้นเมธอดต่อไปนี้จะพร้อมใช้งานแบบโกลบอล:

- `Type.areHexadecimals(array)`

## การวิเคราะห์ฟังก์ชัน

ที่นี่ได้บันทึกการวิเคราะห์แบบตารางของผลลัพธ์ที่เกิดขึ้นเมื่อใส่พารามิเตอร์ที่แตกต่างกันลงในฟังก์ชัน: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>ไฟล์นี้ถูกสร้างเมื่อ 31 January 2026 at 23:08:11 (UTC) โดยใช้ *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** โดย *
*[Roland Milto](https://roland-milto.de/)**.</small>