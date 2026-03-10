# isFilledArray

## תיאור

בודק האם `value` הוא מערך עם לפחות איבר אחד, ומחזיר `true` או `false`.

### מקרה שימוש

השתמשו ב-`isFilledArray` כדי לאמת נתונים נכנסים (למשל, מטעני API, ערכי טופס, תצורה) לפני איטרציה, גישה לאיבר הראשון, או
החלת לוגיקה שדורשת לפחות פריט אחד.

> **הערה למשתמשי TypeScript:**
>
> `isFilledArray` הוא guard בזמן ריצה שמחזיר ערך בוליאני; הוא אינו מצמצם טיפוסי איברים מעבר לאישור שהמערך אינו ריק.

### יתרונות

- בדיקה פשוטה ומהירה למערך שאינו ריק באמצעות `Array.isArray` ובדיקת אורך.
- מסייע להימנע משגיאות בזמן ריצה כאשר הקוד מניח שלמערך יש לפחות איבר אחד.
- תוצאת בוליאן ברורה: מחזיר `true` עבור מערכים שאינם ריקים ו-`false` אחרת.

## שימוש

### תחביר

פונקציה:

- `isFilledArray(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא מערך שאינו ריק.

### ייבוא מקומי של פונקציה

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ input הוא מערך לא ריק בזמן ריצה
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isFilledArray(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 11:47:13 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>