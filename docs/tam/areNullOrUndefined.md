# areNullOrUndefined

## விளக்கம்

கொடுக்கப்பட்ட வரிசையில் உள்ள அனைத்து உருப்படிகளும் `null` அல்லது `undefined` ஆக உள்ளனவா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

செயலாக்கத்தைத் தவிர்க்கலாமா அல்லது “மதிப்புகள் வழங்கப்படவில்லை” என்ற நிலையை காட்டலாமா என்பதை முடிவு செய்வதற்கு முன்,
விருப்பத் துறைகளின் பட்டியலில் உண்மையான மதிப்புகள் எதுவும் இல்லையா ( `null`/`undefined` மட்டுமே உள்ளதா) என்பதைச்
சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> ஒரு வரிசையில் காணாமல் போன மதிப்புகள் (`null`/`undefined`) மட்டுமே உள்ளனவா என்பதை உறுதிப்படுத்த வேண்டிய போது
`areNullOrUndefined` ஐப் பயன்படுத்துங்கள். காலியான வரிசைக்கு இது `false` ஐத் திருப்பும் என்பதை கவனிக்கவும்.

### நன்மைகள்

- ஒவ்வொரு உருப்படியும் `null` அல்லது `undefined` ஆக இருக்கும் போது மட்டுமே `true` ஐத் திருப்பும்.
- காலியான வரிசைகளுக்கு `false` ஐத் திருப்புகிறது; இதனால் “தரவு இல்லை” என்பதையும் “அனைத்தும் காணாமல் போன மதிப்புகள்”
  என்பதையும் வேறுபடுத்த உதவுகிறது.
- `unknown[]` உடன் வேலை செய்கிறது; ஆகவே வகைகளை குறுக்குவதற்கு முன் பயன்படுத்துவது பாதுகாப்பானது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areNullOrUndefined(array)`

அளவுருக்கள்:

- `array`: சரிபார்க்க வேண்டிய வரிசை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areNullOrUndefined(array)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 00:31:39 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>