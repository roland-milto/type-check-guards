# areSymbols

## ဖော်ပြချက်

ထည့်သွင်းထားသောတန်ဖိုးသည် element အားလုံး symbol များဖြစ်သော filled array ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး `true` သို့မဟုတ်
`false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

API များက `symbol[]` ကို လိုအပ်သည့်အခါ အသုံးပြုမီ configuration field တစ်ခု (ဥပမာ၊ symbol များဖြင့် ကိုယ်စားပြုထားသော
unique key များစာရင်း) သည် symbol များသာပါဝင်သော အလွတ်မဟုတ်သော array ဖြစ်ကြောင်းကို အတည်ပြုရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areSymbols` ကို `symbol[]` အဖြစ် သဘောထားမီ မသိရသေးသော input ကို အတည်ပြုရန် အသုံးပြုပါ; array မဟုတ်သောအရာများနှင့်
> အလွတ် array များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသောတန်ဖိုးသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element အားလုံးသည် symbol များဖြစ်သောအခါမှသာ `true` ကို
  ပြန်ပေးသည်။
- အတွင်းပိုင်း filled-array စစ်ဆေးမှုဖြင့် array မဟုတ်သောအရာများနှင့် အလွတ် array များကို ပယ်ချပြီး false positive
  မဖြစ်စေရန် ကာကွယ်ပေးသည်။
- နောက်ထပ်လုပ်ဆောင်မှုများမပြုမီ symbol များသာပါသော စာရင်းများကို အတည်ပြုရန် runtime type guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areSymbols(array)`

ပါရာမီတာများ:

- `array`: symbol element များပါဝင်မှုကို စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // runtime မှာ a က symbol တွေဘဲပါတဲ့ array ဖြစ်တယ်
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areSymbols(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:22:46 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>