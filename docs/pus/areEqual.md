# areEqual

## تشریح

`areEqual` जांचदा ऐ कि ऐरे दे सारे अंश इक दित्ती होई उम्मीद कीती क़ीमत दे बराबर नें या नहीं, ते `true` सिरिफ गैर-खाली
ऐरेआं लई वापस करदा ऐ जिथे हर आइटम मेल खांदा होवे।

### د کارولو بېلګه

एह पक्का करो कि इक लिस्ट विच सिरिफ इक ही मंजूरशुदा क़ीमत होवे (मिसाल वजों, सारे स्टेटस फ्लैग `true` नें, सारे रोल
`"admin"` नें, या सारे अंकी एंट्रीआं किसी लाज़मी स्थिरांक दे बराबर नें) ते खाली इनपुट नूं गैर-मान्य (`false`) समझो।

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areEqual` उस वेल्ले ਵਰतो जदों तुहानूं सख्त सारे-आइटम चेक दी लोड़ होवे; एह खाली ऐरेआं ते हर गैर-ऐरे या गैर-भरी होई
> इनपुट लई `false` वापस करदा ऐ।

### ګټې

- `true` सिरिफ ओह्दो वेल्ले वापस करदा ऐ जदों हर इक अंश उम्मीद कीती क़ीमत दे नाल मेल खांदा होवे; नहीं तां `false` वापस
  करदा ऐ।
- जल्दी फेल: जिवें ही कोई गैर-मेल खांदा अंश लभदा ऐ, चेक करना रोक दिंदा ऐ।
- गलत इनपुट तोں बचाव करदा ऐ, क्यूंकि जदों इनपुट भरी होई ऐरे ना होवे तां `false` वापस करदा ऐ।

## کارونه

### سینټکس

فنکشن:

- `areEqual(value, expected)`

پارامېټرونه:

- `value`: ओह ऐरे जिसदी जांच करनी ऐ।
- `expected`: ओह अंश जिसदे नाल हर ऐरे आइटम दी तुलना करनी ऐ।

### د فنکشن محلي امپورټ

```ts
import { areEqual } from "@type-check/guards";

const allOnes = areEqual([1, 1, 1], 1);
const allTests = areEqual(["test", "test"], "test");
const notAllTwos = areEqual([2, 3, 2], 2);
const emptyIsFalse = areEqual([], 5);

console.log(allOnes, allTests, notAllTwos, emptyIsFalse);
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areEqual(value, expected)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areEqual](‎../_analysis/areEqual.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:52:02 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>