# areDecimals

## תיאור

בודק האם כל האיברים במערך הם מספרים עשרוניים והמערך מלא, ומחזיר `true` או `false`.

### מקרה שימוש

אימות רשימות שסופקו על-ידי משתמשים (למשל, עמודות CSV או קלטי טופס) כדי לוודא שהמערך אינו ריק ושכל ערך הוא ערך עשרוני
לפני ניתוח או חישובים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areDecimals` כאשר אתם צריכים בדיקה בוליאנית מהירה ש-`unknown[]` אינו ריק ושכל איבר בו הוא ייצוג עשרוני.

### יתרונות

- מבטיח שהקלט הוא מערך מלא לפני אימות הפריטים, ומונע קבלה בשוגג של רשימות ריקות.
- מאמת כל איבר באמצעות `isDecimal`, כך שערכים מעורבים או לא תקינים גורמים מיד לתוצאה `false`.
- מספק תוצאה בוליאנית פשוטה (`true`/`false`) המתאימה ל-guards ולזרימות אימות עם החזרה מוקדמת.

## שימוש

### תחביר

פונקציה:

- `areDecimals(array)`

פרמטרים:

- `array`: המערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { areDecimals } from "@type-check/guards";

const a: unknown[] = ["1.0", "2.5", "3.14"];
const b: unknown[] = ["1.0", "abc", "3.14"];
const c: unknown[] = [];

console.log(areDecimals(a)); //‎ true
console.log(areDecimals(b)); //‎ false
console.log(areDecimals(c)); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areDecimals(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areDecimals](‎../_analysis/areDecimals.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 15:57:21 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>