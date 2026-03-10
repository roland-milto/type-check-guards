# isUndefined

## تشریح

ګوري چې ورکړل شوی ارزښت `undefined` دی که نه.

### د کارولو بېلګه

د اختیاري داخلونو د ساتنې لپاره، د نشتو ځانګړنو د موندلو لپاره، يا د “نه ورکړل شوی” (`undefined`) او “په څرګند ډول تش” (
`null`) ترمنځ د توپير لپاره `isUndefined` وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> کله چې تاسې په ځانګړي ډول د `undefined` پېژندلو ته اړتيا لرئ (نه `null`)، `isUndefined` وکاروئ. دا خوندي دی ځکه چې پر
`typeof value === "undefined"` تکيه کوي.

### ګټې

- د `typeof` په کارولو سره د `undefined` لپاره يو روښانه او څرګند چک برابروي، او د نه اعلان شويو متغيرونو له امله
  رامنځته کېدونکې څنډيزې پېښې مخنيوی کوي.
- يو ساده بولين پايله (`true`/`false`) بېرته ورکوي چې د ګارډونو، څانګه بندۍ، او د اعتبارسنجۍ منطق لپاره مناسبه ده.
- د `undefined` د نورو “تشو” ارزښتونو لکه `null`, `0`, `""`, يا `NaN` څخه په بېلوالي کې مرسته کوي.

## کارونه

### سینټکس

فنکشن:

- `isUndefined(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isUndefined } from "@type-check/guards";

let x: unknown;

if (isUndefined(x)) {
  //‎‎ x دلته ناڅرګند (undefined) دی
} else {
  //‎‎ x دلته ناڅرګند (undefined) نه دی
}

const a = isUndefined(undefined); //‎ رښتیا
const b = isUndefined(null);      //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isUndefined(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isUndefined](‎../_analysis/isUndefined.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:04:13 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>