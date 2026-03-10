# areNumerics

## تشریح

`areNumerics` ګوري چې ايا يو ارزښت داسې غير-تش ارايه ده چې ټول عناصر يې عددي وي.

### د کارولو بېلګه

`areNumerics` د بهرنيو يا بې-ډوله معلوماتو (لکه JSON payloads، query parameters، form input) د تصديق لپاره وکاروئ مخکې
له دې چې جمع، اوسط، يا نور عددي عمليات محاسبه کړئ؛ دا ډاډ ورکوي چې داخلېدنه يو غير-تش عددي ارايه ده او که نه وي `false`
واپس کوي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areNumerics` وکاروئ څو `unknown` داخلېدنه ګارډ کړئ مخکې له دې چې هغه د عددي ارايې په توګه وکاروئ؛ د غير-ارايه او تشو
> ارايو لپاره `false` واپس کوي.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې داخلېدنه يو غير-تش ارايه وي او هر عنصر يې عددي وي.
- ژر ناکامېږي: لکه چې يو غير-عددي عنصر وموندل شي، نور نه ګوري او `false` واپس کوي.
- د نامعلوم داخلېدنې خوندي تصديق کې مرسته کوي مخکې له دې چې عددي عمليات ترسره شي.

## کارونه

### سینټکس

فنکشن:

- `areNumerics(array)`

پارامېټرونه:

- `array`: هغه ارايه چې د عددي عناصرو لپاره يې ګوري.

### د فنکشن محلي امپورټ

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); //‎ رښتیا
console.log(areNumerics(b)); //‎ رښتیا
console.log(areNumerics(c)); //‎ ناسم
console.log(areNumerics(d)); //‎ ناسم
console.log(areNumerics(e)); //‎ ناسم

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); //‎ ۶۰
console.log(sumUnknown([10, "20", 30])); //‎ null

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areNumerics(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areNumerics](‎../_analysis/areNumerics.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 16:07:12 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>