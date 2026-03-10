# areIntegers

## تفصیل

`areIntegers` یہ طے کرتا ہے کہ دیے گئے array کے تمام عناصر عددِ صحیح ہیں یا نہیں؛ اگر ہیں تو `true` اور ورنہ `false`
واپس کرتا ہے۔

### استعمال کا معاملہ

`areIntegers` کو صارف کی فراہم کردہ یا بیرونی ڈیٹا (مثلاً query parameters، JSON payloads، CSV rows) کی توثیق کے لیے
استعمال کریں جب آپ کی منطق کو عددِ صحیح قدروں کی filled فہرست درکار ہو، جیسے IDs، counters، pagination offsets، یا array
indices۔

> **TypeScript صارفین کے لیے نوٹ:**
>
> `areIntegers` کو `unknown[]` اِن پٹس کے لیے رن ٹائم گارڈ کے طور پر استعمال کریں، اس سے پہلے کہ انہیں صرف عددِ صحیح پر
> مشتمل `number[]` سمجھ کر استعمال کریں۔ اگر یہ `false` واپس کرے تو اِن پٹ یا تو filled array نہیں ہے یا اس میں کم از کم
> ایک غیر عددِ صحیح قدر موجود ہے۔

### فوائد

- `true` صرف اسی وقت واپس کرتا ہے جب ہر عنصر ایک عددِ صحیح ہو؛ ورنہ `false` واپس کرتا ہے۔
- صرف عددِ صحیح والی کارروائیاں (مثلاً انڈیکسنگ، گنتیاں، IDs) کرنے سے پہلے نامعلوم اِن پٹ کی توثیق میں مدد دیتا ہے۔
- فوراً ناکام ہوتا ہے: جیسے ہی کوئی غیر عددِ صحیح عنصر ملے، چیک کرنا روک دیتا ہے۔

## استعمال

### نحو

فنکشن:

- `areIntegers(array)`

پیرامیٹرز:

- `array`: وہ array جس میں عددِ صحیح عناصر کی جانچ کرنی ہے۔

### لوکل فنکشن امپورٹ

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); //‎ درست
console.log(areIntegers(b)); //‎ درست
console.log(areIntegers(c)); //‎ غلط

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### گلوبل آبجیکٹ امپورٹ

فنکشنز کو گلوبل آبجیکٹ میتھڈز کے طور پر امپورٹ کرنے کے لیے استعمال کریں:

```ts
import "@type-check/guards/register-global-object.mjs";
```

پھر درج ذیل میتھڈ گلوبلی دستیاب ہوگا:

- `Type.areIntegers(array)`

## فنکشن تجزیہ

یہاں ایک جدول کی صورت میں تجزیہ درج ہے کہ فنکشنز میں مختلف پیرامیٹرز دینے پر کیا آؤٹ پٹ بنتا
ہے: [areIntegers](‎../_analysis/areIntegers.md‎)

<br>

---

<small>فائل 31 January 2026 at 01:01:06 (UTC) کو *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** کے استعمال سے *
*[Roland Milto](https://roland-milto.de/)** نے تیار کی۔</small>