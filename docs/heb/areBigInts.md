# areBigInts

## תיאור

`areBigInts` קובע האם ערך הוא מערך לא ריק המכיל רק ערכי `bigint`.

### מקרה שימוש

אמתו קלט לא ידוע (למשל, נתונים דמויי-JSON שעברו ניתוח, מטעני API, או פרמטרים של פונקציה שמטופסים כ-`unknown`) כדי לוודא
שהוא מערך לא ריק של ערכי `bigint` לפני עיבוד; מחזיר `true` רק כאשר כל הרכיבים הם `bigint`, אחרת `false`.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areBigInts` כשומר בזמן ריצה לפני ביצוע פעולות שמיועדות ל-`bigint` בלבד (למשל, אריתמטיקה, השוואות) על קלט לא
> ידוע.

### יתרונות

- מבטיח שכל רכיב הוא `bigint`, ומחזיר `true` רק כאשר כל המערך תואם.
- דוחה ערכים שאינם מערכים ומערכים ריקים כברירת מחדל (באמצעות `isFilledArray`), וכך מונע קבלה בשוגג של קלטים לא תקינים.
- כשל מהיר: מחזיר `false` ברגע שנמצא רכיב שאינו `bigint`.

## שימוש

### תחביר

פונקציה:

- `areBigInts(array)`

פרמטרים:

- `array`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ אמת
console.log(areBigInts(b)); //‎ שקר
console.log(areBigInts(c)); //‎ שקר
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areBigInts(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:26:01 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>