# areFinite

## விளக்கம்

`areFinite` என்பது ஒரு மதிப்பு காலியல்லாத வரிசையா, அதன் உறுப்புகள் அனைத்தும் முடிவுடைய எண்களா என்பதைச் சரிபார்த்து,
அப்படியானால் `true` ஐவும் இல்லையெனில் `false` ஐவும் திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

கணக்கீடுகளைச் செய்வதற்கு முன் எண் உள்ளீட்டு வரிசைகளை (எ.கா., chart series, coordinate lists, measurement samples)
சரிபார்த்து, அனைத்து மதிப்புகளும் முடிவுடைய எண்களாக இருக்கும் போது மட்டுமே முடிவு `true` ஆக இருப்பதை
உறுதிப்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> ஒரு வரிசை காலியல்லாததையும் அதில் முடிவுடைய எண்கள் மட்டுமே உள்ளதையும் உறுதிப்படுத்த வேண்டிய போது `areFinite` ஐப்
> பயன்படுத்துங்கள்; காலி வரிசைகளுக்கும் `NaN` அல்லது முடிவிலிகள் உள்ள வரிசைகளுக்கும் இது `false` ஐத் திருப்பும்.

### நன்மைகள்

- உள்ளீடு காலியல்லாத வரிசையாகவும், ஒவ்வொரு உறுப்பும் முடிவுடைய எண்ணாகவும் இருக்கும் போது மட்டுமே `true` ஐத்
  திருப்புகிறது.
- ஒவ்வொரு உறுப்பிற்கும் `isFinite` சரிபார்ப்புகளை நம்பி `Infinity`, `-Infinity`, மற்றும் `NaN` ஆகியவற்றை நிராகரிக்கிறது.
- காவல்கள் மற்றும் சரிபார்ப்பு ஓட்டங்களுக்கு ஏற்ற எளிய boolean முடிவை (`true`/`false`) வழங்குகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areFinite(array)`

அளவுருக்கள்:

- `array`: அதன் அனைத்து உறுப்புகளும் முடிவுடையவையா என்பதைச் சரிபார்க்க வேண்டிய வரிசை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // உண்மை
console.log(areFinite(b)); // பொய்
console.log(areFinite(c)); // பொய்

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areFinite(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 16:37:31 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>