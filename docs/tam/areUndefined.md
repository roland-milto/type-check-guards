# areUndefined

## விளக்கம்

`areUndefined` வழங்கப்பட்ட ஒரு வரிசையில் உள்ள ஒவ்வொரு உறுப்பும் `undefined` ஆக உள்ளதா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

விருப்பமான முடிவுகளின் பட்டியலில் உண்மையான மதிப்புகள் எதுவும் இல்லாமல் (`undefined` மட்டுமே) இருப்பதைச் சரிபார்க்கவும்;
உதாரணமாக, காணாமல் போன பதிவுகள் `undefined` ஆகக் குறிக்கப்படும் lookup mapping களுக்குப் பிறகு, அனைத்து lookup களும்
தோல்வியடைந்தன என்பதை உறுதிப்படுத்த விரும்பும்போது.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown[]` இல் `undefined` மதிப்புகள் மட்டுமே உள்ளன என்பதை உறுதிப்படுத்த வேண்டியபோது `areUndefined` ஐ
> பயன்படுத்துங்கள்; உள்ளமைந்த `isFilledArray` சரிபார்ப்பின் காரணமாக இது காலியான வரிசைகளுக்கும் வரிசையல்லாத/செல்லாத
> உள்ளீடுகளுக்கும் `false` திருப்புகிறது.

### நன்மைகள்

- `isFilledArray` மூலம் நிரப்பப்பட்ட வரிசை தேவைப்படுவதால், வரிசையல்லாதவற்றுக்கும் காலியான வரிசைகளுக்கும் `false`
  திருப்புகிறது.
- சிலவற்றை மட்டும் அல்ல, ஒவ்வொரு உறுப்பும் `undefined` என்பதைக் உறுதிப்படுத்துகிறது; இதனால் நோக்கம் தெளிவாகிறது.
- அறியப்படாத உள்ளீட்டு தொகுப்புகளை சரிபார்க்கும்போது guard-பாணி predicate ஆக பயனுள்ளது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areUndefined(array)`

அளவுருக்கள்:

- `array`: `undefined` உறுப்புகள் உள்ளதா என்பதைச் சரிபார்க்க வேண்டிய வரிசை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// குறிப்பு: காலியான வரிசைகளுக்கு false ஐத் திருப்பும்
const r4 = areUndefined([]); // false

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areUndefined(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 13:58:13 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>