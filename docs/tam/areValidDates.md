# areValidDates

## விளக்கம்

ஒரு array காலியல்லாமல் இருப்பதையும், முழுவதும் செல்லுபடியான `Date` objects-களால் மட்டுமே ஆனதையும் தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

தேதி-அடிப்படையிலான செயல்பாடுகள் (வரிசைப்படுத்தல், வரம்பு சரிபார்ப்புகள், வடிவமைத்தல்) செய்வதற்கு முன், பயனர் வழங்கிய
அல்லது API வழங்கிய arrays-ஐ சரிபார்க்க `areValidDates` ஐப் பயன்படுத்துங்கள்; அனைத்து பதிவுகளும் உண்மையான, செல்லுபடியான
`Date` objects ஆக இருப்பதையும், பட்டியல் காலியாக இல்லாததையும் உறுதி செய்கிறது.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `areValidDates` ஒரு காலியான array-க்கு `false` ஐத் திருப்பும்; இதை ஒரு validation படியாக நம்புவதற்கு முன் array
> காலியல்லாததாக இருக்க வேண்டுமென உறுதி செய்யுங்கள்.

### நன்மைகள்

- ஒவ்வொரு உறுப்பும் செல்லுபடியான `Date` instance ஆக இருக்கும் போது மட்டுமே `true` ஐத் திருப்பும் (`new Date('invalid')`
  போன்ற செல்லாத தேதிகள் இல்லை).
- `false` ஐத் திருப்புவதன் மூலம் காலியான உள்ளீட்டை நிராகரிக்கிறது; இதனால் அர்த்தமுள்ள, காலியல்லாத தேதி பட்டியல்களை
  மட்டுமே நீங்கள் ஏற்க உறுதி செய்கிறது.
- மற்ற சரிபார்ப்புகளுடன் எளிதாக இணைக்கக்கூடிய, எளிய boolean guard-பாணி சரிபார்ப்பை வழங்குகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areValidDates(array)`

அளவுருக்கள்:

- `array`: சரிபார்க்க வேண்டிய array; இதில் `Date` objects இருக்கக்கூடும்.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // சரி
console.log(areValidDates(b)); // தவறு
console.log(areValidDates(c)); // தவறு
console.log(areValidDates(d)); // தவறு

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areValidDates(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 14:34:10 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>