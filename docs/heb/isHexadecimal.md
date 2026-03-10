# isHexadecimal

## תיאור

`isHexadecimal` בודק האם ערך נתון הוא ליטרל מחרוזת הקסדצימלי עם קידומת חובה `0x`/`0X`.

### מקרה שימוש

השתמשו ב-`isHexadecimal` כדי לאמת ערכי תצורה, שדות במטען API, או ארגומנטים של CLI שחייבים להינתן כליטרלים של מחרוזות
הקסדצימליות (למשל, מזהים, מסכות או כתובות) ואסור שיכילו רווחים מסביב.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isHexadecimal` כאשר אתם צריכים לאמת קלט משתמש או נתונים מסוריאלים כליטרל מחרוזת הקסדצימלי מחמיר (כולל
> הקידומת `0x`/`0X`) לפני ניתוח (parsing) או המרה.

### יתרונות

- מאמת שערך הוא מחרוזת ותואם לפורמט ליטרל הקסדצימלי מחמיר (דורש את הקידומת `0x`/`0X`).
- דוחה מחרוזות עם רווחים בתחילה או בסוף, וכך מסייע להימנע מקבלה לא מכוונת של קלט מרופד.
- תומך בסימן אופציונלי ואינו תלוי רישיות עבור הקידומת והספרות, ומחזיר `true`/`false` באופן צפוי.

## שימוש

### תחביר

פונקציה:

- `isHexadecimal(value)`

פרמטרים:

- `value`: הערך שיש לבדוק.

### ייבוא מקומי של פונקציה

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); //‎ true
isHexadecimal("-0Xff"); //‎ true
isHexadecimal("1A2B"); //‎ false (חסרה קידומת)
isHexadecimal(" 0x1A2B"); //‎ false (רווח לבן מוביל)
isHexadecimal(0x1a2b); //‎ false (לא מחרוזת)
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isHexadecimal(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים
לפונקציות: [isHexadecimal](‎../_analysis/isHexadecimal.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 22:58:53 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>