# areBinaries

## תיאור

בודק האם הערך שסופק הוא מערך לא ריק של מחרוזות בינאריות תקינות ומחזיר `true` רק אם כל הפריטים עוברים אימות.

### מקרה שימוש

השתמשו ב-`areBinaries` כאשר אתם מקבלים רשימה לא ידועה (למשל מ-JSON, טפסים או APIs) וצריכים לוודא שזהו מערך לא ריק של
מחרוזות בינאריות לפני ניתוח או עיבוד.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areBinaries` כדי לאמת קלט לא ידוע לפני המרת מחרוזות בינאריות למספרים/BigInts; הוא מבטיח שהמערך אינו ריק ושכל
> איבר הוא מחרוזת בינארית תקינה.

### יתרונות

- מאמת שערך הוא מערך לא ריק שבו כל איבר הוא מחרוזת בינארית תקינה.
- מחזיר תוצאה בוליאנית פשוטה (`true`/`false`) המתאימה לשומרים (guards), להחזרות מוקדמות ולאימות קלט.
- מונע שגיאות ניתוח בהמשך על ידי דחיית מערכים שמכילים ערך כלשהו שאינו בינארי.

## שימוש

### תחביר

פונקציה:

- `areBinaries(array)`

פרמטרים:

- `array`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); //‎ true
console.log(areBinaries(b)); //‎ false
console.log(areBinaries([])); //‎ false
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areBinaries(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areBinaries](‎../_analysis/areBinaries.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:14:40 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>