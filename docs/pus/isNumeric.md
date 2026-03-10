# isNumeric

## تشریح

`isNumeric` ټاکي چې ورکړل شوی `value` عددي ګڼل کېږي که نه، د دې لپاره یې حل شوی ډول د `NUMERIC_TYPES` پر وړاندې پرتله
کوي.

### د کارولو بېلګه

`isNumeric` د داخلېدونکو ارزښتونو د اعتبار لپاره وکاروئ (لکه د API payloads، د فورم ارزښتونه، تنظیمات) مخکې له دې چې
عددي عملیات ترسره کړئ، او د `NUMERIC_TYPES` له مخې په یو شان ډول عددي-ته-ورته ډولونه (لکه `BigInt`) ومنئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isNumeric` یو بولین-بېرته‌ورکوونکی predicate دی؛ دا د runtime چک په توګه وکاروئ چې ایا یو ارزښت د کتابتون له‌خوا
> تعریف شوي عددي ډولونو ټولګې پورې اړه لري که نه.

### ګټې

- `getTypeOf` او `NUMERIC_TYPES` کاروي څو د عددي پېژندنې منطق په یو ځای کې متمرکز کړي او د کوډبېس په اوږدو کې چکونه یو
  شان وساتي.
- د اسانه څانګه‌بندۍ او د guard-سټایل کارونې لپاره یو ساده بولین (`true`/`false`) بېرته ورکوي.
- د `NUMERIC_TYPES` له مخې څو عددي استازیتوبونه (لکه `number`, `BigInt`) ملاتړ کوي.

## کارونه

### سینټکس

فنکشن:

- `isNumeric(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د عددي ډول لپاره یې باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    //‎‎ v د کتابتون د ډول د قواعدو له مخې عددي ګڼل کېږي
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isNumeric(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isNumeric](‎../_analysis/isNumeric.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 15:54:20 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>