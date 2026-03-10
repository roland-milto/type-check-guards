# areFloats

## תיאור

`areFloats` בודקת האם מערך נתון מלא וכל האלמנטים בו הם מספרים עשרוניים (float).

### מקרה שימוש

השתמשו ב-`areFloats` כאשר אתם מקבלים `unknown[]` (למשל מ-JSON, מפרמטרים של שאילתה, או מ-API חיצוניים) ואתם צריכים לוודא
שזהו מערך מלא שבו כל פריט הוא מספר עשרוני (float) לפני הרצת לוגיקה נומרית כגון חישוב ממוצע, אינטרפולציה, או חישובים
סטטיסטיים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areFloats` כדי להגן על `unknown[]` לפני שמתייחסים אליו כאל `number[]` שמכיל רק מספרים עשרוניים (float); היא
> מחזירה `false` עבור מערכים ריקים ועבור כל אלמנט שאינו float.

### יתרונות

- מחזיר `true` רק כאשר הקלט הוא מערך לא-ריק וכל אחד מהאלמנטים בו הוא מספר עשרוני (float).
- נכשל מהר: מחזיר `false` ברגע שנמצא אלמנט שאינו float.
- מסייע לאמת קלט לא-ידוע לפני ביצוע חישובים ייעודיים למספרים עשרוניים (float).

## שימוש

### תחביר

פונקציה:

- `areFloats(array)`

פרמטרים:

- `array`: המערך שיש לבדוק האם הוא מכיל אלמנטים מסוג float.

### ייבוא מקומי של פונקציה

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ true
console.log(areFloats(b)); //‎ false
console.log(areFloats(c)); //‎ false

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areFloats(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 15:57:32 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>