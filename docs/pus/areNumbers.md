# areNumbers

## تشریح

`areNumbers` ګوري چې ايا يو ارزښت يو غير-خالي ارايه ده چې ټول عناصر يې شمېرې دي.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوي يا د API له خوا ورکړل شوي معلومات تصديق کړئ، څو ډاډ ترلاسه شي چې دا د شمېرو يو غير-خالي
ارايه ده، مخکې له دې چې ټوليزونه، اوسطونه، يا نور عددي تجميعونه محاسبه کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areNumbers` وکاروئ څو نامعلومې ارايې د عددي محاسبو تر ترسره کولو مخکې تصديق کړئ؛ دا د خالي ارايو لپاره او هم د هغو
> ارايو لپاره چې هر ډول غير-شمېره ارزښت پکې وي `false` واپس کوي.

### ګټې

- `true` يواځې هله واپس کوي چې داخلېدنه يو غير-خالي ارايه وي او هر عنصر يې يو شمېر وي.
- د خالي ارايو او غير-ارايه داخلېدنو په ردولو سره ناسم مثبتې پايلې مخه نيسي.
- د عددي عملياتو (لکه جمع کول، اوسط اخيستل) نه مخکې د ساتونکي (guard) په توګه ګټور دی، څو د اجرا پر مهال تېروتنې مخه
  ونيول شي.

## کارونه

### سینټکس

فنکشن:

- `areNumbers(array)`

پارامېټرونه:

- `array`: هغه ارايه چې د شمېر عناصرو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areNumbers(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areNumbers](‎../_analysis/areNumbers.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 13:05:44 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>