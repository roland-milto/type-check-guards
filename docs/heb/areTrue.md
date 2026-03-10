# areTrue

## תיאור

בודק האם מערך שאינו ריק מכיל רק ערכי בוליאן `true`.

### מקרה שימוש

השתמשו ב-`areTrue` כדי לוודא שקבוצת תנאי־קדם או דגלי תכונה כולם מופעלים (כל הערכים הם `true`) לפני שממשיכים, תוך
התייחסות לקלטים ריקים או פגומים כאל לא מסופקים (`false`).

> **הערה למשתמשי TypeScript:**
>
> `areTrue` מחזיר `false` עבור מערך ריק ועבור מערכים שמכילים כל ערך שאינו בדיוק `true`.

### יתרונות

- מחזיר `true` רק כאשר כל רכיב הוא בדיוק `true` והמערך אינו ריק.
- נכשל מהר: מחזיר `false` ברגע שנמצא ערך שאינו `true`.
- דוחה קלטים לא תקינים (שאינם מערכים או מערכים ריקים) על־ידי החזרת `false`.

## שימוש

### תחביר

פונקציה:

- `areTrue(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם כל הערכים בו הם `true`.

### ייבוא מקומי של פונקציה

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areTrue(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areTrue](‎../_analysis/areTrue.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:51:20 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>