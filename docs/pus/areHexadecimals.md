# areHexadecimals

## تشریح

چیک کردا اے کہ اَرے دے سارے عناصر ہیکساڈیسیمل سٹرنگز نیں یا نہیں، صرف اوہناں غیر خالی اَرے لئی `true` واپس کردا اے جتھے
ہر آئٹم درست ہووے۔

### د کارولو بېلګه

`areHexadecimals` نوں یوزر اِن پُٹ یا بیرونی ڈیٹا (جیویں IDs، چیک سمز، یا رنگ دے کوڈ جِنّاں دے اگے '# ' نہ ہووے) نوں
ہیکساڈیسیمل پارسنگ یا ہور پروسیسنگ توں پہلاں ویلیڈیٹ کرن لئی ورتو۔

> **د TypeScript کاروونکو لپاره یادونه:**
>
> `areHexadecimals` نوں نامعلوم اِن پُٹ نوں پارس یا ویلیوز کنورٹ کرن توں پہلاں ویلیڈیٹ کرن لئی ورتو (مثال دے طور تے
`parseInt(value, 16)` توں پہلاں یا BigInt کنورژنز توں پہلاں)۔

### ګټې

- تصدیق کَوی چی ہر عنصر یُو ہیکساڈیسیمل سٹرنگ اے تے صرف اوہدوں `true` واپس کریندا اے جدوں سارے آئٹم میچ کرن۔
- ڈیزائن دے مطابق خالی اَرے نوں رد کردا اے، گُمشدہ اِن پُٹ ڈیٹا لئی `false` واپس کردا اے۔
- اک سادہ بُولین نتیجہ (`true`/`false`) فراہم کردا اے جو گارڈز تے ارلی-ریٹرن ویلیڈیشن لئی مناسب اے۔

## کارونه

### سینټکس

فنکشن:

- `areHexadecimals(array)`

پارامېټرونه:

- `array`: او اَرے جِنّوں ہیکساڈیسیمل سٹرنگ عناصر لئی چیک کیتا جانا اے۔

### د فنکشن محلي امپورټ

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### د شی ګلوبل امپورټ

د فنکشنونو د شی د ګلوبل مېتودونو په توګه د امپورټ لپاره دا وکاروئ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

بيا لاندې مېتود به په ګلوبل ډول موجود وي:

- `Type.areHexadecimals(array)`

## د فنکشن شننه

دلته د جدول په بڼه هغه شننه مستنده شوې ده چې کله بېلابېل پارامېټرونه فنکشنونو ته ورکول کېږي کومه پايله تر لاسه
کېږي: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>دا فایل په 31 January 2026 at 23:07:43 (UTC) کې د *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** په کارولو سره د
**[Roland Milto](https://roland-milto.de/)** له خوا جوړ شو.</small>