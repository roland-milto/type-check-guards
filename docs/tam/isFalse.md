# isFalse

## விளக்கம்

`isFalse` என்பது கொடுக்கப்பட்ட மதிப்பு boolean literal `false`-க்கு கடுமையாக (strict) சமமா என்பதைச் சரிபார்க்கிறது.

### பயன்பாட்டு நிகழ்வு

அறியப்படாத தரவை (எ.கா., JSON, query params, அல்லது user input) சரிபார்க்கும்போது, வெளிப்படையான boolean மதிப்பு `false`
மட்டுமே செல்லுபடியாகும் flag ஆக கருதப்பட வேண்டும்; மற்ற அனைத்தும் நிராகரிக்கப்பட வேண்டும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `false` என்ற literal-ஐ மட்டும் ஏற்கவும், மற்ற எல்லா falsy மதிப்புகளையும் நிராகரிக்கவும் வேண்டியபோது `isFalse`-ஐ
> பயன்படுத்துங்கள்; இது `value === false` என்றால் மட்டுமே `true`-ஐ திருப்பும்.

### நன்மைகள்

- கட்டாய மாற்றம் (coercion) இன்றி boolean literal `false`-க்கு கடுமையான (strict) சரிபார்ப்பை வழங்குகிறது.
- `0`, `""`, `null`, மற்றும் `undefined` போன்ற பிற falsy மதிப்புகளிலிருந்து `false`-ஐ வேறுபடுத்த உதவுகிறது.
- அறியப்படாத உள்ளீட்டை சரிபார்க்கும்போது நோக்கத்தை வெளிப்படையாக காட்டுவதால் வாசிப்புத் தெளிவை மேம்படுத்துகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isFalse(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // இங்கே input துல்லியமாக false ஆகும்
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isFalse(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 16:44:41 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>