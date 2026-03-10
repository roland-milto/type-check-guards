# isNullOrUndefined

## விளக்கம்

கொடுக்கப்பட்ட ஒரு மதிப்பு `null` அல்லது `undefined` ஆக உள்ளதா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

விருப்பமான உள்ளீடுகளைச் சரிபார்ப்பது, API payload-களை இயல்பாக்குவது, அல்லது காணாமல் போகக்கூடிய மதிப்பை dereference
செய்வதற்கு முன் code path-களை பாதுகாப்பது போன்ற சூழல்களில் `null` மற்றும் `undefined` இரண்டையும் “மதிப்பு இல்லை” எனக்
கருத வேண்டியபோது `isNullOrUndefined`-ஐ பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> பண்புகளை அணுகுவதற்கு அல்லது முறைகளை அழைப்பதற்கு முன் காணாமல் போன மதிப்புகளிலிருந்து பாதுகாக்க `isNullOrUndefined`-ஐ
> பயன்படுத்துங்கள்; இது `null` மற்றும் `undefined` க்கு மட்டுமே `true` ஐத் திருப்பும்.

### நன்மைகள்

- `null` மற்றும் `undefined` ஆகியவற்றை ஒரே இடத்தில் கண்டறிய தெளிவான, மீண்டும் பயன்படுத்தக்கூடிய guard-ஐ வழங்குகிறது.
- நிபந்தனைகள் மற்றும் சரிபார்ப்புகளில் எளிதாக இணைக்கக்கூடிய எளிய boolean (`true`/`false`) மதிப்பை திருப்புகிறது.
- பண்புகளை அணுகுவதற்கு அல்லது முறைகளை அழைப்பதற்கு முன் காணாமல் போன மதிப்புகளைச் சரிபார்ப்பதன் மூலம் பொதுவான runtime
  பிழைகளைத் தவிர்க்க உதவுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isNullOrUndefined(value)`

அளவுருக்கள்:

- `value`: `null` அல்லது `undefined` ஆக உள்ளதா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // காணாமல் போன மதிப்பை கையாளவும்
}

console.log(isNullOrUndefined(b)); // true
console.log(isNullOrUndefined(c)); // false

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isNullOrUndefined(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 00:35:29 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>