# isMap

## תיאור

בודק האם ה-`value` הנתון הוא `Map`, ומחזיר `true` אם כן ו-`false` אחרת.

### מקרה שימוש

השתמש ב-`isMap` כאשר אתה מקבל ערך מסוג `unknown` (למשל, מפענוח JSON, מ-API-ים חיצוניים או מקלט משתמש) וצריך לוודא שהוא
`Map` לפני ביצוע פעולות של `Map`.

> **הערה למשתמשי TypeScript:**
>
> `isMap` הוא שומר (guard) בזמן ריצה שמחזיר `true` כאשר הערך הוא `Map` ו-`false` אחרת; השתמש בו כדי לצמצם `unknown` לפני
> קריאה ל-API-ים של `Map`.

### יתרונות

- מספק בדיקת זמן ריצה מהירה האם ערך הוא `Map`.
- מסייע למנוע שגיאות טיפוס באמצעות הגנה על מסלולי קוד שדורשים מתודות של `Map` כמו `get`, `set` ו-`has`.
- עובד היטב כשלב אימות קל משקל בעת טיפול בקלטים מסוג `unknown`.

## שימוש

### תחביר

פונקציה:

- `isMap(value)`

פרמטרים:

- `value`: הערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { isMap } from "@type-check/guards";

const input: unknown = new Map<string, number>([["a", 1]]);

if (isMap(input)) {
  input.set("b", 2);
  const a = input.get("a");
  console.log(a);
} else {
  console.log("Not a Map");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isMap(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isMap](‎../_analysis/isMap.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:04:37 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>