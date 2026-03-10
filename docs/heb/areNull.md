# areNull

## תיאור

בודק האם כל הרכיבים ב-`array` הנתון הם `null`.

### מקרה שימוש

אמתו שעמודה במערך נתונים, רשימת שדות API, או מערך מצייני מקום מכילים רק ערכי `null` לפני החלת לוגיקה שמניחה שכל הרשומות
ריקות בכוונה.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areNull` כאשר אתם צריכים בדיקה קפדנית שקלט הוא מערך לא ריק ושכל רכיב הוא בדיוק `null` (לא `undefined`, לא
> ערכים "falsy").

### יתרונות

- מחזיר `true` רק כאשר כל רכיב הוא `null`, מה שהופך אותו לשומר קפדני בסגנון "כולם תואמים".
- דוחה ערכים שאינם מערכים ומערכים ריקים על־ידי החזרת `false`, ובכך מונע תוצאות אמתיות בטעות על קלט לא תקין.
- מתאים היטב כבדיקת תנאי מקדים לפני עיבוד נתונים שחייבים להיות כולם `null`.

## שימוש

### תחביר

פונקציה:

- `areNull(array)`

פרמטרים:

- `array`: מערך הקלט שיש לבדוק עבור רכיבי `null`.

### ייבוא מקומי של פונקציה

```ts
import { areNull } from "@type-check/guards";

const a = [null, null];
const b = [null, 1, null];

const allNullA = areNull(a); //‎ true
const allNullB = areNull(b); //‎ false

const notAnArray = areNull(123 as unknown as unknown[]); //‎ false
const empty = areNull([]); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areNull(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areNull](‎../_analysis/areNull.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 15:43:25 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>