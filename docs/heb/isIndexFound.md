# isIndexFound

## תיאור

`isIndexFound` קובע האם ערך נתון הוא מספר שלם לא-שלילי, מה שמצביע על כך שנמצא אינדקס.

### מקרה שימוש

אמתו שתוצאת חיפוש מייצגת אינדקס שמיש (מספר שלם `>= 0`) לפני ביצוע אינדוקס לתוך מערך או מחרוזת, כדי למנוע שימוש לא מכוון
ב-`-1` או בערכים שאינם מספריים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isIndexFound` לאחר פעולות כמו `indexOf`, `findIndex`, או חיפושים מותאמים אישית שבהם `-1` (או ערכים לא-תקינים
> אחרים) יכולים לציין "לא נמצא". כאשר הפונקציה מחזירה `true`, הערך הוא מספר ובטוח לשימוש כאינדקס של מערך/מחרוזת.

### יתרונות

- מספק שומר טיפוסים פשוט כדי לזהות האם נמצא אינדקס באמצעות בדיקה של מספר שלם לא-שלילי.
- מחזיר `true` רק עבור ערכים תקינים דמויי-אינדקס (מספרים שלמים `>= 0`), ודוחה ערכים שליליים, ערכים שאינם מספרים שלמים,
  וערכים שאינם מספרים.
- מסייע להימנע משגיאות של off-by-one ומשגיאות של ערכי סמן (sentinel) בעת עבודה עם APIs שמחזירים `-1` עבור "לא נמצא".

## שימוש

### תחביר

פונקציה:

- `isIndexFound(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא מספר שלם לא-שלילי.

### ייבוא מקומי של פונקציה

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  //‎‎ idx הוא מספר כאן והוא >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

//‎‎ שימוש טיפוסי עם indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isIndexFound(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isIndexFound](‎../_analysis/isIndexFound.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:46:02 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>