# isNumber

## תיאור

`isNumber` בודק האם ערך הוא מספר סופי שאינו `NaN`.

### מקרה שימוש

אמתו קלט מספרי ממקורות לא מהימנים (טפסים, פרמטרים בשאילתה, מטעני JSON) לפני חישובים, אחסון או בדיקות טווח, כדי להבטיח
שרק מספרים סופיים יעברו (`true`) וכל השאר יחזירו `false`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isNumber` כדי לאמת ערכי `unknown` לפני ביצוע פעולות אריתמטיות; הוא דוחה `NaN`, `Infinity` ו-`-Infinity`.

### יתרונות

- מחזיר `true` רק עבור מספרים אמיתיים ב-JavaScript (בדיקת טיפוס יחד עם דחיית `NaN` ואינסוף).
- מונע באגי ולידציה נפוצים שבהם `NaN`, `Infinity` או `-Infinity` עוברים בטעות כמספרים.
- עובד היטב כשומר בזמן ריצה עבור קלט לא ידוע (למשל JSON, קלט משתמש, APIs חיצוניים).
- פשוט, מהיר וללא תופעות לוואי.

## שימוש

### תחביר

פונקציה:

- `isNumber(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input הוא מספר סופי תקין
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isNumber(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:09:11 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>