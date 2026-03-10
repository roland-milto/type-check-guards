# arePromises

## تشریح

`arePromises` معلوموي چې ايا په ارايه کې ټول عناصر د `Promise` نمونې (instances) دي که نه.

### د کارولو بېلګه

دا تائيد کړئ چې يو په متحرک ډول جوړ شوی يا له بهرنۍ سرچينې ورکړل شوی لېست يوازې promises لري مخکې له دې چې هغوی يوځای
کړئ (لکه د `Promise.all` سره).

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `arePromises` وکاروئ څو د `unknown[]` اعتبار مخکې له دې وڅېړئ چې `Promise.all` يا نور يوازې-پروميس عمليات وغواړئ؛ دا د
> خالي ارايو لپاره `false` بېرته ورکوي.

### ګټې

- ډاډ ورکوي چې هر عنصر `Promise` وي مخکې له دې چې د promise-ځانګړې منطق سره پر مخ ولاړ شئ.
- د نه-ډکو (خالي) ارايو لپاره `false` بېرته ورکوي، او د خالي داخلونو لپاره مبهمې پايلې مخه نيسي.
- کله چې له بهرنيو سرچينو څخه د `unknown[]` سره کار کوئ، د runtime guard په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `arePromises(array)`

پارامېټرونه:

- `array`: هغه ارايه چې د Promise نمونو (instances) لپاره يې ګورئ.

### د فنکشن محلي امپورټ

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  //‎‎ values په اجرايي وخت کې د Promise بېلګو يو ارايه ده
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.arePromises(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [arePromises](‎../_analysis/arePromises.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:49:44 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>