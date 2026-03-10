# areSymbols

## תיאור

בודק האם קלט הוא מערך מלא שאיבריו כולם סימבולים, ומחזיר `true` או `false`.

### מקרה שימוש

אמתו ששדה תצורה (למשל, רשימה של מפתחות ייחודיים המיוצגים כסימבולים) הוא מערך לא ריק שמכיל רק סימבולים לפני שימוש בו
ב-API-ים שדורשים `symbol[]`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areSymbols` כדי לאמת קלט לא ידוע לפני שמתייחסים אליו כ-`symbol[]`; היא מחזירה `false` עבור ערכים שאינם
> מערכים ועבור מערכים ריקים.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא ריק וכל איבר הוא סימבול.
- מונע חיוביים שגויים על־ידי דחיית ערכים שאינם מערכים ומערכים ריקים באמצעות בדיקת מערך-מלא פנימית.
- שימושי כשומר טיפוס בזמן ריצה לאימות רשימות שמכילות רק סימבולים לפני עיבוד נוסף.

## שימוש

### תחביר

פונקציה:

- `areSymbols(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם איבריו הם סימבולים.

### ייבוא מקומי של פונקציה

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎‎ a הוא מערך שמכיל רק סמלים בזמן ריצה
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areSymbols(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:21:51 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>