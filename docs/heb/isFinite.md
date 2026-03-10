# isFinite

## תיאור

קובע האם `value` נתון הוא `number` סופי.

### מקרה שימוש

השתמשו ב-`isFinite` כדי לאמת קלט לא ידוע (למשל מ-JSON, טפסים או APIs) לפני ביצוע חישובים מספריים, וכך להבטיח שהערך הוא
מספר אמיתי וסופי.

> **הערה למשתמשי TypeScript:**
>
> `isFinite` מחזיר `true` רק עבור מספרים סופיים; הוא מחזיר `false` עבור `NaN`, `Infinity`, וכל ערך שאינו מספר.

### יתרונות

- משתמש ב-`Number.isFinite` המובנה לבדיקת סופיות אמינה.
- מחזיר `true` רק עבור מספרים סופיים; מחזיר `false` עבור `NaN`, `Infinity` וקלטים שאינם מספר.
- פרדיקט פשוט וללא תופעות לוואי, מתאים לאימות וללוגיקת הגנה.

## שימוש

### תחביר

פונקציה:

- `isFinite(value)`

פרמטרים:

- `value`: הערך שיש לבדוק את סופיותו.

### ייבוא מקומי של פונקציה

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
//‎‎ finiteNumbers הוא: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  //‎‎ value הוא מספר סופי כאן
  const doubled = value * 2;
  console.log(doubled);
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isFinite(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isFinite](‎../_analysis/isFinite.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:30:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>