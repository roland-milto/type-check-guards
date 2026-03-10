# areUndefined

## ဖော်ပြချက်

`areUndefined` သည် ပေးထားသော array ထဲရှိ element တိုင်း `undefined` ဖြစ်မဖြစ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

optional ရလဒ်များစာရင်းထဲတွင် အမှန်တကယ်တန်ဖိုးများ မရှိဘဲ (`undefined` များသာ) ပါဝင်ကြောင်း စစ်ဆေးအတည်ပြုရန်—ဥပမာ lookup
များကို mapping လုပ်ပြီးနောက် မတွေ့သော entry များကို `undefined` အဖြစ် ကိုယ်စားပြုထားသည့်အခါ lookup အားလုံး
မအောင်မြင်ခဲ့ကြောင်း အတည်ပြုလိုသည့်အခါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `unknown[]` ထဲတွင် `undefined` တန်ဖိုးများသာ ပါဝင်ကြောင်း အတည်ပြုရန် လိုအပ်သည့်အခါ `areUndefined` ကို အသုံးပြုပါ;
> အတွင်းပိုင်း `isFilledArray` စစ်ဆေးမှုကြောင့် အလွတ် array များနှင့် array မဟုတ်သော/မမှန်ကန်သော input များအတွက် `false`
> ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `isFilledArray` ကို အသုံးပြုပြီး အချက်အလက်ပါဝင်သော array ဖြစ်ရန် လိုအပ်စေသဖြင့် array မဟုတ်သောအရာများနှင့် အလွတ် array
  များအတွက် `false` ကို ပြန်ပေးသည်။
- အချို့တင်မကဘဲ element တိုင်း `undefined` ဖြစ်ကြောင်းကို သေချာစေပြီး ရည်ရွယ်ချက်ကို ပိုမိုရှင်းလင်းစေသည်။
- မသိရသေးသော input collection များကို စစ်ဆေးအတည်ပြုရာတွင် guard-style predicate အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areUndefined(array)`

ပါရာမီတာများ:

- `array`: `undefined` element များရှိမရှိ စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // မှန်
const r2 = areUndefined(b); // မမှန်
const r3 = areUndefined(c); // မမှန်

// မှတ်ချက်။ အလွတ် array များအတွက် false ကို ပြန်ပေးသည်
const r4 = areUndefined([]); // မမှန်
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areUndefined(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 13:56:57 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>