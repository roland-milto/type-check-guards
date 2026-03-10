# areOctals

## תיאור

`areOctals` קובע האם הערך שסופק הוא מערך לא ריק של מחרוזות אוקטליות תקינות.

### מקרה שימוש

השתמשו ב-`areOctals` בעת אימות קלט משתמש, ערכי תצורה או מטעני API שחייבים להכיל ליטרלים אוקטליים (למשל מצבי הרשאות קבצים
כמו `0o755`), וכאשר רוצים לדחות מערכים ריקים או כל רשומה לא תקינה על ידי החזרת `false`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areOctals` כדי לוודא שיש לכם `unknown[]` לא ריק שבו כל רשומה היא מחרוזת אוקטלית תקינה לפני המרה (למשל
> באמצעות `Number(...)` או ניתוח מותאם אישית).

### יתרונות

- מאמת שערך הוא מערך לא ריק שבו כל איבר הוא מחרוזת אוקטלית, ומחזיר `true` רק כאשר כל הפריטים עוברים.
- נכשל מהר: מחזיר `false` מיד כשנמצא איבר שאינו אוקטלי.
- שימושי כשומר (guard) לפני ניתוח או המרה של מחרוזות אוקטליות כדי להימנע משגיאות בזמן ריצה ומטיפול לא עקבי בקלט.

## שימוש

### תחביר

פונקציה:

- `areOctals(array)`

פרמטרים:

- `array`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  //‎‎ value הוא מערך לא ריק של מחרוזות אוקטליות
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areOctals(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areOctals](‎../_analysis/areOctals.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 14:45:36 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>