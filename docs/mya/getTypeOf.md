# getTypeOf

## ဖော်ပြချက်

`getTypeOf` သည် ပေးထားသော တန်ဖိုးအတွက် အသေးစိတ်ပြီး လူဖတ်လွယ်သော type label ကို ပြန်ပေးပြီး ဂဏန်းအမျိုးအစားခွဲများနှင့်
သီးသန့် object အမျိုးအစားများကိုပါ ထည့်သွင်းဖော်ပြပေးသည်။

### အသုံးပြုမှုကိစ္စ

Input validation နှင့် diagnostics တွင် type detection ကို တစ်ပြေးညီဖြစ်အောင် `getTypeOf` ကို သုံးပါ—ဥပမာ `nan` ကို
ပယ်ချရန်၊ `integer` ID များကိုသာ လက်ခံရန်၊ `decimal` ကဲ့သို့ ဂဏန်း string များကို ရိုးရိုး `string` နှင့် မတူအောင်
ကိုင်တွယ်ရန်၊ သို့မဟုတ် `date` နှင့် `regexp` ကဲ့သို့ တိကျသော object အမျိုးအစားများကို log ထုတ်ရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> ပြန်လာမည့် type သည် `DataTypeAsString | string` ဖြစ်သည်။ ၎င်းကို ဖော်ပြချက် label အဖြစ် သဘောထားပြီး branching
> လုပ်ရာတွင် `integer`, `float`, `nan`, `array`, `null`, `undefined` ကဲ့သို့ သိပြီးသား literal များနှင့် နှိုင်းယှဉ်ပါ။

### အားသာချက်များ

- JavaScript ရဲ့ `typeof` ထက် ပိုမိုအသေးစိတ်တဲ့ type string ကို ပြန်ပေးပြီး `integer`, `float`, `nan` လို
  ဂဏန်းအမျိုးအစားခွဲတွေကိုပါ ထည့်သွင်းဖော်ပြပေးတယ်။
- `null` နဲ့ `undefined` ကို `null` နဲ့ `undefined` အဖြစ် တိတိကျကျ ခွဲခြားပြပေးတယ်။
- ပုံမှန်တွေ့ရတဲ့ ဂဏန်း string ဖော်မတ်တွေကို ရှာဖွေတွေ့ရှိပြီး ရိုးရိုး `string` အစား `binary`, `octal`, `decimal`,
  `hexadecimal` လို့ အစီရင်ခံပေးတယ်။
- array တွေကိုလည်း `array` လို့ သတ်မှတ်ပေးပြီး `Object.prototype.toString` ကို သုံးကာ သီးသန့် object type အမည်တွေ (ဥပမာ
  `date`, `regexp`, `map`, `set`) ကို ပေးနိုင်တယ်။
- တစ်ပြေးညီပြီး လူဖတ်လွယ်တဲ့ type label တွေလိုအပ်တဲ့ validation, logging, debugging အတွက် အလွန်အသုံးဝင်တယ်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `getTypeOf(value)`

ပါရာမီတာများ:

- `value`: ဒေတာအမျိုးအစားကို သတ်မှတ်ရန် စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// ဥပမာ စစ်ဆေးမှုများ
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.getTypeOf(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 13:13:27 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>