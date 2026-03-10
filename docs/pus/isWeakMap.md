# isWeakMap

## تشریح

ټاکي چې ورکړل شوی `value` د `WeakMap` يو instance دی که نه.

### د کارولو بېلګه

کله چې تاسو يو `unknown` ارزښت منئ (لکه د عامه API، plugin system، يا dynamic configuration څخه) او اړتيا لرئ چې د
`WeakMap`-ځانګړي چلند تر کارولو مخکې ډاډ ترلاسه کړئ چې دا `WeakMap` دی، `isWeakMap` وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isWeakMap` د `instanceof WeakMap` چک ترسره کوي؛ دا يو runtime guard دی چې يوازې د واقعي `WeakMap` instance ګانو لپاره
`true` بېرته ورکوي.

### ګټې

- د دې لپاره ساده د چلولو-وخت (runtime) چک چې يو ارزښت `WeakMap` دی که نه.
- د هغو API ګانو د ناسم کارونې مخه نيسي چې `WeakMap` ته اړتيا لري، ځکه د غورځولو (throwing) پر ځای `true`/`false` بېرته
  ورکوي.
- له `unknown` داخلونو سره کار کوي، نو د ماډول په پولو کې اسانه دی (لکه: parsing، بهرنۍ ډاټا، يا بې-ټايپه کوډ).

## کارونه

### سینټکس

فنکشن:

- `isWeakMap(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isWeakMap } from "@type-check/guards";

const a: unknown = new WeakMap<object, number>();
const b: unknown = new Map();

if (isWeakMap(a)) {
  //‎‎ a په اجرا کې WeakMap دی
}

console.log(isWeakMap(a)); //‎ رښتیا
console.log(isWeakMap(b)); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isWeakMap(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isWeakMap](‎../_analysis/isWeakMap.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:26:42 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>