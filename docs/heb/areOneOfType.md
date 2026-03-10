# areOneOfType

## תיאור

`areOneOfType` בודקת האם כל הרכיבים במערך שאינו ריק הם מאחד מסוגי זמן־הריצה שצוינו.

### מקרה שימוש

אימות נתונים נכנסים (למשל, JSON מפוענח) כאשר שדה חייב להיות מערך לא ריק שהפריטים בו מוגבלים לקבוצה ידועה של סוגים
פרימיטיביים; החזירו `false` כאשר המערך ריק או מכיל סוג שאינו מותר.

> **הערה למשתמשי TypeScript:**
>
> פונקציה זו מחזירה ערך בוליאני ואינה מצמצמת את סוגי רכיבי המערך בזמן קומפילציה; השתמשו בה כשלב אימות בזמן־ריצה לפני
> עיבוד נוסף.

### יתרונות

- מבטיח שכל רכיב במערך תואם לפחות סוג זמן־ריצה מותר אחד, ומחזיר `true` רק כאשר כל המערך עובר.
- דוחה קלטים לא תקינים מוקדם: מחזיר `false` כאשר `array` או `types` ריקים או שאינם מערך מלא.
- שימושי לאימות אוספים מעורבי־סוגים (למשל, מספרים ומחרוזות) בקריאה אחת ל־`areOneOfType`.

## שימוש

### תחביר

פונקציה:

- `areOneOfType(array, types)`

פרמטרים:

- `array`: מערך של רכיבים שיש לאמת מול הסוגים שסופקו.
- `types`: מערך של מחרוזות המייצגות את סוגי הנתונים שיש לבדוק מולם.

### ייבוא מקומי של פונקציה

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areOneOfType(array, types)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areOneOfType](‎../_analysis/areOneOfType.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:37:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>