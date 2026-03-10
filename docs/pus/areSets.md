# areSets

## تشریح

ګوري چې ورکړل شوی غير تش اراې يواځې د `Set` نمونې لري که نه؛ که ولري `true` او که نه `false` واپس کوي.

### د کارولو بېلګه

دا تائيد کړئ چې يو ارزښت (لکه د کارن له داخلېدنې، د JSON پارس کولو، يا د بهرنيو APIs څخه) د `Set` شيانو يو غير تش اراې
دی، مخکې له دې چې هر set پروسس کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areSets` وکاروئ څو ناڅرګند داخلېدنه د تکرار (iterating) او د هر عنصر باندې د `Set` APIs (لکه `.size`, `.has`, `.add`)
> د غږولو مخکې تائيد کړئ.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې داخلېدنه يو غير تش اراې وي او هر عنصر يې د `Set` نمونه وي.
- د تشو اراېګانو لپاره د غلطو مثبتو پايلو مخه نيسي، ځکه چې کله اراې هېڅ عناصر ونه لري `false` واپس کوي.
- د هر عنصر باندې د `Set`-ځانګړو عملياتو تر ترسره کولو مخکې د رنټايم ساتونکي (guard) په توګه ګټور دی.

## کارونه

### سینټکس

فنکشن:

- `areSets(array)`

پارامېټرونه:

- `array`: هغه اراې چې د `Set` نمونو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areSets } from "@type-check/guards";

const a = [new Set(), new Set([1, 2]), new Set()];
const b = [new Set(), {}, new Set([1, 2])];
const c: unknown[] = [];

if (areSets(a)) {
  //‎‎ a په رنټایم کې د Set بېلګو یو اراې ده
  for (const s of a) {
    console.log(s.size);
  }
}

console.log(areSets(b)); //‎ ناسم
console.log(areSets(c)); //‎ ناسم

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areSets(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areSets](‎../_analysis/areSets.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 23:15:07 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>