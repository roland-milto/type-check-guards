# areFloats

## ဖော်ပြချက်

`areFloats` သည် ပေးထားသော array သည် အလွတ်မဟုတ်ဘဲ ၎င်း၏ element အားလုံးသည် float များဖြစ်ကြောင်း စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

JSON၊ query parameters သို့မဟုတ် ပြင်ပ API များမှ `unknown[]` ကို လက်ခံရရှိသည့်အခါ `areFloats` ကို သုံးပါ။ ထို့နောက်
ပျမ်းမျှတွက်ချက်ခြင်း၊ interpolation သို့မဟုတ် စာရင်းကိန်းဆိုင်ရာတွက်ချက်မှုများကဲ့သို့သော ကိန်းဂဏန်း logic များကို
လုပ်ဆောင်မီ item တစ်ခုချင်းစီသည် float ဖြစ်ပြီး array သည် အလွတ်မဟုတ်ကြောင်း သေချာစေရန် လိုအပ်သည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areFloats` ကို `unknown[]` ကို float များသာ ပါဝင်သော `number[]` အဖြစ် သတ်မှတ်အသုံးပြုမီ guard အဖြစ် သုံးပါ; အလွတ်
> array များနှင့် float မဟုတ်သော element တစ်ခုခု ပါရှိပါက `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသောတန်ဖိုးသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element အားလုံးသည် float ဖြစ်သည့်အခါမှသာ `true` ကို ပြန်ပေးသည်။
- အမြန်ဆုံး မအောင်မြင်စေသည်: float မဟုတ်သော element တစ်ခုကို တွေ့သည့်အချိန်တင် `false` ကို ချက်ချင်း ပြန်ပေးသည်။
- float အထူးပြုတွက်ချက်မှုများကို လုပ်ဆောင်မီ မသိရသေးသော input ကို အတည်ပြုစစ်ဆေးရန် ကူညီပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areFloats(array)`

ပါရာမီတာများ:

- `array`: float element များရှိမရှိ စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // မှန်
console.log(areFloats(b)); // မမှန်
console.log(areFloats(c)); // မမှန်

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areFloats(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 15:58:33 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>