# arePrimitives

## விளக்கம்

`arePrimitives` என்பது வழங்கப்பட்ட, காலியல்லாத array-இல் உள்ள அனைத்து உறுப்புகளும் primitive வகைகளா என்பதை மதிப்பீடு
செய்கிறது.

### பயன்பாட்டு நிகழ்வு

வரும் தரவு (எ.கா., query parameters, CSV row values, அல்லது IDs/tags பட்டியல்) objects இல்லாமல் primitive மதிப்புகள்
மட்டுமே கொண்டுள்ளதா என்பதை, serialize செய்வதற்கு முன், hashing, logging, அல்லது objects பெறக்கூடாத API-களுக்கு
அனுப்புவதற்கு முன் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> மேலும் செயலாக்கத்திற்கு முன் `unknown[]`-இல் primitive மதிப்புகள் (string, number, bigint, boolean, symbol, undefined,
> அல்லது null) மட்டுமே உள்ளன என்பதை உறுதி செய்ய வேண்டிய போது `arePrimitives` ஐ பயன்படுத்துங்கள்.

### நன்மைகள்

- ஒவ்வொரு உறுப்பும் primitive மதிப்பாக இருக்கும் போது மட்டுமே `true` ஐத் திருப்புகிறது; இதனால் “objects/functions இல்லை”
  என்ற array-களுக்கான கடுமையான guard ஆக செயல்படுகிறது.
- விரைவாக தோல்வியடையும்: primitive அல்லாத ஒரு உறுப்பை கண்டவுடன் உடனே `false` ஐத் திருப்புகிறது.
- array அல்லாதவற்றுக்கும், காலியான array-களுக்கும் (filled-array check மூலம்) `false` ஐத் திருப்புகிறது; இதனால் தவறான
  input தவறுதலாக ஏற்றுக்கொள்ளப்படுவதைத் தடுக்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `arePrimitives(array)`

அளவுருக்கள்:

- `array`: primitive வகை உறுப்புகள் உள்ளதா என்பதைச் சரிபார்க்க வேண்டிய array.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // உண்மை
const r2 = arePrimitives(b); // உண்மை
const r3 = arePrimitives(c); // பொய்
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.arePrimitives(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 00:06:48 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>