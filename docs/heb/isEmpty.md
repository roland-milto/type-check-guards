# isEmpty

## תיאור

קובע האם ערך נתון הוא ריק, ומחזיר `true` עבור `null`, `undefined`, מחרוזות ריקות/מכילות רווחים בלבד, מערכים ריקים,
`Map`/`Set` ריקים, או אובייקטים ללא מאפיינים בני-מנייה משלהם.

### מקרה שימוש

השתמש ב-`isEmpty` כדי לאמת קלטים ולזהות ערכים חסרים/ריקים במגוון סוגי נתונים (למשל שדות טופס, payloads של API, אובייקטי
תצורה) שבהם `null`, `undefined`, מחרוזות שמכילות רווחים בלבד, אוספים ריקים ואובייקטים ללא מאפיינים צריכים להיחשב כריקים.

> **הערה למשתמשי TypeScript:**
>
> `isEmpty` הוא כלי עזר שמחזיר בוליאן (לא type predicate של TypeScript), ולכן הוא לא מצמצם טיפוסים בפני עצמו; השתמש בו
> לאימות/פיצול לוגיקה במקום לצמצום בזמן קומפילציה.

### יתרונות

- מתייחס ל-`null` ול-`undefined` כ-`true` בבדיקות ריקות.
- מחשיב מחרוזות שמכילות רק רווחים כריקות באמצעות `trim` לפני בדיקת האורך.
- תומך בסוגי מכולות נפוצים (מערכים, `Map`, `Set`) ובאובייקטים רגילים ללא מאפיינים בני-מנייה משלהם.
- נמנע מספירת מאפיינים בירושה באמצעות בדיקות `hasOwnProperty`.
- מחזיר תוצאת בוליאן פשוטה (`true`/`false`) המתאימה ל-guards ולאימות.

## שימוש

### תחביר

פונקציה:

- `isEmpty(value)`

פרמטרים:

- `value`: הערך שיש לבדוק אם הוא ריק.

### ייבוא מקומי של פונקציה

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isEmpty(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isEmpty](‎../_analysis/isEmpty.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 16:18:43 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>