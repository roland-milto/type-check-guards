# areHexadecimals

## תיאור

בודק האם כל הרכיבים במערך הם מחרוזות הקסדצימליות, ומחזיר `true` רק עבור מערכים שאינם ריקים שבהם כל פריט תקין.

### מקרה שימוש

השתמשו ב-`areHexadecimals` כדי לאמת קלט משתמש או נתונים חיצוניים (למשל, מזהים, סכומי ביקורת, קודי צבע ללא '#' מוביל)
לפני ביצוע ניתוח הקסדצימלי או עיבוד נוסף.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areHexadecimals` כדי לאמת קלט לא ידוע לפני ניתוח (parsing) או המרה של ערכים (לדוגמה, לפני
`parseInt(value, 16)` או המרות ל-BigInt).

### יתרונות

- מאמת שכל רכיב הוא מחרוזת הקסדצימלית ומחזיר `true` רק כאשר כל הפריטים תואמים.
- דוחה מערכים ריקים כברירת מחדל, ומחזיר `false` כאשר חסר קלט.
- מספק תוצאה בוליאנית פשוטה (`true`/`false`) המתאימה לשומרי טיפוס (guards) ולאימות עם החזרה מוקדמת.

## שימוש

### תחביר

פונקציה:

- `areHexadecimals(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל רכיבי מחרוזת הקסדצימליים.

### ייבוא מקומי של פונקציה

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areHexadecimals(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:06:20 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>