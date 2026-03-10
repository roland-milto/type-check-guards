# isTrue

## תיאור

`isTrue` קובע האם ערך נתון שווה באופן מחמיר ל-`true`.

### מקרה שימוש

השתמשו ב-`isTrue` כדי לאמת דגלים, מתגי תכונות, או ערכי תצורה שבהם יש לקבל רק את הליטרל `true` וכל דבר אחר חייב להיות
מטופל כ-`false`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isTrue` כאשר צריך לקבל רק את הליטרל הבוליאני `true`, ולא רק ערכים "truthy".

### יתרונות

- מספק בדיקה מחמירה לליטרל הבוליאני `true` (ללא המרה).
- מסייע להבחין בין `true` לבין ערכים "truthy" כמו `1`, `"true"`, או `{}`.
- התנהגות פשוטה וצפויה המתאימה לשומרי טיפוסים (guards) ולצינורות ולידציה.

## שימוש

### תחביר

פונקציה:

- `isTrue(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      //‎ אמת
const b = isTrue(1);         //‎ שקר
const c = isTrue("true");   //‎ שקר

if (isTrue(a)) {
  //‎‎ a הוא true כאן
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isTrue(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:42:30 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>