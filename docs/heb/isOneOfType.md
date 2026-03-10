# isOneOfType

## תיאור

`isOneOfType` קובע האם `value` נתון תואם לפחות אחת ממחרוזות הסוג שסופקו, ומחזיר `true` אם נמצאה התאמה כלשהי ו-`false`
אחרת.

### מקרה שימוש

אמת נתונים בעלי טיפוס רופף או נתונים חיצוניים (למשל, JSON מפוענח, פרמטרים של שאילתה) באמצעות מתן אפשרות למספר סוגים
מקובלים בזמן ריצה (כגון `number` או `string`) לפני המשך ללוגיקה נוספת.

> **הערה למשתמשי TypeScript:**
>
> השתמש ב-`isOneOfType` כאשר אתה רוצה בדיקה בזמן ריצה שערך תואם לאחד מתוך כמה סוגים מותרים; הוא מחזיר `true` אם לפחות
> סוג אחד תואם, אחרת `false`.

### יתרונות

- בודק ערך מול מספר סוגים מותרים בקריאה אחת, ומחזיר `true` בהתאמה הראשונה.
- עובד עם קלטים מסוג `unknown`, מה שהופך אותו לשימושי בגבולות זמן ריצה (למשל, נתונים חיצוניים, קלט משתמש).
- תוצאת בוליאן פשוטה (`true`/`false`) שמשתלבת היטב עם לוגיקה מותנית והחזרות מוקדמות.

## שימוש

### תחביר

פונקציה:

- `isOneOfType(value, types)`

פרמטרים:

- `value`: הערך שיש לבדוק מול הסוגים שצוינו.
- `types`: מערך של מחרוזות סוג המייצגות את הסוגים האפשריים של הערך.

### ייבוא מקומי של פונקציה

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  //‎‎ input הוא אובייקט בזמן ריצה
}

console.log(isOneOfType(3, ["number", "string"])); //‎ true
console.log(isOneOfType("hello", ["number", "boolean"])); //‎ false

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isOneOfType(value, types)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isOneOfType](‎../_analysis/isOneOfType.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 23:43:27 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>