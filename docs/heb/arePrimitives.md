# arePrimitives

## תיאור

`arePrimitives` בודקת האם כל הרכיבים במערך שסופק, שאינו ריק, הם טיפוסים פרימיטיביים.

### מקרה שימוש

אמתו שנתונים נכנסים (למשל, פרמטרים של שאילתה, ערכי שורה ב-CSV, או רשימת מזהים/תגיות) מכילים רק ערכים פרימיטיביים לפני
סריאליזציה, גיבוב, רישום לוגים, או העברתם ל-API-ים שאסור להם לקבל אובייקטים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`arePrimitives` כאשר אתם צריכים לוודא ש-`unknown[]` מכיל רק ערכים פרימיטיביים (string, number, bigint,
> boolean, symbol, undefined, או null) לפני עיבוד נוסף.

### יתרונות

- מחזירה `true` רק כאשר כל רכיב הוא ערך פרימיטיבי, מה שהופך אותה לשומר קפדני עבור מערכים של "ללא אובייקטים/פונקציות".
- נכשלת מהר: מחזירה `false` מיד כשנמצא רכיב שאינו פרימיטיבי.
- מחזירה `false` גם עבור ערכים שאינם מערכים ועבור מערכים ריקים (באמצעות בדיקת מערך-מלא), ובכך מונעת קבלה בשוגג של קלט לא
  תקין.

## שימוש

### תחביר

פונקציה:

- `arePrimitives(array)`

פרמטרים:

- `array`: המערך שיש לבדוק בו רכיבים מסוג פרימיטיבי.

### ייבוא מקומי של פונקציה

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); //‎ אמת
const r2 = arePrimitives(b); //‎ אמת
const r3 = arePrimitives(c); //‎ שקר
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.arePrimitives(array)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [arePrimitives](‎../_analysis/arePrimitives.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 00:04:45 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>