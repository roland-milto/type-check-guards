# isTrue

## تشریح

`isTrue` معلوموي چې ورکړل شوی ارزښت په سخت ډول له `true` سره برابر دی که نه.

### د کارولو بېلګه

`isTrue` د flags، feature toggles، يا configuration ارزښتونو د اعتبار لپاره وکاروئ، چېرته چې يوازې لفظي `true` بايد ومنل
شي او هر څه نور بايد د `false` په توګه وبلل شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isTrue` هغه وخت وکاروئ چې يوازې د بولين لفظي `true` منل غواړئ، نه يوازې truthy ارزښتونه.

### ګټې

- د بولين لفظي `true` لپاره سخت چک برابروي (بې له coercion).
- `true` له truthy ارزښتونو لکه `1`، `"true"`، يا `{}` څخه په بېلوالي کې مرسته کوي.
- ساده، د اټکل وړ چلند چې د guards او validation pipelines لپاره مناسب دی.

## کارونه

### سینټکس

فنکشن:

- `isTrue(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      //‎ رښتیا
const b = isTrue(1);         //‎ ناسم
const c = isTrue("true");   //‎ ناسم

if (isTrue(a)) {
  //‎‎ a دلته رښتیا دی
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isTrue(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isTrue](‎../_analysis/isTrue.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:46:01 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>