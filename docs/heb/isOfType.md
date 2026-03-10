# isOfType

## תיאור

קובע האם `value` נתון תואם למחרוזת טיפוס מסוימת, תוך שימוש ב-`typeof` עבור פרימיטיביים ובמנגנון גיבוי עבור טיפוסים
מורכבים.

### מקרה שימוש

אמתו וצמצמו קלטים מסוג `unknown` (למשל תגובות API, קלט משתמש, JSON מפוענח) באמצעות בדיקה האם ערך הוא מטיפוס מחרוזת צפוי
לפני ביצוע פעולות תלויות-טיפוס.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isOfType` כדי להסתעף לפי טיפוסים בזמן ריצה בעת עבודה עם ערכי `unknown`; הפונקציה מחזירה `true`/`false`
> ומתייחסת במפורש ל-`null` ול-`undefined`.

### יתרונות

- בודק טיפוסים פרימיטיביים באמצעות `typeof` ישיר לטובת מהירות ובהירות.
- מטפל נכון ב-`null` וב-`undefined`, ש-`typeof` לבדו אינו יכול להבחין ביניהם כמתוכנן.
- תומך במחרוזות טיפוס מורכבות או מותאמות אישית באמצעות השוואת גיבוי בעזרת `getTypeOf`.
- מחזיר תוצאת בוליאן פשוטה (`true`/`false`) המתאימה ל-guards ולהסתעפות.

## שימוש

### תחביר

פונקציה:

- `isOfType(value, type)`

פרמטרים:

- `value`: הערך שיש לבדוק מול ה-`type`.
- `type`: הייצוג כמחרוזת של הטיפוס שיש לבדוק מולו.

### ייבוא מקומי של פונקציה

```ts
import { isOfType } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? 123 : "hello";

if (isOfType(input, "number")) {
  //‎‎ כאן input הוא מספר
  const doubled = input * 2;
  console.log(doubled);
} else if (isOfType(input, "string")) {
  //‎‎ כאן input הוא מחרוזת
  console.log(input.toUpperCase());
}

console.log(isOfType(null, "null"));
console.log(isOfType(undefined, "undefined"));

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isOfType(value, type)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isOfType](‎../_analysis/isOfType.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:59:54 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>