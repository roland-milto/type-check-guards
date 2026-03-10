# areOfType

## விளக்கம்

கொடுக்கப்பட்ட `array` இல் உள்ள அனைத்து கூறுகளும் குறிப்பிடப்பட்ட `type` ஆக உள்ளனவா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

ஒரு வரிசையின் ஒவ்வொரு கூறிலும் வகை-சார்ந்த செயல்பாடுகளை செய்யும் முன், தெரியாத உள்ளீட்டை (எ.கா., parse செய்யப்பட்ட JSON,
API payloads, பயனர் உள்ளீடு) சரிபார்க்க `areOfType` ஐ பயன்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `areOfType` ஒரு type guard என்பதால், TypeScript `if (areOfType(...)) {}` தொகுதியின் உள்ளே வரிசையை
`Array<DataTypeOf<T>>` ஆக குறுக்குகிறது.

### நன்மைகள்

- TypeScript வகை காவலரை வழங்குகிறது: இது `true` ஐத் திருப்பினால், உள்ளீடு `Array<DataTypeOf<T>>` ஆக குறுக்கப்படுகிறது.
- கோரப்பட்ட runtime வகைக்கு எதிராக ஒவ்வொரு கூறையும் சரிபார்த்து, கலப்பு-வகை வரிசைகள் கடந்து செல்லாமல் தடுக்கிறது.
- விரைவாக தோல்வியடைகிறது: பொருந்தாத ஒரு கூறு கிடைத்தவுடன் உடனே `false` ஐத் திருப்புகிறது.
- வடிவமைப்பின்படி வரிசையல்லாதவற்றையும் காலியான வரிசைகளையும் நிராகரிக்கிறது (`isFilledArray` மீது சார்ந்தது).

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `areOfType(array, type)`

அளவுருக்கள்:

- `array`: சரிபார்க்க வேண்டிய வரிசை.
- `type`: வரிசையில் உள்ள ஒவ்வொரு கூறுக்கும் எதிராக சரிபார்க்க வேண்டிய வகை.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values இப்போது number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // தவறு

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.areOfType(array, type)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 17:11:35 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>