# areStrings

## תיאור

`areStrings` בודקת האם מערך אינו ריק וכל רכיביו הם מחרוזות, ומחזירה `true` רק במקרה זה.

### מקרה שימוש

אמתו נתונים חיצוניים או נתונים שסופקו על ידי משתמש (למשל, פרמטרים של שאילתה, מטעני JSON, שדות CSV) כדי לוודא שיש לכם
רשימה לא-ריקה של מחרוזות לפני עיבוד.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`areStrings` כדי לאמת מערכים לא ידועים לפני החלת לוגיקה שמיועדת למחרוזות בלבד; היא מחזירה `false` עבור מערכים
> ריקים.

### יתרונות

- מבטיח שכל רכיב הוא מחרוזת ודוחה מערכים מעורבי-טיפוסים על ידי החזרת `false`.
- דוחה מערכים ריקים, כך ש-`true` מציין רק רשימה לא-ריקה של מחרוזות.
- שימושי כשומר ריצה מהיר לפני ביצוע פעולות שמיועדות למחרוזות בלבד (למשל, `trim`, `toLowerCase`).

## שימוש

### תחביר

פונקציה:

- `areStrings(value)`

פרמטרים:

- `value`: Expected type `string[]`.

### ייבוא מקומי של פונקציה

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input הוא string[] לא ריק בזמן ריצה
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areStrings(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>הקובץ נוצר ב־30 January 2026 at 13:18:22 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>