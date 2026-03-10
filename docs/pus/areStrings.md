# areStrings

## تشریح

`areStrings` ګوري چې اراې ناتشه ده او ټول عناصر يې سټرېنګونه دي؛ يوازې په هماغه حالت کې `true` ستنوي.

### د کارولو بېلګه

بهرنۍ يا د کاروونکي له خوا ورکړل شوې ډاټا (لکه query params، JSON payloads، CSV fields) اعتبارول، څو د پروسس کولو مخکې
ډاډ ترلاسه شي چې د سټرېنګونو يو ناتش لېست لرئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> د نامعلومو اراېګانو د اعتبار لپاره د سټرېنګ-يوازې منطق تر پلي کولو مخکې `areStrings` وکاروئ؛ د تشو اراېګانو لپاره
`false` ستنوي.

### ګټې

- ډاډ ورکوي چې هر عنصر يو سټرېنګ دی او د ګډو-ډولونو اراېګانې د `false` په ستنولو سره ردوي.
- تشې اراې ردوي، نو `true` يوازې د سټرېنګونو د يوې ناتشې لېست نښه ده.
- د سټرېنګ-يوازې عملياتو (لکه `trim`, `toLowerCase`) تر ترسره کولو مخکې د چټک runtime guard په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areStrings(value)`

پارامېټرونه:

- `value`: Expected type `string[]`.

### د فنکشن محلي امپورټ

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  //‎‎ input په اجرا کې یو غیر تش string[] دی
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areStrings(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areStrings](‎../_analysis/areStrings.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:20:10 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>