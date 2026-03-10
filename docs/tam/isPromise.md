# isPromise

## விளக்கம்

கொடுக்கப்பட்ட மதிப்பு `Promise` ஆக உள்ளதா என்பதை தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

பிளகின்கள், டைனமிக் இம்போர்ட்கள், அல்லது தளர்வான-டைப் செய்யப்பட்ட APIகளிலிருந்து திரும்ப வரும் மதிப்புகளை கையாளும் போது
போன்ற சூழல்களில், தெரியாத உள்ளீடுகளை `Promise` ஆக கருதுவதற்கு முன் சரிபார்க்க `isPromise` ஐ பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isPromise` என்பது `instanceof Promise` மூலம் சரிபார்க்கிறது; ஆகவே இது உண்மையான `Promise` இன்ஸ்டன்ஸ்களுக்கு மட்டுமே
`true` ஐ திருப்பி அளிக்கும் (பொதுவான thenables அல்ல).

### நன்மைகள்

- ஒரு மதிப்பு `Promise` ஆக உள்ளதா என்பதை எளிய ரன்டைம் சரிபார்ப்பாக வழங்குகிறது.
- உண்மையான `Promise` இன்ஸ்டன்ஸ் தேவைப்படும் கோடு பாதைகளை பாதுகாக்க உதவுகிறது; கணிக்கக்கூடிய வகையில் `true` அல்லது
  `false` ஐ திருப்பி அளிக்கிறது.
- உண்மையான `Promise` இன்ஸ்டன்ஸ் அவசியம் என்பதால் “thenable” பொருட்களிலிருந்து (எ.கா., `{ then() {} }`) வரும் தவறான
  நேர்மறை முடிவுகளைத் தவிர்க்கிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isPromise(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // உண்மை
console.log(isPromise(b)); // பொய்
console.log(isPromise(123)); // பொய்
console.log(isPromise(null)); // பொய்

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isPromise(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:54:29 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>