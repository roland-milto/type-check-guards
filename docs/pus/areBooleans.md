# areBooleans

## تشریح

`areBooleans` ګوري چې ورکړل شوی غير-خالي array يواځې boolean ارزښتونه لري که نه؛ که ولري `true` واپس کوي او که نه
`false`.

### د کارولو بېلګه

د کاروونکي له خوا ورکړل شوي يا بهرني ډاټا (لکه JSON payloads، query params، config arrays) اعتبارول، تر څو ډاډ ترلاسه شي
چې يو غير-خالي لېست يواځې booleans لري مخکې له دې چې boolean منطق پرې تطبيق شي يا هغو APIs ته واستول شي چې `boolean[]`
غواړي.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areBooleans` د `unknown[]` د اعتبار لپاره وکاروئ مخکې له دې چې هغه `boolean[]` وبولئ؛ دا د خالي array لپاره `false`
> واپس کوي، نو که خالي لېست بايد اجازه ولري، هغه حالت په څرګنده توګه سمبال کړئ.

### ګټې

- `true` يواځې هغه وخت واپس کوي چې هر عنصر boolean وي او input يو غير-خالي array وي.
- د غلطو مثبتو نتيجو مخه نيسي د خالي array په ردولو سره (`false` واپس کوي).
- د boolean-يواځې عملياتو نه مخکې د runtime guard په توګه ښه کار کوي (لکه `every`, `some`, منطقي reductions).

## کارونه

### سینټکس

فنکشن:

- `areBooleans(array)`

پارامېټرونه:

- `array`: هغه array چې د boolean عناصرو لپاره به وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areBooleans(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areBooleans](‎../_analysis/areBooleans.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:42:12 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>