# areJson

## תיאור

בודקת האם כל רכיבי המערך הם מחרוזות JSON, ומחזירה `true` רק אם המערך ממולא וכל פריט הוא JSON תקף; אחרת מחזירה `false`.

### מקרה שימוש

אמתו נתונים נכנסים (למשל, מפרמטרים של שאילתה, משתני סביבה או APIs חיצוניים) כאשר אתם מצפים למערך של מחרוזות מקודדות
ב-JSON ורוצים לדחות מערכים ריקים או כל רשומה שאינה JSON.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areJson` כאשר אתם צריכים לאמת ש-`unknown[]` מכיל רק מחרוזות JSON לפני פענוח שלהן (למשל, עם `JSON.parse`).

### יתרונות

- מחזירה `true` רק כאשר כל רכיב הוא מחרוזת JSON תקפה; אחרת מחזירה `false`.
- נכשלת מהר: מפסיקה לבדוק ברגע שנמצא רכיב שאינו JSON.
- דוחה מערכים ריקים לפי תכנון, ומחזירה `false` עבור קלט שאינו ממולא.

## שימוש

### תחביר

פונקציה:

- `areJson(array)`

פרמטרים:

- `array`: המערך שיש לבדוק אם הוא מכיל רכיבי מחרוזת JSON.

### ייבוא מקומי של פונקציה

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); //‎ true
const mixed = areJson(["{\"a\":1}", 123 as unknown]); //‎ false
const empty = areJson([]); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areJson(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areJson](‎../_analysis/areJson.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 16:16:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>