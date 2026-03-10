# areFloats

## تشریح

`areFloats` चेक करदा ऐ के दित्ती गई array भरी होई ऐ ते ओह्दे सारे elements floats नें।

### د کارولو بېلګه

`areFloats` उस वेल्ले ਵਰतो जदों तुहानूं इक `unknown[]` मिलदी ऐ (मसलन JSON, query parameters, जां बाहरी APIs توں) ते
तुहानूं एह यकीनी बनाना होवे के एह इक भरी होई array ऐ जिथे हर item इक float ऐ, इस तोں पह्लां के तुसी averaging,
interpolation, जां statistical calculations वरगा numeric logic चलाओ।

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areFloats` نوں `unknown[]` نوں guard کرن لئی ਵਰتو، اس نوں `number[]` سمجھ کے (जिदे وچ सिरिफ floats होण) इस्तेमाल करन
> توں पह्लां; एह खाली arrays لئی ते किसे वी गैर-float element लئی `false` वापस करदा ऐ।

### ګټې

- `true` सिरिफ ओह्दो वेल्ले वापस करदा ऐ जदों इनपुट इक गैर-खाली array होवे ते हर element इक float होवे।
- जल्दी फेल हो जांदा ऐ: जियां ही कोई गैर-float element लभे, फौरन `false` वापस करदा ऐ।
- Float-खास हिसाब-किताब करन तोں पह्लां अनजाने इनपुट दी तस्दीक करन وچ मदद करदा ऐ।

## کارونه

### سینټکس

فنکشن:

- `areFloats(array)`

پارامېټرونه:

- `array`: Float elements लई चेक करन आस्तै array।

### د فنکشن محلي امپورټ

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); //‎ رښتیا
console.log(areFloats(b)); //‎ ناسم
console.log(areFloats(c)); //‎ ناسم

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); //‎ 1.75
console.log(sumFloats([1, 2])); //‎ null
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areFloats(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areFloats](‎../_analysis/areFloats.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 15:59:25 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>