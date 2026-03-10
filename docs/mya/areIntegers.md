# areIntegers

## ဖော်ပြချက်

`areIntegers` သည် ပေးထားသော array ထဲရှိ element အားလုံးက ကိန်းပြည့်များ ဟုတ်/မဟုတ်ကို သတ်မှတ်ပြီး၊ ဟုတ်လျှင် `true` ကို
ပြန်ပေးကာ မဟုတ်လျှင် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

IDs, counters, pagination offsets, သို့မဟုတ် array indices ကဲ့သို့ ကိန်းပြည့်တန်ဖိုးများ၏ filled list လိုအပ်သော logic
များတွင်၊ အသုံးပြုသူပေးသော သို့မဟုတ် ပြင်ပမှလာသော ဒေတာ (ဥပမာ—query parameters, JSON payloads, CSV rows) ကို အတည်ပြုရန်
`areIntegers` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown[]` input များကို ကိန်းပြည့်များသာ ပါဝင်သော `number[]` အဖြစ် သဘောထားမီ runtime guard အဖြစ် `areIntegers` ကို
> အသုံးပြုပါ။ `false` ပြန်လာပါက input သည် filled array မဟုတ်နိုင်သလို၊ ကိန်းပြည့်မဟုတ်သော တန်ဖိုး အနည်းဆုံးတစ်ခု
> ပါဝင်နေသည်။

### အားသာချက်များ

- အချက်အလက်တိုင်းက ကိန်းပြည့် (integer) ဖြစ်တဲ့အခါမှသာ `true` ကို ပြန်ပေးပြီး၊ မဟုတ်ရင် `false` ကို ပြန်ပေးသည်။
- ကိန်းပြည့်သာ အသုံးပြုနိုင်တဲ့ လုပ်ဆောင်ချက်များ (ဥပမာ—indexing, counts, IDs) ကို လုပ်ဆောင်မီ မသေချာသော input ကို
  စစ်ဆေးအတည်ပြုရန် ကူညီသည်။
- အမြန်ပျက်ကွက် (fails fast) လုပ်သည်—ကိန်းပြည့်မဟုတ်သော element တစ်ခုကို တွေ့သည်နှင့် စစ်ဆေးမှုကို ချက်ချင်းရပ်တန့်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areIntegers(array)`

ပါရာမီတာများ:

- `array`: ကိန်းပြည့် element များ ပါဝင်/မပါဝင် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // မှန်
console.log(areIntegers(b)); // မှန်
console.log(areIntegers(c)); // မမှန်

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areIntegers(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:59:31 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>