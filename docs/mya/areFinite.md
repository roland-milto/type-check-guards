# areFinite

## ဖော်ပြချက်

`areFinite` သည် တန်ဖိုးတစ်ခုက အလွတ်မဟုတ်သော array ဖြစ်ပြီး ၎င်း၏ element များအားလုံးသည် အကန့်အသတ်ရှိသော ကိန်းဂဏန်းများ (
finite numbers) ဖြစ်/မဖြစ်ကို စစ်ဆေးကာ ဟုတ်လျှင် `true` မဟုတ်လျှင် `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

တွက်ချက်မှုများ မလုပ်မီ ကိန်းဂဏန်း input array များ (ဥပမာ chart series, coordinate lists, measurement samples) ကို
စစ်ဆေးအတည်ပြုရန် အသုံးပြုကာ တန်ဖိုးအားလုံးသည် အကန့်အသတ်ရှိသော ကိန်းဂဏန်းများ ဖြစ်သည့်အခါမှသာ ရလဒ် `true` ဖြစ်ကြောင်း
သေချာစေသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> array တစ်ခုသည် အလွတ်မဟုတ်ပြီး အကန့်အသတ်ရှိသော ကိန်းဂဏန်းများသာ ပါဝင်ကြောင်း သေချာစေလိုသည့်အခါ `areFinite` ကို
> အသုံးပြုပါ။ အလွတ် array များနှင့် `NaN` သို့မဟုတ် infinity များ ပါဝင်သော array များအတွက် `false` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- ထည့်သွင်းထားသောတန်ဖိုးသည် အလွတ်မဟုတ်သော array ဖြစ်ပြီး element တိုင်းသည် အကန့်အသတ်ရှိသော ကိန်းဂဏန်း (finite number)
  ဖြစ်သည့်အခါမှသာ `true` ကို ပြန်ပေးသည်။
- element တိုင်းအတွက် `isFinite` စစ်ဆေးမှုကို အားကိုးခြင်းဖြင့် `Infinity`, `-Infinity`, နှင့် `NaN` ကို ပယ်ချသည်။
- guard များနှင့် validation flow များအတွက် သင့်တော်သော ရိုးရှင်းသော boolean ရလဒ် (`true`/`false`) ကို ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areFinite(array)`

ပါရာမီတာများ:

- `array`: element အားလုံး၏ finiteness ကို စစ်ဆေးရန် array ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // မှန်
console.log(areFinite(b)); // မမှန်
console.log(areFinite(c)); // မမှန်

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // ၆၀
console.log(sumIfFinite([10, NaN, 30])); // null
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areFinite(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 16:36:05 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>