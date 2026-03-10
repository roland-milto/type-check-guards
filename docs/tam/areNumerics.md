# areNumerics

## விளக்கம்

`areNumerics` என்பது ஒரு மதிப்பு காலியல்லாத வரிசையாகவும், அதில் உள்ள அனைத்து கூறுகளும் எண்மதிப்பாகவும் உள்ளதா என்பதைச்
சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

கூட்டுத்தொகை, சராசரி, அல்லது பிற எண்செயல்பாடுகளை கணக்கிடுவதற்கு முன் வெளிப்புற அல்லது வகையிடப்படாத தரவை (எ.கா., JSON
payloads, query parameters, form input) சரிபார்க்க `areNumerics` ஐப் பயன்படுத்தவும்; உள்ளீடு காலியல்லாத எண்மதிப்புக்
வரிசை என்பதை உறுதிசெய்து, இல்லையெனில் `false` ஐத் திருப்பும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` உள்ளீட்டை எண்மதிப்புக் வரிசையாகக் கருதுவதற்கு முன் அதை பாதுகாக்க `areNumerics` ஐப் பயன்படுத்தவும்; இது
> வரிசையல்லாதவற்றுக்கும் காலி வரிசைகளுக்கும் `false` ஐத் திருப்பும்.

### நன்மைகள்

- உள்ளீடு காலியல்லாத வரிசையாகவும், ஒவ்வொரு கூறும் எண்மதிப்பாகவும் இருக்கும் போது மட்டுமே `true` ஐத் திருப்பும்.
- விரைவாக தோல்வியடையும்: எண்மதிப்பல்லாத கூறு கிடைத்தவுடன் சரிபார்ப்பை நிறுத்தி `false` ஐத் திருப்பும்.
- எண்செயல்பாடுகளை செய்வதற்கு முன் தெரியாத உள்ளீட்டை பாதுகாப்பாகச் சரிபார்க்க உதவும்.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areNumerics(array)`

அளவுருக்கள்:

- `array`: எண்மதிப்புக் கூறுகள் உள்ளதா எனச் சரிபார்க்க வேண்டிய வரிசை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // சரி
console.log(areNumerics(b)); // சரி
console.log(areNumerics(c)); // தவறு
console.log(areNumerics(d)); // தவறு
console.log(areNumerics(e)); // தவறு

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // null
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areNumerics(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 16:07:43 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>