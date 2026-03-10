# areObjects

## تشریح

`areObjects` चैक करदा ऐ के दित्ती होई भरी होई ऐरे विच सिरिफ ऑब्जैक्ट ही ने।

### د کارولو بېلګه

जदों तुहानूं कोई अनजाणी ऐरे (मसलन JSON parsing या बाहरी APIs तोں) मिलदी ऐ ते तुसीं iterate करन ते ऑब्जैक्ट प्रॉपर्टीज़
तक पहुंचण तोں पैह्लां एह यकीनी बनाना चाहुंदे ओ के एह खाली न होवे ते हर इक एलिमैंट इक ऑब्जैक्ट होवे, ओह्दो `areObjects`
वर्तो।

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areObjects` नूं `unknown[]` दी तस्दीक लेई वर्तो, आइटमां नूं ऑब्जैक्ट समझ के बरतण तोں पैह्लां; एह खाली ऐरेआں लेई
`false` वापस करदा ऐ।

### ګټې

- `true` सिरिफ ओह्दो वेल्ला वापस करदा ऐ जदों इनपुट इक भरी होई ऐरे होवे ते हर इक एलिमैंट इक ऑब्जैक्ट होवे।
- जिवें ही कोई गैर-ऑब्जैक्ट एलिमैंट लभदा ऐ, ओह्दे नाल ही जल्दी रुक के `false` वापस कर दिंदा ऐ।
- ऑब्जैक्ट-खास ऑपरेशन करन तोں पैह्लां अनजाण इनपुट दी तस्दीक करन विच मदद करदा ऐ।

## کارونه

### سینټکس

فنکشن:

- `areObjects(array)`

پارامېټرونه:

- `array`: ओह ऐरे जिसनूं ऑब्जैक्ट एलिमैंटां लेई चैक कीता जावै।

### د فنکشن محلي امپورټ

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  //‎‎ value د شيانو له ډکو شويو ارايو څخه ده
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areObjects(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areObjects](‎../_analysis/areObjects.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:10:16 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>