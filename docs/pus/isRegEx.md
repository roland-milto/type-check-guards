# isRegEx

## تشریح

معلوموي چې ورکړل شوی ارزښت د `RegExp` instance دی که نه.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوي يا متحرک ارزښتونه (لکه configuration، API payloads، plugin inputs) وڅېړئ مخکې له دې چې هغوی
د منظم عبارت (regular expression) په توګه وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isRegEx` وکاروئ څو `unknown` (يا union) ارزښتونه محدود (narrow) کړئ مخکې له دې چې د RegExp ځانګړي ځانګړتياوې يا
> مېتودونه وکاروئ؛ دا يوازې هغه وخت `true` بېرته ورکوي چې ارزښت د `RegExp` instance وي.

### ګټې

- د `RegExp` کېدو د معلومولو لپاره يو ساده رنټايم ډول-ساتونکی (type guard) برابروي.
- کله چې کوډ منظم عبارت (regular expression) تمه کوي، د تېروتنو مخه نيسي (لکه د `test`، `exec` غږولو يا د `source`
  لوستلو نه مخکې).
- له دواړو regex literal ګانو او د `new RegExp(...)` له لارې جوړو شويو instance ګانو سره کار کوي.
- د غير-regex داخلونو لپاره له استثنا (throw) پرته يو روښانه boolean پايله (`true`/`false`) بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isRegEx(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  //‎‎ input دلته RegExp دی
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isRegEx(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isRegEx](‎../_analysis/isRegEx.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:30:50 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>