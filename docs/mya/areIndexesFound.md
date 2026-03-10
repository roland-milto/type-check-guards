# areIndexesFound

## ဖော်ပြချက်

`areIndexesFound` သည် တန်ဖိုးတစ်ခုက အလွတ်မဟုတ်သော array ဖြစ်ပြီး ၎င်း၏ element များအားလုံးသည် မှန်ကန်သော index
များဖြစ်ကြောင်း စစ်ဆေးသည်။ ကိုက်ညီပါက `true` ကို ပြန်ပေးပြီး မကိုက်ညီပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

အသုံးပြုသူပေးသော သို့မဟုတ် ပြင်ပဒေတာ (ဥပမာ၊ parse လုပ်ထားသော JSON) ကို index များစာရင်းဖြစ်မည်ဟု မျှော်လင့်ထားသည့်အခါ၊
၎င်းကို array များကို access လုပ်ရန် သို့မဟုတ် slice လုပ်ရန် မသုံးမီ အတည်ပြုစစ်ဆေးရန်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areIndexesFound` ကို မသေချာသော input ကို array index များအဖြစ် သတ်မှတ်အသုံးမပြုမီ အတည်ပြုရန် အသုံးပြုပါ။ အလွတ် array
> များနှင့် index မဟုတ်သော တန်ဖိုးများ ပါဝင်သည့် array များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသောတန်ဖိုးသည် အချက်အလက်ပါရှိသော array ဖြစ်ပြီး element တိုင်းသည် မှန်ကန်သော index ဖြစ်သည့်အခါမှသာ `true`
  ကို ပြန်ပေးသည်။
- အမြန်ဆုံး ရပ်တန့်သည်။ index မဟုတ်သော element တစ်ခုကို တွေ့သည်နှင့်တပြိုင်နက် `false` ကို ပြန်ပေးသည်။
- တန်ဖိုးများကို array position သို့မဟုတ် offset အဖြစ် အသုံးမပြုမီ စစ်ဆေးရန် guard အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areIndexesFound(array)`

ပါရာမီတာများ:

- `array`: index စံနှုန်းနှင့် ကိုက်ညီမှုရှိမရှိ စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // မှန်
console.log(areIndexesFound(b)); // မှား
console.log(areIndexesFound(c)); // မှား

if (areIndexesFound(a)) {
  // ဒီနေရာမှာ `a` ကို အညွှန်းကိန်းတွေ ဖြည့်ထားတဲ့ အာရေး (array) ဖြစ်တယ်လို့ အတည်ပြုထားပါတယ်။
  const firstIndex = a[0];
  console.log(firstIndex);
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areIndexesFound(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 00:42:50 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>