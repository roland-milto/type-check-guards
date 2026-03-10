# getTypeOf

## תיאור

`getTypeOf` מחזיר תווית טיפוס מפורטת וקריאה לבני אדם עבור ערך נתון, כולל טיפוסים מספריים מעודנים וסוגי אובייקטים
ספציפיים.

### מקרה שימוש

השתמש ב-`getTypeOf` כדי לאחד זיהוי טיפוסים באימות קלט ובדיאגנוסטיקה—למשל, כדי לדחות `nan`, לקבל רק מזהי `integer`,
להתייחס למחרוזות מספריות כמו `decimal` באופן שונה מ-`string` רגיל, או כדי לרשום סוגי אובייקטים מדויקים כמו `date` ו-
`regexp`.

> **הערה למשתמשי TypeScript:**
>
> טיפוס ההחזרה הוא `DataTypeAsString | string`. התייחס אליו כתווית תיאורית; השווה מול ליטרלים מוכרים כמו `integer`,
`float`, `nan`, `array`, `null` ו-`undefined` בעת הסתעפות.

### יתרונות

- מחזיר מחרוזת טיפוס מפורטת יותר מאשר `typeof` של JavaScript, כולל תתי-טיפוסים מספריים כמו `integer`, `float` ו-`nan`.
- מבדיל במפורש בין `null` ו-`undefined` כ-`null` ו-`undefined`.
- מזהה פורמטים נפוצים של מחרוזות מספריות ומדווח עליהן כ-`binary`, `octal`, `decimal` או `hexadecimal` במקום `string`
  רגיל.
- מזהה מערכים כ-`array` ומשתמש ב-`Object.prototype.toString` כדי לספק שמות טיפוס אובייקט ספציפיים (למשל, `date`,
  `regexp`, `map`, `set`).
- שימושי לאימות, רישום (logging) וניפוי שגיאות (debugging) כאשר נדרשות תוויות טיפוס עקביות וקריאות לבני אדם.

## שימוש

### תחביר

פונקציה:

- `getTypeOf(value)`

פרמטרים:

- `value`: הערך שעבורו יש לקבוע את טיפוס הנתונים.

### ייבוא מקומי של פונקציה

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

//‎‎ בדיקות לדוגמה
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.getTypeOf(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [getTypeOf](‎../_analysis/getTypeOf.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 13:06:44 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>