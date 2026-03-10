# areValidDates

## ဖော်ပြချက်

array တစ်ခုသည် အလွတ်မဟုတ်ပြီး မှန်ကန်သော `Date` objects များသာဖြင့် အပြည့်အစုံ ဖွဲ့စည်းထားခြင်းရှိမရှိကို သတ်မှတ်သည်။

### အသုံးပြုမှုကိစ္စ

date အခြေပြု လုပ်ဆောင်ချက်များ (sorting, range checks, formatting) ကို မလုပ်ဆောင်မီ အသုံးပြုသူပေးထားသော သို့မဟုတ် API
ပေးထားသော arrays များကို စစ်ဆေးရန် `areValidDates` ကို အသုံးပြုပါ၊ ထည့်သွင်းထားသမျှ entry များသည် တကယ့် မှန်ကန်သော
`Date` objects များဖြစ်ပြီး စာရင်းသည် အလွတ်မဟုတ်ကြောင်းကို သေချာစေသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areValidDates` သည် အလွတ် array အတွက် `false` ကို ပြန်ပေးသည်; validation အဆင့်တစ်ခုအဖြစ် ယုံကြည်အသုံးပြုမီ array သည်
> အလွတ်မဟုတ်ရန် ရည်ရွယ်ထားကြောင်း သေချာပါစေ။

### အားသာချက်များ

- အရာဝတ္ထုတိုင်းက မှန်ကန်သော `Date` instance ဖြစ်နေတဲ့အခါမှသာ `true` ကို ပြန်ပေးသည် (`new Date('invalid')` လို
  မမှန်ကန်သော date များ မပါဝင်ရ)။
- အလွတ် input ကို `false` ပြန်ပေးပြီး ပယ်ချသည်၊ ထို့ကြောင့် အဓိပ္ပါယ်ရှိပြီး အလွတ်မဟုတ်သော date စာရင်းများကိုသာ
  လက်ခံနိုင်စေသည်။
- အခြား validation များနှင့် လွယ်ကူစွာ ပေါင်းစပ်အသုံးပြုနိုင်သော ရိုးရှင်းတဲ့ boolean guard ပုံစံ စစ်ဆေးမှုကို ပေးသည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areValidDates(array)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးရန် array ဖြစ်ပြီး `Date` objects များ ပါဝင်နိုင်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // မှန်
console.log(areValidDates(b)); // မှား
console.log(areValidDates(c)); // မှား
console.log(areValidDates(d)); // မှား

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areValidDates(array)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 14:32:57 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>