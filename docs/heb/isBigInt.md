# isBigInt

## תיאור

`isBigInt` בודקת האם ערך נתון הוא מטיפוס `bigint`, ומחזירה `true` עבור פרימיטיבים מסוג BigInt ו-`false` אחרת.

### מקרה שימוש

אמתו וצמצמו ערכים שמגיעים ממקורות ללא טיפוס (למשל, ניתוח JSON, קלט משתמש, ממשקי API חיצוניים) לפני ביצוע חישובים
ייעודיים ל-BigInt או לפני אחסונם בשדות שמקבלים BigInt בלבד.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isBigInt` כדי לצמצם `unknown` ל-`bigint` לפני ביצוע אריתמטיקה של BigInt (למשל, `+`, `*`) שדורשת אופראנדים
> מסוג BigInt.

### יתרונות

- מספק בדיקת זמן ריצה פשוטה ואמינה עבור הטיפוס הפרימיטיבי `bigint`.
- מסייע לצמצם ערכים מסוג `unknown` לפני ביצוע פעולות שמיועדות ל-BigInt בלבד.
- מונע חיוביים שגויים: מספרים רגילים, מחרוזות וטיפוסים אחרים מחזירים `false`.

## שימוש

### תחביר

פונקציה:

- `isBigInt(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ נכון
console.log(isBigInt(10));  //‎ שקר
console.log(isBigInt("10")); //‎ שקר
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isBigInt(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:31:59 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>