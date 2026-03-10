# isPromise

## تشریح

ټاکي چې ورکړل شوی ارزښت `Promise` دی که نه.

### د کارولو بېلګه

کله چې ناڅرګند داخلونه د `Promise` په توګه کاروئ، د `isPromise` څخه د تایید لپاره استفاده وکړئ؛ لکه د پلګینونو، dynamic
imports، یا په کمزوري ډول ټایپ شوو API ګانو څخه راستنېدونکي ارزښتونه.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isPromise` د `instanceof Promise` له لارې چیک کوي، نو یوازې د ریښتینو `Promise` نمونو لپاره `true` بېرته ورکوي (نه د
> عمومي thenable شیانو لپاره).

### ګټې

- دا چیک کوي چې ایا یو ارزښت `Promise` دی که نه، په ساده ډول د رن‌ټایم په کچه.
- د هغو کوډ لارو ساتنه کوي چې د ریښتینې `Promise` نمونې ته اړتیا لري، او په باوري ډول `true` یا `false` بېرته ورکوي.
- د “thenable” شیانو (لکه `{ then() {} }`) له کبله د غلطو مثبتو پایلو مخه نیسي، ځکه چې د حقیقي `Promise` نمونې غوښتنه
  کوي.

## کارونه

### سینټکس

فنکشن:

- `isPromise(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); //‎ رښتیا
console.log(isPromise(b)); //‎ ناسم
console.log(isPromise(123)); //‎ ناسم
console.log(isPromise(null)); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isPromise(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isPromise](‎../_analysis/isPromise.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:54:06 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>