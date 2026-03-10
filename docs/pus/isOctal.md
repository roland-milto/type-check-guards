# isOctal

## تشریح

ټاکي چې يو ارزښت معتبر octal literal string دی که نه (لکه `0o755`).

### د کارولو بېلګه

د کارن ورننوت يا د configuration ارزښتونه تصديق کړئ چې بايد د octal literal string په بڼه وي (د بېلګې په توګه، د فايل د
اجازو حالتونه لکه `0o644`) مخکې له دې چې parse يا convert شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isOctal` يو type guard دی (`value is string`). د `true` پايلې وروسته، TypeScript کتل شوی متغير `string` ته راکموي (
> narrow کوي).

### ګټې

- يو سخت ډول ساتونکی (type guard) برابروي: يوازې هغه وخت `true` راګرځوي چې ورننوتی ارزښت يو داسې string وي چې د octal
  literal له بڼې سره سمون ولري.
- تشې string ګانې او هغه string ګانې چې په سر/پای کې whitespace (ASCII control/space) ولري ردوي، او د ناڅاپي سمونونو
  امکان کموي.
- اختیاري نښه (sign) ملاتړ کوي او د `0o`/`0O` مخکښ (prefix) لپاره د تورو د لوی/کوچني توپير پروا نه کوي.
- د non-string ورننوتو لپاره نرم چلند لري: د exception غورځولو پر ځای `false` راګرځوي.

## کارونه

### سینټکس

فنکشن:

- `isOctal(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); //‎ رښتیا
console.log(isOctal(b)); //‎ رښتیا
console.log(isOctal(c)); //‎ ناسم
console.log(isOctal(d)); //‎ ناسم

if (isOctal(a)) {
  //‎‎ a دلته سټرینګ دی
  const normalized = a.toLowerCase();
  console.log(normalized);
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isOctal(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isOctal](‎../_analysis/isOctal.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 15:43:05 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>