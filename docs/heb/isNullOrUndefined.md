# isNullOrUndefined

## תיאור

בודק האם ערך נתון הוא `null` או `undefined`.

### מקרה שימוש

השתמשו ב-`isNullOrUndefined` כאשר צריך להתייחס גם ל-`null` וגם ל-`undefined` כאל "אין ערך", למשל בעת אימות קלטים
אופציונליים, נרמול מטעני API, או הגנה על נתיבי קוד לפני ביצוע dereference לערך שעשוי להיות חסר.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isNullOrUndefined` כדי להתגונן מפני ערכים חסרים לפני גישה למאפיינים או קריאה למתודות; היא מחזירה `true` רק
> עבור `null` ו-`undefined`.

### יתרונות

- מספק שומר (guard) ברור וניתן לשימוש חוזר לזיהוי `null` ו-`undefined` במקום אחד.
- מחזיר בוליאני פשוט (`true`/`false`) שקל לשלב בתנאים ובאימותים.
- מסייע להימנע משגיאות זמן ריצה נפוצות באמצעות בדיקה של ערכים חסרים לפני גישה למאפיינים או קריאה למתודות.

## שימוש

### תחביר

פונקציה:

- `isNullOrUndefined(value)`

פרמטרים:

- `value`: הערך שיש לבדוק אם הוא `null` או `undefined`.

### ייבוא מקומי של פונקציה

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ טפל בערך חסר
}

console.log(isNullOrUndefined(b)); //‎ אמת
console.log(isNullOrUndefined(c)); //‎ שקר

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isNullOrUndefined(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:33:52 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>