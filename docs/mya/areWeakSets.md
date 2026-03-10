# areWeakSets

## ဖော်ပြချက်

ထည့်သွင်းမှုသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element တိုင်းသည် `WeakSet` ဖြစ်နေသလားကို စစ်ဆေးကာ အဲဒီအခြေအနေမှာသာ `true`
ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

runtime input (ဥပမာ API များ၊ configuration သို့မဟုတ် အသုံးပြုသူပေးသော ဒေတာ) ကို စစ်ဆေးအတည်ပြု၍ `WeakSet` အပြုအမူပေါ်
မူတည်သော logic ကို ဆက်လက်လုပ်ဆောင်မီ `WeakSet` instance များပါဝင်သော အလွတ်မဟုတ်သည့် စာရင်းတစ်ခု ရှိနေကြောင်း သေချာစေရန်
အသုံးပြုသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areWeakSets` ကို မသိရှိသော input ကို `WeakSet[]` အဖြစ် သတ်မှတ်ပြီး မသုံးမီ အတည်ပြုရန် အသုံးပြုပါ။ အလွတ် array
> များနှင့် array မဟုတ်သောအရာများအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသော array ထဲရှိ element တိုင်းသည် `WeakSet` ဖြစ်ကြောင်း သေချာစေသည်။
- အလွတ် array များအတွက် `false` ကို ပြန်ပေးပြီး ဒေတာမရှိသည့်အခါ မတော်တဆ “အားလုံးမှန်” ဆိုသလို ရလဒ်ထွက်သွားခြင်းကို
  တားဆီးပေးသည်။
- ထည့်သွင်းမှုသည် ဖြည့်ထားသော array မဟုတ်ပါက (`null` အပါအဝင်) `false` ကို ပြန်ပေးခြင်းဖြင့် လုံခြုံစွာ မအောင်မြင်စေသည်။
- `WeakSet` instance များလိုအပ်သော operation များကို လုပ်ဆောင်မီ guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areWeakSets(array)`

ပါရာမီတာများ:

- `array`: `WeakSet` object များဖြစ်/မဖြစ် စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a သည် WeakSet instance များပါဝင်သော မလွတ်အောင် array တစ်ခု ဖြစ်သည်
}

console.log(areWeakSets(a)); // မှန်
console.log(areWeakSets(b)); // မမှန်
console.log(areWeakSets(c)); // မမှန်
console.log(areWeakSets(null as unknown)); // မမှန်
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areWeakSets(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:09:49 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>