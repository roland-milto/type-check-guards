# areNumerics

## ဖော်ပြချက်

`areNumerics` သည် တန်ဖိုးတစ်ခုက အလွတ်မဟုတ်သော array ဖြစ်ပြီး element အားလုံး numeric ဖြစ်/မဖြစ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

စုစုပေါင်း၊ ပျမ်းမျှ စသည့် numeric လုပ်ဆောင်ချက်များကို တွက်ချက်မီ ပြင်ပမှ သို့မဟုတ် type မသတ်မှတ်ထားသော ဒေတာ (ဥပမာ JSON
payloads, query parameters, form input) ကို validate လုပ်ရန် `areNumerics` ကို အသုံးပြုပါ။ input သည် အလွတ်မဟုတ်သော
numeric array ဖြစ်ကြောင်း သေချာစေပြီး မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown` input ကို numeric array အဖြစ် သတ်မှတ်ပြီး မလုပ်ဆောင်မီ guard လုပ်ရန် `areNumerics` ကို အသုံးပြုပါ; array
> မဟုတ်သည့်အခါနှင့် အလွတ် array ဖြစ်သည့်အခါ `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းလာသောတန်ဖိုးသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element အားလုံးက numeric ဖြစ်သည့်အခါမှသာ `true` ကို ပြန်ပေးသည်။
- အမြန်ဆုံးပျက်ကွက်သည် (fails fast): numeric မဟုတ်သော element တစ်ခုကို တွေ့သည့်အချိန်မှာပဲ စစ်ဆေးမှုကို ရပ်ပြီး `false`
  ကို ပြန်ပေးသည်။
- numeric လုပ်ဆောင်ချက်များကို မလုပ်မီ မသိသေးသော input ကို လုံခြုံစွာ validate လုပ်ရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areNumerics(array)`

ပါရာမီတာများ:

- `array`: numeric element များရှိ/မရှိ စစ်ဆေးရန် array။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // မှန်
console.log(areNumerics(b)); // မှန်
console.log(areNumerics(c)); // မမှန်
console.log(areNumerics(d)); // မမှန်
console.log(areNumerics(e)); // မမှန်

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // ၆၀
console.log(sumUnknown([10, "20", 30])); // null
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areNumerics(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 16:06:19 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>