# isNullOrUndefined

## تشریح

ګوري چې ورکړل شوی ارزښت `null` دی که `undefined`.

### د کارولو بېلګه

`isNullOrUndefined` هغه وخت وکاروئ چې تاسې غواړئ هم `null` او هم `undefined` د “ارزښت نشته” په توګه چلند شي، لکه د
اختیاري داخلونو اعتبارسنجول، د API payloads نورمالول، يا د کوډ لارو ساتنه مخکې له دې چې يو ښايي نشت ارزښت dereference
شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isNullOrUndefined` وکاروئ څو د ځانګړنو ته له لاسرسي يا د مېتودونو له غږولو مخکې د نشتو ارزښتونو پر ضد ګارډ جوړ کړئ؛
> دا يوازې د `null` او `undefined` لپاره `true` بېرته ورکوي.

### ګټې

- د `null` او `undefined` د پېژندلو لپاره په يو ځای کې يو روښانه، بيا-کارېدونکی ګارډ برابروي.
- يو ساده بولين (`true`/`false`) بېرته ورکوي چې په شرطونو او اعتبارسنجونو کې يې يوځای کول اسانه وي.
- د ځانګړنو ته له لاسرسي يا د مېتودونو له غږولو مخکې د نشتو ارزښتونو په چک کولو سره د عامو runtime تېروتنو مخه نيسي.

## کارونه

### سینټکس

فنکشن:

- `isNullOrUndefined(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د `null` يا `undefined` لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  //‎‎ د نشت ارزښت سمبالول
}

console.log(isNullOrUndefined(b)); //‎ رښتیا
console.log(isNullOrUndefined(c)); //‎ دروغ

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isNullOrUndefined(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isNullOrUndefined](‎../_analysis/isNullOrUndefined.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:35:06 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>