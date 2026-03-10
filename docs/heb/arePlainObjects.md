# arePlainObjects

## תיאור

בודק האם כל רכיבי המערך הם אובייקטים פשוטים, ומחזיר `true` רק אם כל רכיב עומד בתנאי.

### מקרה שימוש

אמתו נתונים חיצוניים או ללא טיפוס (למשל JSON מפוענח, מטעני API, שליחות טפסים) כדי לוודא שקיבלתם מערך לא ריק שבו כל רשומה
היא אובייקט פשוט לפני איטרציה וקריאת מאפיינים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`arePlainObjects` כדי לאמת קלט לא ידוע לפני שמתייחסים אליו כאל `Record<string, unknown>[]` (או צורת אובייקט
> מחמירה יותר) ב-TypeScript.

### יתרונות

- מבטיח שכל רכיב במערך הקלט הוא אובייקט פשוט, ומחזיר `true` רק כאשר כל הפריטים תואמים.
- דוחה קלטים לא תקינים מוקדם (שאינם מערכים או מערכים ריקים) על ידי החזרת `false`.
- מתייחס גם לאובייקטים מסוג ליטרל אובייקט וגם לאובייקטים מסוג `Object.create(null)` כאובייקטים פשוטים תקינים.

## שימוש

### תחביר

פונקציה:

- `arePlainObjects(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל רכיבי אובייקט פשוט.

### ייבוא מקומי של פונקציה

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); //‎ true
const b = arePlainObjects([{}, Object.create(null)]); //‎ true
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); //‎ false
const d = arePlainObjects([] as unknown[]); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.arePlainObjects(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [arePlainObjects](‎../_analysis/arePlainObjects.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:25:25 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>