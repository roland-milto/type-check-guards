# isWeakSet

## تشریح

ټاکي چې ورکړل شوی `value` د شيانو `WeakSet` دی که نه.

### د کارولو بېلګه

`isWeakSet` هغه وخت وکاروئ چې بې‌ډوله (untyped) ورودي منئ (لکه د بهرنيو API ګانو، متحرک کانفيګوريشن، يا `unknown`
ارزښتونو څخه) او اړتيا لرئ چې د `WeakSet` ځانګړو عملياتو تر کارولو مخکې يې `WeakSet` والی تاييد کړئ.

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `isWeakSet` وکاروئ څو يو `unknown` ارزښت په رنټایم کې `WeakSet<object>` ته تنګ (narrow) کړئ؛ يادونه: `WeakSet` يوازې د
> شيانو (object) مراجعې ساتلی شي.

### ګټې

- دا چټک او ساده رنټایم چک برابروي چې ايا يو ارزښت `WeakSet` دی که نه.
- د ډول تېروتنو مخه نيسي، ځکه ډاډمنوي چې يوازې د `WeakSet` نمونې همداسې وپېژندل شي.
- له هر ډول `unknown` ورودي سره کار کوي او روښانه بولين پايله (`true`/`false`) بېرته ورکوي.

## کارونه

### سینټکس

فنکشن:

- `isWeakSet(value)`

پارامېټرونه:

- `value`: هغه ارزښت چې بايد وکتل شي.

### د فنکشن محلي امپورټ

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); //‎ رښتیا
console.log(isWeakSet(b)); //‎ ناسم

if (isWeakSet(a)) {
  //‎‎ a په رنټایم کې WeakSet دی
}
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.isWeakSet(value)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [isWeakSet](‎../_analysis/isWeakSet.md‎)

<br>

---

<small>دا فایل په 30 January 2026 at 14:19:00 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>