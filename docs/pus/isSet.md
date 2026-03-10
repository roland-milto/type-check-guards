# isSet

## تشریح

ټاکي چې ورکړل شوی ارزښت `Set` دی که نه.

### د کارولو بېلګه

له بهرنیو سرچینو څخه ورننوتنې (inputs) تایید کړئ (لکه د JSON پارس کول، د کاروونکي ورننوتنه، یا د درېیم-ګړي API ګانې) څو
ډاډ ترلاسه شي چې ارزښت `Set` دی مخکې له دې چې د `Set` عملیات ترسره کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isSet` وکاروئ څو `unknown` ارزښتونه محدود (narrow) کړئ مخکې له دې چې د `Set` ځانګړي API ګانې لکه `.add`, `.has`, یا
`.size` وغواړئ.

### ګټې

- د `Set` کېدو د تایید لپاره یو ساده د چلولو-وخت (runtime) چک برابروي.
- د ډول (type) تېروتنو مخه نیسي، ځکه چې کله یو ارزښت `Set` نه وي نو ژر پرېکړه/څانګه بندي (branching) ممکنوي.
- له هر ډول `Set` منځپانګې سره کار کوي (تش یا ډک) او په ثابت ډول `true`/`false` بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isSet(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې باید وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isSet } from "@type-check/guards";

const a: unknown = new Set([1, 2, 3]);
const b: unknown = [1, 2, 3];

if (isSet(a)) {
  //‎‎ a په اجرا کې Set دی
  console.log(a.size);
}

console.log(isSet(b)); //‎ ناسم
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isSet(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isSet](‎../_analysis/isSet.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:11:03 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>