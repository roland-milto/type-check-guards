# isBigInt

## تشریح

`isBigInt` ګوري چې ورکړل شوی ارزښت د `bigint` ډول دی که نه؛ د BigInt ابتدايي ارزښتونو لپاره `true` او په نورو حالاتو کې
`false` بېرته ورکوي.

### د کارولو بېلګه

له بې-ډوله سرچينو (لکه د JSON پارس کول، د کارن داخلونه، بهرنۍ APIs) څخه راغلي ارزښتونه اعتبارول او تنګول، تر دې مخکې چې
د BigInt-ځانګړې محاسبې ترسره شي يا په يوازې-BigInt ساحو کې زېرمه شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isBigInt` وکاروئ څو `unknown` تر BigInt حساب (لکه `+`, `*`) مخکې `bigint` ته تنګ کړئ، ځکه دا عمليات د BigInt operands
> ته اړتيا لري.

### ګټې

- د `bigint` ابتدايي ډول لپاره يو ساده او باوري د چلولو-وخت (runtime) چک برابروي.
- د BigInt-يوازې عملياتو تر ترسره کولو مخکې د `unknown` ارزښتونو تنګولو کې مرسته کوي.
- له ناسم مثبتو پايلو څخه مخنيوی کوي: عادي شمېرې، تارونه (strings)، او نور ډولونه `false` بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isBigInt(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); //‎ رښتیا
console.log(isBigInt(10));  //‎ ناسم
console.log(isBigInt("10")); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isBigInt(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isBigInt](‎../_analysis/isBigInt.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:33:11 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>