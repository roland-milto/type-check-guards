# isPlainObject

## ဖော်ပြချက်

ပေးထားသော `value` သည် plain object ဟုတ်မဟုတ်ကို စစ်ဆေးပြီး ဟုတ်ပါက `true` မဟုတ်ပါက `false` ကို ပြန်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

`unknown` input (ဥပမာ JSON parse လုပ်ထားသောဒေတာ၊ ပြင်ပဒေတာ၊ သို့မဟုတ် function argument များ) ကို key များဖတ်ခြင်း
သို့မဟုတ် typed configuration object တစ်ခုအဖြစ် map လုပ်ခြင်း မပြုမီ plain object ဟုတ်မဟုတ် အတည်ပြုရန် အသုံးပြုသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isPlainObject` သည် record လို object အဖြစ် ကိုင်တွယ်မီ `unknown` ကို ကျဉ်းမြောင်းသတ်မှတ်ရန် အသုံးဝင်ပြီး၊ internal
> tag သည် `[object Object]` ဖြစ်သော တန်ဖိုးများအတွက်သာ `true` ကို ပြန်ပေးသည်။

### အားသာချက်များ

- `true` သို့မဟုတ် `false` ကို ပြန်ပေးပြီး တန်ဖိုးတစ်ခုက plain object (ဆိုလိုသည်မှာ `Object` / `{}`) ဟုတ်မဟုတ်ကို
  ရိုးရှင်းပြီး ယုံကြည်စိတ်ချရစွာ စစ်ဆေးပေးသည်။
- plain object များကို array များ၊ function များ၊ `null` နှင့် အခြား plain object မဟုတ်သော type များမှ ခွဲခြားသိနိုင်ရန်
  ကူညီပေးသည်။
- object property များကို ဝင်ရောက်အသုံးပြုမီ `unknown` တန်ဖိုးများကို ကျဉ်းမြောင်းသတ်မှတ်ရန် TypeScript တွင် type guard
  အဖြစ် အသုံးဝင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isPlainObject(value)`

ပါရာမီတာများ:

- `value`: plain object အဖြစ်ရှိမရှိ စစ်ဆေးရန် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // ဒီနေရာမှာ input က ရိုးရိုး object ဖြစ်တယ်
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // မှန်
console.log(isPlainObject([])); // မမှန်
console.log(isPlainObject(null)); // မမှန်

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isPlainObject(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>ဤဖိုင်ကို 6 February 2026 at 12:18:42 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>