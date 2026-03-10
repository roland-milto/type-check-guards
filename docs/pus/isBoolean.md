# isBoolean

## تشریح

ټاکي چې ورکړل شوی ارزښت `boolean` دی که نه.

### د کارولو بېلګه

بهرنۍ يا بې-ډوله (untyped) ډاټا (لکه د چاپېريال متغيرونه، JSON payloads، query parameters) اعتبار کړئ څو ډاډ ترلاسه شي
چې ارزښت `boolean` دی، مخکې له دې چې په شرطي منطق کې ترې استفاده وشي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isBoolean` وکاروئ څو `unknown` تر `boolean` پورې تنګ (narrow) شي، مخکې له دې چې بولين عمليات پرې تطبيق کړئ.

### ګټې

- د `typeof` په کارولو سره ساده او چټک د چلولو-وخت (runtime) چک.
- د بولين-ځانګړې منطق نه مخکې د ناڅرګند (unknown) داخلېدونکي ارزښت په اعتبارولو کې مرسته کوي.
- يو د اټکل کېدونکی `boolean` پايله (`true`/`false`) بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isBoolean(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  //‎‎ input دلته بولين دی
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isBoolean(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isBoolean](‎../_analysis/isBoolean.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:37:43 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>