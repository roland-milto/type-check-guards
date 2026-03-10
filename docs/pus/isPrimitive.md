# isPrimitive

## تشریح

`isPrimitive` ټاکي چې ورکړل شوی ارزښت ابتدايي (primitive) دی که نه (`null`, `undefined`, `boolean`, `number`, `string`,
`bigint`, `symbol`).

### د کارولو بېلګه

په اجرايي وخت کې داخلونه تصديق کړئ (لکه د API payload ساحې، د ترتيب (configuration) ارزښتونه، يا د کاروونکي له خوا ورکړل
شوي معلومات) څو ډاډ ترلاسه شي چې يو ارزښت ابتدايي دی مخکې له دې چې serialize شي، log شي، يا يوازې-ابتدايي عمليات پرې
تطبيق شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> له `isPrimitive` څخه د `unknown` داخلونو د ساتنې (guard) لپاره کار واخلئ مخکې له دې چې هغوی د شيانو يا دندو په توګه
> وکاروئ؛ دا د ابتدايي ارزښتونو لپاره `true` او د شيانو او دندو لپاره `false` بېرته ورکوي.

### ګټې

- چټک، بې-اختصاصه (allocation-free) کتنه چې ايا يو ارزښت د JavaScript ابتدايي (primitive) دی که نه.
- `null` په سمه توګه ابتدايي ګڼي (که څه هم `typeof null` د `"object"` نتيجه ورکوي).
- د `unknown` ارزښتونو تنګولو کې مرسته کوي مخکې له دې چې يوازې-د-شي (object-only) عمليات ترسره شي.

## کارونه

### سینټکس

فنکشن:

- `isPrimitive(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د ابتدايي ډول لپاره يې ګورئ.

### د فنکشن محلي امپورټ

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isPrimitive(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isPrimitive](‎../_analysis/isPrimitive.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:57:34 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>