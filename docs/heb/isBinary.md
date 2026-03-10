# isBinary

## תיאור

`isBinary` קובע האם ערך הוא מחרוזת בינארית (עם קידומת אופציונלית `0b`/`0B`) ומחזיר `true` או `false`.

### מקרה שימוש

אמתו מחרוזות שסופקו על ידי משתמשים (למשל, שדות טופס, ארגומנטים של CLI, ערכי תצורה) כדי לוודא שהן מייצגות ספרות בינאריות
בלבד, עם קידומת אופציונלית `0b`/`0B`, לפני עיבוד נוסף.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isBinary` כשומר טיפוסים (type guard) לפני ניתוח או המרה של מחרוזת ל-`BigInt`/`Number` כדי להימנע מקלט לא
> תקין.

### יתרונות

- מקבל מחרוזות בינאריות עם או בלי הקידומת `0b`/`0B`.
- דוחה מחרוזות ריקות ומחרוזות עם רווחים מובילים/נגררים (ASCII ≤ 32).
- מחזיר `true`/`false` בלי לזרוק חריגה, מה שהופך אותו לבטוח עבור קלטים לא ידועים.

## שימוש

### תחביר

פונקציה:

- `isBinary(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); //‎ true
const b = isBinary("1010");   //‎ true
const c = isBinary("0b1020"); //‎ false
const d = isBinary(0b1010);     //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isBinary(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isBinary](‎../_analysis/isBinary.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:10:00 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>