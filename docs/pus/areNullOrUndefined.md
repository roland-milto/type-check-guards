# areNullOrUndefined

## تشریح

ګوري چې ايا په ورکړل شوې ارايه کې ټول عناصر `null` يا `undefined` دي که نه.

### د کارولو بېلګه

دا تصديق کړئ چې د اختياري فيلډونو لېست هېڅ واقعي ارزښت نه لري (يواځې `null`/`undefined`) مخکې له دې چې پرېکړه وکړئ پروسس
پرېږدئ يا د “هېڅ ارزښت نه دی ورکړل شوی” حالت وښاياست.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areNullOrUndefined` هغه وخت وکاروئ چې تاسې ته اړتيا وي تصديق کړئ چې ارايه يواځې ورک ارزښتونه (`null`/`undefined`)
> لري. پام وکړئ چې د تشې ارايې لپاره `false` واپس کوي.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې هر عنصر `null` يا `undefined` وي.
- د تشو ارايو لپاره `false` واپس کوي، چې د “ډاټا نشته” او “ټول ورک ارزښتونه” ترمنځ توپير کې مرسته کوي.
- له `unknown[]` سره کار کوي، نو د ډولونو تر تنګولو (narrowing) مخکې کارول يې خوندي دي.

## کارونه

### سینټکس

فنکشن:

- `areNullOrUndefined(array)`

پارامېټرونه:

- `array`: هغه ارايه چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
//‎‎ allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
//‎‎ containsValue === false

const empty = areNullOrUndefined([]);
//‎‎ empty === false
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areNullOrUndefined(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areNullOrUndefined](‎../_analysis/areNullOrUndefined.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:31:09 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>