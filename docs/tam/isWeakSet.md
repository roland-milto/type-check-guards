# isWeakSet

## விளக்கம்

கொடுக்கப்பட்ட `value` பொருட்களின் `WeakSet` ஆக உள்ளதா என்பதை நிர்ணயிக்கிறது.

### பயன்பாட்டு நிகழ்வு

வகையிடப்படாத உள்ளீட்டை (எ.கா., வெளிப்புற API-கள், dynamic configuration, அல்லது `unknown` மதிப்புகள்) ஏற்கும்போது,
`WeakSet`-சார்ந்த செயல்பாடுகளை பயன்படுத்துவதற்கு முன் அது `WeakSet` என்பதை சரிபார்க்க வேண்டியிருந்தால் `isWeakSet`-ஐ
பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> இயக்கநேரத்தில் `unknown` மதிப்பை `WeakSet<object>` ஆக குறுக்க `isWeakSet`-ஐ பயன்படுத்துங்கள்; `WeakSet`-இல் object
> reference-கள் மட்டுமே இருக்க முடியும் என்பதை கவனத்தில் கொள்ளுங்கள்.

### நன்மைகள்

- ஒரு மதிப்பு `WeakSet` ஆக உள்ளதா என்பதை எளிய இயக்கநேரச் சரிபார்ப்பாக வழங்குகிறது.
- `WeakSet` நிகழ்வுகள் மட்டுமே அப்படியே கையாளப்படுவதை உறுதிசெய்து வகை பிழைகளைத் தவிர்க்க உதவுகிறது.
- எந்த `unknown` உள்ளீட்டுடனும் வேலை செய்து தெளிவான boolean முடிவை (`true`/`false`) திருப்பி அளிக்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isWeakSet(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isWeakSet } from "@type-check/guards";

const a: unknown = new WeakSet<object>();
const b: unknown = new Set();

console.log(isWeakSet(a)); // true
console.log(isWeakSet(b)); // false

if (isWeakSet(a)) {
  // a இயக்க நேரத்தில் ஒரு WeakSet ஆகும்
}
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isWeakSet(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isWeakSet](../_analysis/isWeakSet.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 14:19:27 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>