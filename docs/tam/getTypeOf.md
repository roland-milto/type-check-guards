# getTypeOf

## விளக்கம்

`getTypeOf` என்பது கொடுக்கப்பட்ட மதிப்புக்கான விரிவான, மனிதர் படிக்கக்கூடிய வகை லேபிளை திருப்பி அளிக்கிறது; இதில்
மேம்படுத்தப்பட்ட எண் வகைகளும் குறிப்பிட்ட பொருள் வகைகளும் அடங்கும்.

### பயன்பாட்டு நிகழ்வு

உள்ளீடு சரிபார்ப்பு (input validation) மற்றும் கண்டறிதல்/நோயறிதல் (diagnostics) பணிகளில் வகை கண்டறிதலை ஒரே மாதிரியாக்க
`getTypeOf`-ஐ பயன்படுத்துங்கள்—உதாரணமாக, `nan`-ஐ நிராகரிக்க, `integer` ID-களை மட்டும் ஏற்க, `decimal` போன்ற எண்-சரங்களை
சாதாரண `string`-இலிருந்து வேறுபடுத்திக் கையாள, அல்லது `date` மற்றும் `regexp` போன்ற துல்லியமான பொருள் வகைகளை
பதிவேட்டில் (log) பதிவு செய்ய.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> திரும்ப வரும் வகை `DataTypeAsString | string`. இதை ஒரு விளக்க லேபிளாகக் கருதுங்கள்; கிளைபிரிப்பில் (branching)
`integer`, `float`, `nan`, `array`, `null`, மற்றும் `undefined` போன்ற அறியப்பட்ட literal-களுடன் ஒப்பிடுங்கள்.

### நன்மைகள்

- JavaScript-இன் `typeof`-ஐ விட மேலும் நுணுக்கமான வகை சரத்தை (type string) திருப்பி அளிக்கிறது; `integer`, `float`,
  `nan` போன்ற எண் துணைவகைகளையும் (numeric subtypes) உட்படுத்துகிறது.
- `null` மற்றும் `undefined` ஆகியவற்றைத் தெளிவாகவே `null` மற்றும் `undefined` என வேறுபடுத்துகிறது.
- பொதுவான எண்-சரம் (numeric string) வடிவங்களை கண்டறிந்து, சாதாரண `string` என்பதற்குப் பதிலாக `binary`, `octal`,
  `decimal`, அல்லது `hexadecimal` என அறிவிக்கிறது.
- அரேகளை `array` எனவும் அடையாளம் காண்கிறது; மேலும் `Object.prototype.toString`-ஐ பயன்படுத்தி குறிப்பிட்ட பொருள் வகை
  பெயர்களை (எ.கா., `date`, `regexp`, `map`, `set`) வழங்குகிறது.
- ஒரே மாதிரியான, மனிதர் படிக்கக்கூடிய வகை லேபிள்கள் தேவைப்படும் சரிபார்ப்பு (validation), பதிவேடு (logging), மற்றும்
  பிழைத்திருத்தம் (debugging) பணிகளுக்கு இது மிகவும் பயனுள்ளது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `getTypeOf(value)`

அளவுருக்கள்:

- `value`: தரவு வகையை நிர்ணயிக்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { getTypeOf } from "@type-check/guards";

const samples: unknown[] = [
  42,
  3.14,
  NaN,
  "3.14",
  "0xff",
  "0b1010",
  "0o77",
  "hello",
  null,
  undefined,
  [1, 2, 3],
  new Date(),
  /abc/i,
  new Map(),
  { a: 1 }
];

const results = samples.map((v) => ({ value: v, type: getTypeOf(v) }));
console.log(results);

// எடுத்துக்காட்டு சரிபார்ப்புகள்
if (getTypeOf(42) === "integer") {
  console.log("Got an integer");
}

if (getTypeOf("3.14") === "decimal") {
  console.log("Got a decimal string");
}
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.getTypeOf(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [getTypeOf](../_analysis/getTypeOf.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 13:15:02 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>