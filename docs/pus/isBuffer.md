# isBuffer

## تشریح

ګوري چې یو ارزښت د Node.js `Buffer` دی که نه، او `true` یا `false` بېرته ورکوي.

### د کارولو بېلګه

داخلې په رن‌ټایم کې اعتبارسنجۍ کړئ (لکه د API payloads، دوتنې ډاټا، یا د پیغام بفرونه) څو ډاډ ترلاسه شي چې یو ارزښت
`Buffer` دی مخکې له دې چې پرې پروسس وشي، او په باوري ډول `false` ترلاسه کړئ کله چې له Node.js څخه بهر چلېږي چېرته چې
`Buffer` ښايي موجود نه وي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isBuffer` وکاروئ څو `unknown` ارزښتونه د `Buffer` ته تنګ کړئ مخکې له دې چې د Buffer ځانګړي مېتودونه وغواړئ.

### ګټې

- د Node.js `Buffer` نمونې په خوندي ډول د `Buffer.isBuffer` په کارولو سره پېژني.
- په هغو چاپېریالونو کې چې `Buffer` شتون نه لري `false` بېرته ورکوي، او د رن‌ټایم تېروتنې مخه نیسي.
- له `unknown` داخلې سره کار کوي، نو د رن‌ټایم اعتبارسنجۍ او د ډول تنګولو لپاره مناسب دی.

## کارونه

### سینټکس

فنکشن:

- `isBuffer(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې ازمویل کېږي.

### د فنکشن محلي امپورټ

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // true
console.log(isBuffer(b)); // false

if (isBuffer(a)) {
  //‎‎ a دلته Buffer دی
  console.log(a.toString("utf8"));
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isBuffer(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isBuffer](‎../_analysis/isBuffer.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 16:33:03 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>