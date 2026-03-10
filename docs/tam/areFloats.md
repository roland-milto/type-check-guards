# areFloats

## விளக்கம்

`areFloats` கொடுக்கப்பட்ட ஒரு வரிசை நிரப்பப்பட்டதா மற்றும் அதன் அனைத்து உறுப்புகளும் மிதவை எண்களா (floats) என்பதைச்
சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

நீங்கள் ஒரு `unknown[]` ஐ (எ.கா., JSON, query parameters, அல்லது வெளிப்புற APIகளிலிருந்து) பெறும் போது, சராசரி
கணக்கிடுதல், இடைநீக்கம் (interpolation), அல்லது புள்ளியியல் கணக்கீடுகள் போன்ற எண்-சார்ந்த தர்க்கத்தை இயக்குவதற்கு முன்,
அது நிரப்பப்பட்ட வரிசையாகவும் ஒவ்வொரு உருப்படியும் மிதவை எண்ணாகவும் (float) இருப்பதை உறுதிசெய்ய `areFloats` ஐப்
பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown[]` ஐ மிதவை எண்கள் மட்டுமே உள்ள `number[]` எனக் கருதுவதற்கு முன் அதை பாதுகாக்க (guard) `areFloats` ஐப்
> பயன்படுத்துங்கள்; காலியான வரிசைகளுக்கும், மிதவை அல்லாத எந்த உறுப்புக்கும் இது `false` ஐத் திருப்பும்.

### நன்மைகள்

- உள்ளீடு காலியல்லாத ஒரு வரிசையாகவும், அதன் ஒவ்வொரு உறுப்பும் மிதவை எண்ணாகவும் (float) இருக்கும் போது மட்டுமே `true` ஐத்
  திருப்பும்.
- விரைவாகத் தோல்வியடையும்: மிதவை அல்லாத (non-float) உறுப்பு ஒன்று கண்டுபிடிக்கப்பட்டவுடன் உடனே `false` ஐத் திருப்பும்.
- மிதவை-சார்ந்த கணக்கீடுகளைச் செய்வதற்கு முன் தெரியாத உள்ளீட்டை சரிபார்க்க உதவுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areFloats(array)`

அளவுருக்கள்:

- `array`: மிதவை (float) உறுப்புகள் உள்ளதா என்று சரிபார்க்க வேண்டிய வரிசை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areFloats } from "@type-check/guards";

const a: unknown[] = [3.14, 2.71, 1.0];
const b: unknown[] = [3.14, 2];
const c: unknown[] = [];

console.log(areFloats(a)); // உண்மை
console.log(areFloats(b)); // பொய்
console.log(areFloats(c)); // பொய்

function sumFloats(values: unknown): number | null {
  if (!Array.isArray(values) || !areFloats(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumFloats([0.5, 1.25])); // 1.75
console.log(sumFloats([1, 2])); // null
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areFloats(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areFloats](../_analysis/areFloats.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 15:59:54 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>