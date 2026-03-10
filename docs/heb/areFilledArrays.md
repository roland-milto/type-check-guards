# areFilledArrays

## תיאור

`areFilledArrays` בודקת האם מערך דו-ממדי אינו ריק וכל תתי-המערכים שלו אינם ריקים.

### מקרה שימוש

השתמשו ב-`areFilledArrays` כדי לאמת קלט טבלאי או דמוי-מטריצה (למשל שורות CSV, נתוני גריד, תוצאות מקובצות) כך שניתן יהיה
להניח בבטחה שיש לפחות תת-מערך אחד ושאף אחד מתתי-המערכים אינו ריק.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areFilledArrays` כאשר צריך לוודא שלמערך דו-ממדי יש לפחות שורה אחת ושכל שורה מכילה לפחות אלמנט אחד לפני
> איטרציה או אינדוקס לתוכו.

### יתרונות

- מאמת שהמערך החיצוני אינו ריק ושכל מערך פנימי גם אינו ריק, ומחזיר `true` רק כאשר שני התנאים מתקיימים.
- עובד עם כל סוגי האלמנטים בתוך תתי-המערכים (למשל מספרים, מחרוזות, אובייקטים, מערכים מקוננים) משום שהוא בודק רק את מצב
  ה"מלאות" של המערך, ולא את תוכן האלמנטים.
- מספק תוצאת בוליאן פשוטה (`true`/`false`) המתאימה לשימוש כשומר (guard) לפני עיבוד נתונים דו-ממדיים.

## שימוש

### תחביר

פונקציה:

- `areFilledArrays(array)`

פרמטרים:

- `array`: המערך הדו-ממדי לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); //‎ true
console.log(areFilledArrays(b)); //‎ true
console.log(areFilledArrays(c)); //‎ true
console.log(areFilledArrays(d)); //‎ false
console.log(areFilledArrays(e)); //‎ false
console.log(areFilledArrays(f)); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areFilledArrays(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [areFilledArrays](‎../_analysis/areFilledArrays.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 11:56:48 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>