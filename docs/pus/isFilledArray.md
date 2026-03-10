# isFilledArray

## تشریح

ګوري چې `value` اراې ده او لږ تر لږه يو عنصر لري که نه، او `true` يا `false` بېرته ورکوي.

### د کارولو بېلګه

د `isFilledArray` څخه د راتلونکو معلوماتو (لکه د API payloads، د فورم ارزښتونه، تنظيمات) د اعتبار لپاره کار واخلئ مخکې
له دې چې پرې تکرار (iterate) وکړئ، لومړي عنصر ته لاسرسی ومومئ، يا داسې منطق پلي کړئ چې لږ تر لږه يو توکي ته اړتيا لري.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isFilledArray` يو runtime guard دی چې بولين بېرته ورکوي؛ دا د دې تر تاييد هاخوا چې اراې تشه نه ده، د عناصرو ډولونه نه
> تنګوي.

### ګټې

- د `Array.isArray` او د اوږدوالي (length) د کتنې په کارولو سره د تش نه اراې لپاره ساده او چټک چک.
- کله چې کوډ فرض کوي اراې لږ تر لږه يو عنصر لري، د runtime تېروتنو مخه نيسي.
- روښانه بولين پايله: د تش نه اراې لپاره `true` او بل ډول لپاره `false` بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isFilledArray(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې کتل کېږي ايا دا تش نه اراې ده که نه.

### د فنکشن محلي امپورټ

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  //‎‎ input په اجرا کې یو تش نه‌وېشلی اراې ده
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isFilledArray(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isFilledArray](‎../_analysis/isFilledArray.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 11:48:40 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>