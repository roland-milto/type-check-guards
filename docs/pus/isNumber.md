# isNumber

## تشریح

`isNumber` ګوري چې يو ارزښت محدود (finite) او غير-`NaN` عدد دی که نه.

### د کارولو بېلګه

له بې‌باوره سرچينو (فورمونه، query params، JSON payloads) څخه عددي انپټ د محاسبې، ذخيره کولو، يا د حد/رېنج چک کولو مخکې
اعتبارسنج کړئ، څو يواځې محدود عددونه تېر شي (`true`) او نور هر څه `false` واپس کړي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isNumber` د `unknown` ارزښتونو د اعتبارسنجۍ لپاره د حساب (arithmetic) تر کولو مخکې وکاروئ؛ دا `NaN`، `Infinity`، او
`-Infinity` ردوي.

### ګټې

- `true` يواځې د اصلي JavaScript عددونو لپاره واپس کوي (د ډول چک، او د `NaN` او انفینټي ردول).
- د عامو اعتبارسنجۍ تېروتنو مخه نيسي چې پکې `NaN`، `Infinity`، يا `-Infinity` په تېروتنه د عددونو په توګه تېر شي.
- د نامعلوم انپټ لپاره د runtime guard په توګه ښه کار کوي (لکه JSON، د کارن انپټ، خارجي APIs).
- ساده، چټک، او بې له جانبي اغېزو.

## کارونه

### سینټکس

فنکشن:

- `isNumber(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  //‎‎ input یو باوري محدود شمېر دی
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isNumber(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isNumber](‎../_analysis/isNumber.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:10:48 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>