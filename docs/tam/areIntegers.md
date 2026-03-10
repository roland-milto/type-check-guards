# areIntegers

## விளக்கம்

`areIntegers` என்பது கொடுக்கப்பட்ட array-இல் உள்ள அனைத்து உறுப்புகளும் முழு எண்களா என்பதை நிர்ணயித்து, அவ்வாறு இருந்தால்
`true` ஐவும் இல்லையெனில் `false` ஐவும் திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

உங்கள் logic-க்கு IDs, counters, pagination offsets, அல்லது array indices போன்ற முழு எண் மதிப்புகளின் filled பட்டியல்
தேவைப்படும் போது, பயனர் வழங்கும் அல்லது வெளிப்புற தரவு (எ.கா., query parameters, JSON payloads, CSV rows) ஆகியவற்றை
சரிபார்க்க `areIntegers`-ஐ பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown[]` உள்ளீடுகளை, முழு எண்கள் மட்டும் கொண்ட `number[]` ஆகக் கருதுவதற்கு முன் runtime guard ஆக `areIntegers`-ஐ
> பயன்படுத்துங்கள். இது `false` ஐத் திருப்பினால், அந்த உள்ளீடு filled array அல்ல அல்லது அதில் குறைந்தது ஒரு முழு எண்
> அல்லாத மதிப்பு உள்ளது.

### நன்மைகள்

- ஒவ்வொரு உறுப்பும் முழு எண் (integer) ஆக இருக்கும் போது மட்டுமே `true` ஐத் திருப்பும்; இல்லையெனில் `false` ஐத்
  திருப்பும்.
- முழு எண்களுக்கு மட்டும் உரிய செயல்பாடுகள் (எ.கா., indexing, counts, IDs) செய்வதற்கு முன் தெரியாத உள்ளீட்டை (unknown
  input) சரிபார்க்க உதவும்.
- விரைவாக தோல்வியடையும் (fails fast): முழு எண் அல்லாத ஒரு உறுப்பைக் கண்டவுடன் சரிபார்ப்பதை உடனே நிறுத்தும்.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areIntegers(array)`

அளவுருக்கள்:

- `array`: முழு எண் உறுப்புகள் உள்ளதா என்று சரிபார்க்க வேண்டிய array.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // சரி
console.log(areIntegers(b)); // சரி
console.log(areIntegers(c)); // தவறு

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areIntegers(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 01:00:42 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>