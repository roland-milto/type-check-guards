# areBuffers

## تشریح

`areBuffers` ګوري چې ورکړل شوی ارزښت يو غير-تش، ډک اراې دی چې هر عنصر يې `Buffer` وي؛ که داسې وي `true` او که نه `false`
بېرته ورکوي.

### د کارولو بېلګه

د راتلونکو chunk اراېګانو (لکه له streamونو، دوتنې پورته کولو، يا شبکيزو پاکټونو څخه) اعتبارسنجونه وکړئ څو ډاډ ترلاسه شي
چې ټولې برخې د `Buffer` نمونې دي، مخکې له دې چې يوځای يې کړئ، ډيکوډ يې کړئ، يا يې کريپټوګرافيکي يا باينري-پروسس کولو
فنکشنونو ته ورکړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areBuffers` وکاروئ څو د `unknown[]` اعتبارسنجونه د Buffer-ځانګړو API ګانو لکه `Buffer.concat` له غږولو مخکې ترسره
> کړئ، او ډاډ ترلاسه کړئ چې فنکشن يوازې هغه وخت `true` بېرته ورکوي چې هر عنصر `Buffer` وي.

### ګټې

- ډاډ ورکوي چې په ورننوت کې هر عنصر د Node.js `Buffer` نمونه وي، او يوازې هغه وخت `true` بېرته ورکوي چې ټول اراې سمون
  ولري.
- ناسم ورننوتونه ژر ردوي، ځکه يو غير-تش، ډک اراې غواړي؛ د تشو اراېګانو يا غير-اراې لپاره `false` بېرته ورکوي.
- د Buffer-يوازې عملياتو تر ترسره کولو مخکې د ساتونکي (guard) په توګه ګټور دی (لکه يوځای کول، هش کول، باينري
  پروتوکولونه).

## کارونه

### سینټکس

فنکشن:

- `areBuffers(array)`

پارامېټرونه:

- `array`: هغه اراې چې د Buffer نمونو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areBuffers(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areBuffers](‎../_analysis/areBuffers.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 16:27:00 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>