# areIntegers

## تشریح

`areIntegers` eh tay karda ae ke ditti gayi array de saare elements integers ne ya nahin, je ne taan `true` te nahin
taan `false` wapas karda ae.

### د کارولو بېلګه

`areIntegers` nu user-provided ya external data (misal: query parameters, JSON payloads, CSV rows) di tasdeeq layi
vartyo jadon tuhadi logic nu integer values di filled list chahidi hove, jiven IDs, counters, pagination offsets, ya
array indices.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areIntegers` nu `unknown[]` inputs layi runtime guard vajo vartyo, ohna nu `number[]` samajhan ton pehlan jithe sirf
> integers hon. Je eh `false` wapas kare, taan input ya taan filled array nahin, ya phir vich ghatt ton ghatt ik
> non-integer value maujood ae.

### ګټې

- `true` sirf ohdon wapas karda ae jadon har element ik integer hove; nahin taan `false` wapas karda ae.
- Integer-sirf operations (misal: indexing, counts, IDs) karan ton pehlan anjaan input di tasdeeq vich madad karda ae.
- Jaldi fail hunda ae: jiven hi koi non-integer element labhda ae, check karna rok dinda ae.

## کارونه

### سینټکس

فنکشن:

- `areIntegers(array)`

پارامېټرونه:

- `array`: Oh array jis vich integer elements di jaanch karni ae.

### د فنکشن محلي امپورټ

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ رښتیا
console.log(areIntegers(b)); //‎ رښتیا
console.log(areIntegers(c)); //‎ ناسم

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areIntegers(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 01:00:13 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>