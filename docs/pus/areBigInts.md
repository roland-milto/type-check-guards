# areBigInts

## تشریح

`areBigInts` तय करदा ऐ कि कोई वैल्यू गैर-खाली ऐरे ऐ जिस विच सिरफ `bigint` वैल्यूज़ होण।

### د کارولو بېلګه

अनजाण इनपुट (जिवें पार्स कीती JSON-जिही डेटा, API payloads, या `unknown` टाइप कीते फंक्शन पैरामीटर) दी तसदीक करो तां जो
प्रोसेस करन तोँ पहिलां एह यकीनी होवै कि एह `bigint` वैल्यूज़ दी गैर-खाली ऐरे ऐ; `true` सिरफ ओह्दोँ वापस करदा ऐ जदोँ सारे
तत्व `bigint` होण, नहीं तां `false`।

> **د TypeScript کاروونکو لپاره یادونه:**
>
> अनजाण इनपुट ते `bigint`-सिर्फ ऑपरेशन (जिवें अंकगणित, तुलना) करन तोँ पहिलां रनटाइम गार्ड वजों `areBigInts` इस्तेमाल
> करो।

### ګټې

- यकीनी बनावै कि हर तत्व `bigint` ऐ, ते `true` सिरफ ओह्दोँ वापस करदा ऐ जदोँ पूरी ऐरे मिलदी ऐ।
- डिज़ाइन मुताबिक गैर-ऐरे ते खाली ऐरे नूं रद्द करदा ऐ (`isFilledArray` दे जरिए), ते गलत इनपुट दी गलती नाल कबूलियत तोँ
  बचाव करदा ऐ।
- तेज़ फेल: ज्यों ही कोई गैर-`bigint` तत्व लभदा ऐ, फौरन `false` वापस करदा ऐ।

## کارونه

### سینټکس

فنکشن:

- `areBigInts(array)`

پارامېټرونه:

- `array`: चेक करन आस्तै वैल्यू।

### د فنکشن محلي امپورټ

```ts
import { areBigInts } from "@type-check/guards";

const a: unknown = [10n, 20n];
const b: unknown = [10n, 20];
const c: unknown = [];

console.log(areBigInts(a)); //‎ رښتیا
console.log(areBigInts(b)); //‎ ناسم
console.log(areBigInts(c)); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areBigInts(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areBigInts](‎../_analysis/areBigInts.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:27:13 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>