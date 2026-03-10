# areOfType

## ဖော်ပြချက်

ပေးထားသော `array` ထဲရှိ element အားလုံးသည် သတ်မှတ်ထားသော `type` ဖြစ်/မဖြစ်ကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

Array ထဲရှိ element တစ်ခုချင်းစီပေါ်တွင် type အလိုက် လုပ်ဆောင်ချက်များကို လုပ်မီ unknown input (ဥပမာ parsed JSON, API
payloads, user input) ကို အတည်ပြုစစ်ဆေးရန် `areOfType` ကို အသုံးပြုပါ။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `areOfType` သည် type guard ဖြစ်သောကြောင့် TypeScript က `if (areOfType(...)) {}` block အတွင်းမှာ array ကို
`Array<DataTypeOf<T>>` အဖြစ် ကျဉ်းမြောင်းသတ်မှတ်ပေးသည်။

### အားသာချက်များ

- TypeScript type guard တစ်ခုကို ပံ့ပိုးပေးသည်။ `true` ပြန်လာသောအခါ input ကို `Array<DataTypeOf<T>>` အဖြစ်
  ကျဉ်းမြောင်းသတ်မှတ်ပေးသည်။
- Array ထဲရှိ element တစ်ခုချင်းစီကို တောင်းဆိုထားသော runtime type နဲ့ ကိုက်ညီမှု စစ်ဆေးပေးပြီး type မတူညီသော array များ
  ဖြတ်ကျော်သွားခြင်းကို တားဆီးပေးသည်။
- အမြန်ဆုံး မအောင်မြင်စေသည်။ မကိုက်ညီသော element တစ်ခုကို တွေ့သည်နှင့်တပြိုင်နက် `false` ကို ပြန်ပေးသည်။
- ဒီဇိုင်းအရ array မဟုတ်သောအရာများနှင့် အလွတ် array များကို လက်မခံပါ ( `isFilledArray` ပေါ် မူတည်သည် )။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areOfType(array, type)`

ပါရာမီတာများ:

- `array`: စစ်ဆေးရန် array ဖြစ်သည်။
- `type`: Array ထဲရှိ element တစ်ခုချင်းစီနှင့် နှိုင်းယှဉ်စစ်ဆေးမည့် type ဖြစ်သည်။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values ဟာ အခု number[] ဖြစ်သွားပြီ
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // မမှန်

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areOfType(array, type)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 17:10:29 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>