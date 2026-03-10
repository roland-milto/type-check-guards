# areMaps

## תיאור

`areMaps` קובע האם מערך נתון אינו ריק וכל אחד מהרכיבים שלו הוא מופע של `Map`.

### מקרה שימוש

אימות קלט לא ידוע (למשל מפענוח JSON, מ-API חיצוניים, או ממקורות דינמיים) לפני שמתייחסים אליו כרשימה לא ריקה של אובייקטי
`Map`.

> **הערה למשתמשי TypeScript:**
>
> מחזיר `false` עבור מערך ריק; הוא מחזיר `true` רק כאשר המערך מלא וכל רכיב הוא `Map`.

### יתרונות

- מבטיח שכל רכיב הוא מופע של `Map`, ומחזיר `true` רק כאשר כל המערך עובר את הבדיקה.
- דוחה מערכים ריקים כברירת מחדל, וכך מונע קבלה בטעות של "אין נתונים" כקלט תקין.
- שימושי כשומר (guard) לפני ביצוע פעולות ייעודיות ל-`Map` (למשל `.get()`, `.set()`, איטרציה) על פני אוסף.

## שימוש

### תחביר

פונקציה:

- `areMaps(array)`

פרמטרים:

- `array`: המערך לבדיקה.

### ייבוא מקומי של פונקציה

```ts
import { areMaps } from "@type-check/guards";

const items: unknown[] = [new Map<string, number>([["a", 1]]), new Map<string, number>()];

if (areMaps(items)) {
  //‎‎ מובטח ש-items יהיה מערך לא ריק של מופעי Map בזמן ריצה
  for (const m of items) {
    m.set("x", 42);
  }
} else {
  //‎‎ false עבור: מערכים ריקים, או מערכים המכילים ערך כלשהו שאינו Map
}

```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.areMaps(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [areMaps](‎../_analysis/areMaps.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 16:12:42 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>