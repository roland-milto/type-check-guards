# isSymbol

## تشریح

`isSymbol` ټاکي چې ورکړل شوی ارزښت د `symbol` ډول دی که نه؛ د symbol لپاره `true` او بل ډول لپاره `false` بېرته ورکوي.

### د کارولو بېلګه

دا باوري کړئ چې يو `unknown` ارزښت `symbol` دی مخکې له دې چې د يو ځانګړي پېژندونکي (unique identifier)، د راجسټرۍ کلي (
registry key)، يا په شيانو (objects) او نقشو (maps) کې د محاسبه شوي ځانګړتيا د کلي په توګه وکاروئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> له `isSymbol` څخه کار واخلئ څو `unknown` تر `symbol` پورې تنګ کړئ، مخکې له دې چې د symbol اړوند فنکشنونه وغواړئ يا يې
> د محاسبه شوي ځانګړتيا (computed property) د کلي په توګه وکاروئ.

### ګټې

- د JavaScript د `symbol` ابتدايي ډول لپاره يو ساده او باوري د اجرا-وخت (runtime) چک برابروي.
- د `unknown` ارزښتونو تنګولو کې مرسته کوي مخکې له دې چې د symbol-ځانګړو API ګانو څخه کار واخيستل شي يا د کلي (key) په
  توګه زېرمه شي.
- د `typeof` په کارولو سره ناسم مثبتې پايلې مخنيوی کوي، ځکه دا د `symbol` ارزښتونو د پېژندلو معياري (canonical) لاره ده.

## کارونه

### سینټکس

فنکشن:

- `isSymbol(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  //‎‎ input دلته سمبول دی
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isSymbol(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isSymbol](‎../_analysis/isSymbol.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:28:26 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>