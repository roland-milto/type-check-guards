# isPlainObject

## תיאור

בודק האם `value` נתון הוא אובייקט פשוט ומחזיר `true` אם כן, אחרת `false`.

### מקרה שימוש

אמת שקלט `unknown` (למשל JSON מפוענח, נתונים חיצוניים, או ארגומנטים של פונקציה) הוא אובייקט פשוט לפני קריאת מפתחות או
מיפוי שלו לאובייקט תצורה מטיפוס מוגדר.

> **הערה למשתמשי TypeScript:**
>
> `isPlainObject` שימושי לצמצום `unknown` לפני שמתייחסים אליו כאובייקט דמוי-record; הוא מחזיר `true` רק עבור ערכים שהתג
> הפנימי שלהם הוא `[object Object]`.

### יתרונות

- מספק בדיקה פשוטה ואמינה האם ערך הוא אובייקט פשוט (כלומר, `Object` / `{}`), ומחזיר `true` או `false`.
- מסייע להבחין בין אובייקטים פשוטים לבין מערכים, פונקציות, `null`, וסוגים אחרים שאינם אובייקט פשוט.
- שימושי כ-Type Guard ב-TypeScript כדי לצמצם ערכי `unknown` לפני גישה למאפייני אובייקט.

## שימוש

### תחביר

פונקציה:

- `isPlainObject(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא אובייקט פשוט.

### ייבוא מקומי של פונקציה

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ כאן input הוא אובייקט פשוט
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ נכון
console.log(isPlainObject([])); //‎ לא נכון
console.log(isPlainObject(null)); //‎ לא נכון
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isPlainObject(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 12:17:44 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>