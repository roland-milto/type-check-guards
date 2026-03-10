# isOctal

## ဖော်ပြချက်

တန်ဖိုးတစ်ခုသည် မှန်ကန်သော octal literal string (ဥပမာ `0o755`) ဟုတ်မဟုတ်ကို သတ်မှတ်ပေးသည်။

### အသုံးပြုမှုကိစ္စ

parse သို့မဟုတ် convert မလုပ်မီ octal literal string အဖြစ် ဖော်ပြထားရမည့် user input သို့မဟုတ် configuration value
များ (ဥပမာ `0o644` ကဲ့သို့သော file permission mode များ) ကို အတည်ပြုရန် အသုံးပြုသည်။

> **TypeScript အသုံးပြုသူများအတွက် မှတ်ချက်:**
>
> `isOctal` သည် type guard (`value is string`) ဖြစ်သည်။ `true` ရလဒ်ရပြီးနောက် TypeScript သည် စစ်ဆေးထားသော variable ကို
`string` အဖြစ် ကျဉ်းမြောင်းသတ်မှတ်ပေးသည်။

### အားသာချက်များ

- တင်းကျပ်သော type guard ကို ပံ့ပိုးပေးသည်။ input သည် octal literal ဖော်မတ်နှင့် ကိုက်ညီသော string ဖြစ်သောအခါမှသာ `true`
  ကို ပြန်ပေးသည်။
- အလွတ် string များနှင့် အရှေ့/အနောက်တွင် whitespace (ASCII control/space) ပါသော string များကို ပယ်ချပြီး မတော်တဆ
  ကိုက်ညီသွားခြင်းကို လျှော့ချပေးသည်။
- optional sign ကို ပံ့ပိုးပြီး `0o`/`0O` prefix အတွက် case-insensitive ဖြစ်သည်။
- string မဟုတ်သော input များအတွက် throw မလုပ်ဘဲ `false` ကို ပြန်ပေးခြင်းဖြင့် လျော့လျော့လျားလျား ကိုင်တွယ်နိုင်သည်။

## အသုံးပြုခြင်း

### Syntax

လုပ်ဆောင်ချက်:

- `isOctal(value)`

ပါရာမီတာများ:

- `value`: စစ်ဆေးမည့် တန်ဖိုး။

### လုပ်ဆောင်ချက်ကို ဒေသတွင်း အင်ပို့

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // မှန်
console.log(isOctal(b)); // မှန်
console.log(isOctal(c)); // မမှန်
console.log(isOctal(d)); // မမှန်

if (isOctal(a)) {
  // ဒီနေရာမှာ a က string ဖြစ်တယ်
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### အများပြည်သူဆိုင်ရာ အော်ဘျက် အင်ပို့

လုပ်ဆောင်ချက်များကို အများပြည်သူဆိုင်ရာ အော်ဘျက်မက်သဒ်များအဖြစ် အင်ပို့ရန် အောက်ပါတို့ကို အသုံးပြုပါ:

```ts
import "@type-check/guards/register-global-object.mjs";
```

အောက်ပါ မက်သဒ်သည် ထို့နောက် အများပြည်သူဆိုင်ရာ သုံးနိုင်ပါလိမ့်မည်:

- `Type.isOctal(value)`

## လုပ်ဆောင်ချက် ခွဲခြမ်းစိတ်ဖြာမှု

လုပ်ဆောင်ချက်များထဲသို့ ကွဲပြားသော ပါရာမီတာများ ထည့်သွင်းသောအခါ ဖြစ်ပေါ်လာသော ထွက်လဒ်ကို ဇယားပုံစံဖြင့်
ခွဲခြမ်းစိတ်ဖြာထားသည်ကို ဒီနေရာတွင် မှတ်တမ်းတင်ထားသည်: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>ဤဖိုင်ကို 30 January 2026 at 15:42:19 (UTC) တွင် *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ကို အသုံးပြုပြီး
**[Roland Milto](https://roland-milto.de/)** မှ ဖန်တီးခဲ့သည်။</small>