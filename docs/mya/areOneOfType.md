# areOneOfType

## ဖော်ပြချက်

`areOneOfType` သည် ဗလာမဟုတ်သော array တစ်ခုထဲရှိ element အားလုံးက သတ်မှတ်ထားသော runtime type များထဲမှ
တစ်ခုခုဖြစ်နေသလားကို စစ်ဆေးသည်။

### အသုံးပြုမှုကိစ္စ

ဝင်လာသော data (ဥပမာ parsed JSON) ကို စစ်ဆေးရာတွင် field တစ်ခုက ဗလာမဟုတ်သော array ဖြစ်ရပြီး item များသည် သိရှိထားသော
primitive type များအစုအဝေးတစ်ခုထဲတွင်သာ ကန့်သတ်ထားရမည့်အခါ အသုံးပြုပါ။ Array ဗလာဖြစ်ပါက သို့မဟုတ် ခွင့်မပြုသော type
တစ်ခုခု ပါဝင်ပါက `false` ကို ပြန်ပေးသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> ဤ function သည် boolean ကို ပြန်ပေးပြီး compile time တွင် array element type များကို narrow မလုပ်ပေးပါ။
> ထပ်မံလုပ်ဆောင်မှုများမလုပ်မီ runtime validation အဆင့်အဖြစ် အသုံးပြုပါ။

### အားသာချက်များ

- Array ထဲရှိ element တိုင်းဟာ ခွင့်ပြုထားတဲ့ runtime type အနည်းဆုံးတစ်ခုနဲ့ ကိုက်ညီနေကြောင်း သေချာစေပြီး array
  တစ်ခုလုံး စစ်ဆေးမှုအောင်မြင်မှသာ `true` ကို ပြန်ပေးသည်။
- မမှန်ကန်သော input များကို အစောပိုင်းမှာပဲ ပယ်ချသည်။ `array` သို့မဟုတ် `types` က ဗလာဖြစ်နေပါက၊ သို့မဟုတ် အပြည့်မဖြစ်သော
  array မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။
- Type မျိုးစုံပါဝင်သော collection များ (ဥပမာ number နဲ့ string) ကို `areOneOfType` ကို တစ်ခေါက်ခေါ်ရုံနဲ့
  စစ်ဆေးနိုင်သဖြင့် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `areOneOfType(array, types)`

ပါရာမီတာများ:

- `array`: ပေးထားသော type များနှင့် နှိုင်းယှဉ်စစ်ဆေးရန် element များပါဝင်သော array တစ်ခု။
- `types`: စစ်ဆေးမည့် data type များကို ကိုယ်စားပြုသော string များပါဝင်သည့် array တစ်ခု။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.areOneOfType(array, types)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>ဤဖိုင်ကို 31 January 2026 at 23:37:52 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>