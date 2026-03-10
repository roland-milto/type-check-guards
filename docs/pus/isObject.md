# isObject

## تشریح

ټاکي چې ورکړل شوی `value` يو `object` دی که نه (له `null` پرته).

### د کارولو بېلګه

`isObject` وکاروئ څو ناڅرګند داخلېدونکي معلومات (لکه parse شوی JSON، د API ځوابونه، د پېښو payloads) د پراپرټيو ته له
لاسرسي مخکې وڅېړئ، تر څو ډاډ ترلاسه شي چې ارزښت object دی او `null` نه دی.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isObject` يو د اجرا پر مهال (runtime) ګارډ دی چې boolean واپسوي؛ دا يو ځانګړي object شکل ته تنګوالی (narrow) نه
> راولي. کله چې قوي ټايپنګ ته اړتيا لرئ، له نورو چکونو سره يې يو ځای کړئ (لکه د ځانګړتيا/پراپرټۍ شتون).

### ګټې

- `true` يواځې د هغو غير-`null` ارزښتونو لپاره واپسوي چې `typeof` يې `"object"` وي.
- د JavaScript هغه عامه تېروتنه مخه نيسي چې پکې `null` به ګنې د يو شي (object) په توګه چلند کېده.
- د ساده شيانو (plain objects) او د جوړ-په-جوړ شيانو د بېلګو (لکه `Date`, `RegExp`) لپاره کار کوي.
- يو ساده او چټک د اجرا پر مهال (runtime) چک دی چې د دفاعي پروګرامنګ او د داخلېدونکو معلوماتو د اعتبار سنجونې لپاره
  مناسب دی.

## کارونه

### سینټکس

فنکشن:

- `isObject(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي چې `object` دی که نه.

### د فنکشن محلي امپورټ

```ts
import { isObject } from "@type-check/guards";

const input: unknown = { a: 1 };

if (isObject(input)) {
  //‎‎ input په اجرا کې يو غير-خالي څيز دی
  console.log("Object detected");
} else {
  console.log("Not an object");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isObject(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isObject](‎../_analysis/isObject.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 00:20:08 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>