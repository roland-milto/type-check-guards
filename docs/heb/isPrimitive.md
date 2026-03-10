# isPrimitive

## תיאור

`isPrimitive` קובע האם ערך נתון הוא פרימיטיב (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`, `symbol`).

### מקרה שימוש

אימות קלטים בזמן ריצה (למשל, שדות מטען של API, ערכי תצורה או נתונים שסופקו על-ידי משתמש) כדי לוודא שערך הוא פרימיטיב
לפני סריאליזציה, רישום לוגים או החלת פעולות שמיועדות לפרימיטיבים בלבד.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isPrimitive` כדי להגן על קלטים מסוג `unknown` לפני שמתייחסים אליהם כאובייקטים או כפונקציות; הוא מחזיר `true`
> עבור פרימיטיבים ו-`false` עבור אובייקטים ופונקציות.

### יתרונות

- בדיקה מהירה וללא הקצאות האם ערך הוא פרימיטיב ב-JavaScript.
- מתייחס נכון ל-`null` כאל פרימיטיב (למרות ש-`typeof null` הוא `"object"`).
- מסייע לצמצם ערכי `unknown` לפני ביצוע פעולות שמיועדות לאובייקטים בלבד.

## שימוש

### תחביר

פונקציה:

- `isPrimitive(value)`

פרמטרים:

- `value`: הערך שיש לבדוק אם הוא מסוג פרימיטיבי.

### ייבוא מקומי של פונקציה

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isPrimitive(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 23:56:19 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>