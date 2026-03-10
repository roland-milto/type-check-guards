# areNullOrUndefined

## תיאור

בודק האם כל הרכיבים במערך הנתון הם `null` או `undefined`.

### מקרה שימוש

אמתו שרשימה של שדות אופציונליים אינה מכילה ערכים בפועל (רק `null`/`undefined`) לפני שמחליטים לדלג על עיבוד או להציג מצב
של „לא סופקו ערכים”.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areNullOrUndefined` כאשר אתם צריכים לוודא שמערך מכיל רק ערכים חסרים (`null`/`undefined`). שימו לב שהוא מחזיר
`false` עבור מערך ריק.

### יתרונות

- מחזיר `true` רק כאשר כל רכיב הוא `null` או `undefined`.
- מחזיר `false` עבור מערכים ריקים, וכך מסייע להבחין בין „אין נתונים” לבין „כל הערכים חסרים”.
- עובד עם `unknown[]`, מה שהופך אותו לבטוח לשימוש לפני צמצום טיפוסים.

## שימוש

### תחביר

פונקציה:

- `areNullOrUndefined(array)`

פרמטרים:

- `array`: המערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areNullOrUndefined(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:29:49 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>