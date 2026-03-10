# areSets

## תיאור

בודק האם מערך נתון שאינו ריק מכיל רק מופעי `Set`, ומחזיר `true` אם כן ו-`false` אחרת.

### מקרה שימוש

אמתו שערך (למשל, מקלט משתמש, מפענוח JSON או מ-API-ים חיצוניים) הוא מערך לא ריק של אובייקטי `Set` לפני עיבוד כל set.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areSets` כדי לאמת קלט לא ידוע לפני איטרציה וקריאה ל-API-ים של `Set` (למשל, `.size`, `.has`, `.add`) על כל
> איבר.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא ריק וכל איבר הוא מופע של `Set`.
- מונע חיוביים שגויים עבור מערכים ריקים על־ידי החזרת `false` כאשר למערך אין איברים.
- שימושי כשומר בזמן ריצה לפני ביצוע פעולות ייחודיות ל-`Set` על כל איבר.

## שימוש

### תחביר

פונקציה:

- `areSets(array)`

פרמטרים:

- `array`: המערך שיש לבדוק עבור מופעי `Set`.

### ייבוא מקומי של פונקציה

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎‎ a הוא מערך של מופעי Set בזמן ריצה
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); //‎ שקר
console.log(areSets(c)); //‎ שקר
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areSets(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:13:37 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>