# isNaN

## تشریح

ټاکي چې ورکړل شوی `value` د `number` ډول `NaN` دی که نه، پرته له دې چې تارونه واړوي.

### د کارولو بېلګه

بې‌باوره يا په نرم ډول ټايپ شوي داخلونه (لکه د API payloads، د فورم ارزښتونه، parsed JSON) وڅېړئ څو ځانګړی `NaN` ارزښت
ومومئ او په څرګند ډول يې سمبال کړئ، په داسې حال کې چې غير-شمېرې داخلونه `NaN` ونه ګڼل شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isNaN` هغه وخت وکاروئ چې د ځانګړي عددي ارزښت `NaN` پېژندلو ته اړتيا لرئ، او ډاډ ترلاسه کول غواړئ چې داخل په رښتيا
`number` دی (د تار-څخه-شمېر ته بدلون نشته).

### ګټې

- ګوري چې يو ارزښت `NaN` دی که نه، پرته له دې چې غير-شمېرې (لکه تارونه) په شمېرونو واړوي.
- `true` يوازې د هغو ارزښتونو لپاره بېرته ورکوي چې هم د `number` ډول وي او هم `NaN` وي.
- د `unknown` داخلونو لپاره خوندي دی او د ضمني بدلونونو له امله د غلطو مثبتو پايلو مخه نيسي.

## کارونه

### سینټکس

فنکشن:

- `isNaN(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې کتل کېږي ايا د `number` ډول `NaN` دی که نه.

### د فنکشن محلي امپورټ

```ts
import { isNaN } from "@type-check/guards";

const a: unknown = NaN;
const b: unknown = "NaN";
const c: unknown = 123;

console.log(isNaN(a)); //‎ رښتیا
console.log(isNaN(b)); //‎ ناسم
console.log(isNaN(c)); //‎ ناسم

if (isNaN(a)) {
  //‎‎ a یو شمېر دی او په ځانګړي ډول NaN دی
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isNaN(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isNaN](‎../_analysis/isNaN.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 15:47:47 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>