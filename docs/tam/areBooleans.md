# areBooleans

## விளக்கம்

`areBooleans` என்பது கொடுக்கப்பட்ட காலியல்லாத array-ல் boolean மதிப்புகள் மட்டுமே உள்ளனவா என்பதைச் சரிபார்த்து,
இருந்தால் `true` ஐவும் இல்லையெனில் `false` ஐவும் திருப்பும்.

### பயன்பாட்டு நிகழ்வு

பயனர் வழங்கும் அல்லது வெளிப்புற தரவை (எ.கா., JSON payloads, query params, config arrays) சரிபார்த்து, காலியல்லாத
பட்டியலில் boolean-கள் மட்டுமே உள்ளனவா என்பதை உறுதிப்படுத்தி, பின்னர் boolean logic ஐப் பயன்படுத்துவதற்கு அல்லது
`boolean[]` எதிர்பார்க்கும் API-களுக்கு அனுப்புவதற்கு.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown[]` ஐ `boolean[]` ஆகக் கருதுவதற்கு முன் அதைச் சரிபார்க்க `areBooleans` ஐப் பயன்படுத்துங்கள்; இது காலியான
> array-களுக்கு `false` ஐத் திருப்பும், ஆகவே காலியான பட்டியல் அனுமதிக்கப்பட வேண்டுமெனில் அந்த நிலையை வெளிப்படையாக
> கையாளுங்கள்.

### நன்மைகள்

- ஒவ்வொரு உறுப்பும் boolean ஆகவும், உள்ளீடு காலியல்லாத array ஆகவும் இருக்கும் போது மட்டுமே `true` ஐத் திருப்பும்.
- காலியான array-களை நிராகரிப்பதன் மூலம் ( `false` ஐத் திருப்பும் ) தவறான நேர்மறை முடிவுகளைத் தடுக்கிறது.
- boolean மட்டும் சார்ந்த செயல்பாடுகளுக்கு முன் runtime guard ஆக நன்றாக செயல்படும் (எ.கா., `every`, `some`, தர்க்கக்
  குறைப்புகள்).

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areBooleans(array)`

அளவுருக்கள்:

- `array`: boolean உறுப்புகள் உள்ளதா என்பதைச் சரிபார்க்க வேண்டிய array.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areBooleans(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 14:42:41 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>