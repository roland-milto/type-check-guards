# isDate

## تشریح

`isDate` ټاکي چې ورکړل شوی ارزښت `Date` دی که نه؛ د `Date` انسټنسونو لپاره `true` او په نورو حالاتو کې `false` بېرته
ورکوي.

### د کارولو بېلګه

نامعلوم ارزښتونه (لکه د غوښتنې ډاټا، د کانفیګ ارزښتونه، یا پارس شوی JSON) اعتبارسنج او تنګ کړئ، مخکې له دې چې د `Date`
عملیات ترسره کړئ لکه فارمیټ کول، پرتله کول، یا `toISOString()` غږول.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isDate` وکاروئ څو `unknown` په رن‌ټایم کې `Date` ته تنګ (narrow) کړئ؛ دا یوازې د حقیقي `Date` انسټنسونو لپاره `true`
> ورکوي (نه د نېټې سټرینګونو لپاره).

### ګټې

- دا د رن‌ټایم یو ساده ګارډ برابروي چې تایید کړي آیا یو ارزښت `Date` دی که نه.
- دا د ډول تېروتنو مخه نیسي، ځکه ډاډمنوي چې یوازې د `Date` انسټنسونه له اعتبارسنجۍ تېر شي.
- دا د نامعلومو داخلونو (لکه د API payloads) د اعتبارسنجۍ لپاره ګټور دی، مخکې له دې چې د نېټې ځانګړي مېتودونه وکارول شي.

## کارونه

### سینټکس

فنکشن:

- `isDate(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د `Date` ډول لپاره باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  //‎‎ input دلته Date دی
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isDate(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isDate](‎../_analysis/isDate.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 15:47:33 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>