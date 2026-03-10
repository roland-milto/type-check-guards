# isNull

## תיאור

קובע האם ה-`value` שסופק הוא `null`.

### מקרה שימוש

השתמשו ב-`isNull` כדי לאמת קלטים או שדות במטען (payload) של API שבהם `null` הוא ערך סמן (sentinel) בעל משמעות ויש לטפל
בו באופן שונה מ-`undefined` או מערכים אחרים.

> **הערה למשתמשי TypeScript:**
>
> השתמשו ב-`isNull` כאשר צריך להבחין בין `null` לבין `undefined` וערכים אחרים שהם falsy; הוא מחזיר `true` רק עבור
`null`.

### יתרונות

- מספק בדיקה מדויקת עבור `null` מבלי לערבב אותו עם `undefined`.
- פועל באופן אמין עבור כל סוג קלט משום שהוא מקבל `unknown`.
- פשוט, מהיר וללא תופעות לוואי; מחזיר רק `true` או `false`.

## שימוש

### תחביר

פונקציה:

- `isNull(value)`

פרמטרים:

- `value`: הערך שיש לבדוק אם הוא `null`.

### ייבוא מקומי של פונקציה

```ts
import { isNull } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;

console.log(isNull(a)); //‎ true
console.log(isNull(b)); //‎ false

if (isNull(a)) {
  //‎‎ a הוא null כאן
}
```

### ייבוא גלובלי של אובייקט

כדי לייבא את הפונקציות כמתודות גלובליות של אובייקט, השתמשו ב:

```ts
import "@type-check/guards/register-global-object.mjs";
```

לאחר מכן המתודה הבאה תהיה זמינה באופן גלובלי:

- `Type.isNull(value)`

## ניתוח פונקציות

כאן מתועדת אנליזה טבלאית של הפלט שנוצר בעת העברת פרמטרים שונים לפונקציות: [isNull](‎../_analysis/isNull.md‎)

<br>

---

<small>הקובץ נוצר ב־31 January 2026 at 15:39:22 (UTC) תוך שימוש ב־*
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** מאת *
*[Roland Milto](https://roland-milto.de/)**.</small>