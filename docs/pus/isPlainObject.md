# isPlainObject

## تشریح

ګوري چې ورکړل شوی `value` يو ساده آبجېکټ دی که نه، او که وي `true` بېرته ورکوي، که نه `false`.

### د کارولو بېلګه

دا باوري کوي چې يو `unknown` داخلېدونکی (لکه parsed JSON، بهرنۍ ډاټا، يا د فنکشن ارګومېنټونه) يو ساده آبجېکټ دی مخکې له
دې چې کيلۍ ولوستل شي يا هغه يو typed configuration آبجېکټ ته map شي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isPlainObject` د `unknown` د محدودولو (narrowing) لپاره ګټور دی مخکې له دې چې هغه د record-ته ورته آبجېکټ په توګه
> وکارول شي؛ دا يوازې د هغو ارزښتونو لپاره `true` ورکوي چې داخلي ټګ يې `[object Object]` وي.

### ګټې

- د دې لپاره يو ساده او باوري چک برابروي چې آيا يو ارزښت يو ساده آبجېکټ (يعنې `Object` / `{}`) دی که نه، او `true` يا
  `false` بېرته ورکوي.
- د ساده آبجېکټونو توپير له ارايو، فنکشنونو، `null` او نورو غير-ساده آبجېکټ ډولونو څخه روښانه کوي.
- په TypeScript کې د type guard په توګه ګټور دی، څو د آبجېکټ ځانګړتياوو ته له لاسرسي مخکې `unknown` ارزښتونه محدود (
  narrow) کړي.

## کارونه

### سینټکس

فنکشن:

- `isPlainObject(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې د ساده آبجېکټ حالت لپاره ازمېيل کېږي.

### د فنکشن محلي امپورټ

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  //‎‎ input دلته یو ساده څیز دی
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); //‎ رښتیا
console.log(isPlainObject([])); //‎ ناسم
console.log(isPlainObject(null)); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isPlainObject(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isPlainObject](‎../_analysis/isPlainObject.md‎)

<br>

---

<small>دا فایل په 6 February 2026 at 12:19:34 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>