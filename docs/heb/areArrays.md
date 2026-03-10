# areArrays

## תיאור

`areArrays` קובע האם ערך הוא מערך דו־ממדי מלא שבו כל הפריטים הם מערכים.

### מקרה שימוש

השתמשו ב-`areArrays` כדי לאמת קלטים טבלאיים או דמויי-מטריצה (למשל, שורות CSV, נתוני רשת, או רשימות מקובצות) לפני ביצוע
פעולות שורה/עמודה; הפונקציה מחזירה `false` אם הקלט אינו מערך, ריק, או מכיל איבר כלשהו שאינו מערך.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areArrays` כאשר אתם צריכים לוודא שערך הוא מערך דו־ממדי שאינו ריק ושכל שורה היא מערך לפני איטרציה או אינדוקס
> לתוך מערכים מקוננים.

### יתרונות

- מאמת שהקלט הוא מערך דו־ממדי שאינו ריק, שבו כל איבר הוא מערך.
- מחזיר תוצאת בוליאן פשוטה (`true`/`false`) המתאימה לשומרים (guards) וליציאות מוקדמות.
- מסייע למנוע שגיאות בזמן ריצה כאשר קוד בהמשך מניח פעולות על מערכים מקוננים (למשל, מיפוי שורות).

## שימוש

### תחביר

פונקציה:

- `areArrays(array)`

פרמטרים:

- `array`: הקלט שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  //‎‎ value הוא מערך דו־ממדי עם מערכים כאלמנטים
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areArrays(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areArrays](‎../_analysis/areArrays.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 13:39:44 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>