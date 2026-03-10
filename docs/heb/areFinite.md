# areFinite

## תיאור

`areFinite` בודקת האם ערך הוא מערך לא ריק שאיבריו כולם מספרים סופיים, ומחזירה `true` אם כן ו-`false` אחרת.

### מקרה שימוש

אמתו מערכי קלט מספריים (למשל, סדרות לגרפים, רשימות קואורדינטות, דגימות מדידה) לפני ביצוע חישובים, כדי להבטיח שהתוצאה
תהיה `true` רק כאשר כל הערכים הם מספרים סופיים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areFinite` כאשר צריך לוודא שמערך אינו ריק ומכיל רק מספרים סופיים; היא מחזירה `false` עבור מערכים ריקים ועבור
> מערכים המכילים `NaN` או אינסופים.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא ריק וכל איבר הוא מספר סופי.
- דוחה `Infinity`, `-Infinity` ו-`NaN` באמצעות הסתמכות על בדיקות `isFinite` עבור כל איבר.
- מספק תוצאת בוליאן פשוטה (`true`/`false`) המתאימה לשומרי טיפוסים (guards) ולזרימות אימות.

## שימוש

### תחביר

פונקציה:

- `areFinite(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם כל איבריו סופיים.

### ייבוא מקומי של פונקציה

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); //‎ true
console.log(areFinite(b)); //‎ false
console.log(areFinite(c)); //‎ false

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); //‎ 60
console.log(sumIfFinite([10, NaN, 30])); //‎ null
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areFinite(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areFinite](‎../_analysis/areFinite.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:34:55 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>