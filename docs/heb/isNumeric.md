# isNumeric

## תיאור

`isNumeric` קובע האם `value` נתון נחשב מספרי על-ידי בדיקת הטיפוס שנפתר עבורו מול `NUMERIC_TYPES`.

### מקרה שימוש

השתמש ב-`isNumeric` כדי לאמת קלטים (למשל, מטעני API, ערכי טפסים, תצורה) לפני ביצוע פעולות מספריות, וכדי לקבל באופן עקבי
טיפוסים דמויי-מספר (כגון `BigInt`) בהתאם ל-`NUMERIC_TYPES`.

> **הערה למשתמשי TypeScript:**
>
> `isNumeric` הוא פרדיקט שמחזיר בוליאני; התייחס אליו כבדיקת זמן-ריצה האם ערך שייך לקבוצת הטיפוסים המספריים שמוגדרת
> על-ידי הספרייה.

### יתרונות

- משתמש ב-`getTypeOf` יחד עם `NUMERIC_TYPES` כדי לרכז את לוגיקת זיהוי הערכים המספריים ולשמור על בדיקות עקביות לאורך בסיס
  קוד.
- מחזיר בוליאני פשוט (`true`/`false`) לצורך הסתעפות קלה ושימוש בסגנון guard.
- תומך במספר ייצוגים מספריים (למשל, `number`, `BigInt`) כפי שמוגדרים על-ידי `NUMERIC_TYPES`.

## שימוש

### תחביר

פונקציה:

- `isNumeric(value)`

פרמטרים:

- `value`: הערך שיש לבדוק האם הוא מסוג מספרי.

### ייבוא מקומי של פונקציה

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ v נחשב מספרי לפי כללי הטיפוסים של הספרייה
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isNumeric(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>הקובץ נוצר ב־6 February 2026 at 15:52:43 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>