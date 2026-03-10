# areWeakSets

## תיאור

בודק האם קלט הוא מערך לא־ריק שבו כל רכיב הוא `WeakSet`, ומחזיר `true` רק במקרה זה.

### מקרה שימוש

אימות קלט בזמן ריצה (למשל מ-API, מתצורה או מנתונים שסופקו על־ידי משתמש) כדי לוודא שיש לכם רשימה לא־ריקה של מופעי
`WeakSet` לפני שממשיכים ללוגיקה שתלויה בהתנהגות של `WeakSet`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areWeakSets` כדי לאמת קלט לא ידוע לפני שמתייחסים אליו כאל `WeakSet[]`. היא מחזירה `false` עבור מערכים ריקים
> ועבור קלט שאינו מערך.

### יתרונות

- מבטיח שכל רכיב במערך הקלט הוא `WeakSet`.
- מחזיר `false` עבור מערכים ריקים, ובכך מונע תוצאות “הכול תקין” בשוגג כאשר חסרים נתונים.
- נכשל בצורה בטוחה על־ידי החזרת `false` כאשר הקלט אינו מערך מלא (כולל `null`).
- שימושי כשומר (guard) לפני ביצוע פעולות שדורשות מופעי `WeakSet`.

## שימוש

### תחביר

פונקציה:

- `areWeakSets(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל אובייקטים מסוג `WeakSet`.

### ייבוא מקומי של פונקציה

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  //‎‎ a הוא מערך לא ריק של מופעי WeakSet
}

console.log(areWeakSets(a)); //‎ true
console.log(areWeakSets(b)); //‎ false
console.log(areWeakSets(c)); //‎ false
console.log(areWeakSets(null as unknown)); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areWeakSets(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areWeakSets](‎../_analysis/areWeakSets.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:08:47 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>