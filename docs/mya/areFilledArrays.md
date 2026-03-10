# areFilledArrays

## ဖော်ပြချက်

`areFilledArrays` သည် two-dimensional array တစ်ခု အလွတ်မဟုတ်ကြောင်းနှင့် ၎င်း၏ subarray အားလုံး အလွတ်မဟုတ်ကြောင်းကို
စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

ဇယားပုံစံ သို့မဟုတ် matrix ပုံစံ input (ဥပမာ CSV rows, grid data, grouped results) ကို အတည်ပြုရန် `areFilledArrays` ကို
အသုံးပြုပါ၊ ထို့ကြောင့် အနည်းဆုံး subarray တစ်ခုရှိပြီး subarray များထဲတွင် အလွတ်မရှိကြောင်းကို လုံခြုံစွာ ယူဆနိုင်သည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> 2D array တစ်ခုတွင် အနည်းဆုံး row တစ်ခုရှိပြီး row တစ်ခုချင်းစီတွင် အနည်းဆုံး element တစ်ခုရှိကြောင်းကို iterate
> လုပ်ခြင်း သို့မဟုတ် index ဖြင့် ဝင်ရောက်မလုပ်မီ သေချာစေရန် `areFilledArrays` ကို အသုံးပြုပါ။

### အားသာချက်များ

- အပြင်ဘက် array သည် အလွတ်မဟုတ်ကြောင်းနှင့် အတွင်းဘက် array တစ်ခုချင်းစီလည်း အလွတ်မဟုတ်ကြောင်းကို စစ်ဆေးပေးပြီး
  အခြေအနေနှစ်ခုလုံး ပြည့်မီသည့်အခါမှသာ `true` ကို ပြန်ပေးသည်။
- subarray များအတွင်းရှိ element အမျိုးအစားမရွေး (ဥပမာ number, string, object, nested array) အသုံးပြုနိုင်သည်၊
  အကြောင်းမှာ element အကြောင်းအရာကို မစစ်ဘဲ array “ပြည့်နေမှု” အခြေအနေကိုသာ စစ်ဆေးသောကြောင့် ဖြစ်သည်။
- နှစ်ဖက်မြင်ဒေတာကို ကိုင်တွယ်မလုပ်ဆောင်မီ guard အဖြစ် သုံးရန် သင့်တော်သော ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`)
  ကို ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areFilledArrays(array)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးရန် two-dimensional array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // မှန်
console.log(areFilledArrays(b)); // မှန်
console.log(areFilledArrays(c)); // မှန်
console.log(areFilledArrays(d)); // မမှန်
console.log(areFilledArrays(e)); // မမှန်
console.log(areFilledArrays(f)); // မမှန်

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areFilledArrays(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 11:57:52 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>