# isPrimitive

## விளக்கம்

`isPrimitive` என்பது கொடுக்கப்பட்ட மதிப்பு primitive (`null`, `undefined`, `boolean`, `number`, `string`, `bigint`,
`symbol`) ஆக உள்ளதா என்பதை தீர்மானிக்கிறது.

### பயன்பாட்டு நிகழ்வு

இயக்கநேரத்தில் உள்ளீடுகளை (எ.கா., API payload புலங்கள், configuration மதிப்புகள், அல்லது பயனர் வழங்கிய தரவு)
சரிபார்த்து, serialize செய்வதற்கு முன், log செய்வதற்கு முன், அல்லது primitive-க்கு மட்டும் உரிய செயல்பாடுகளைப்
பயன்படுத்துவதற்கு முன் ஒரு மதிப்பு primitive என்பதை உறுதிப்படுத்துங்கள்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `unknown` உள்ளீடுகளை object அல்லது function போல கையாளுவதற்கு முன் `isPrimitive`-ஐ guard ஆகப் பயன்படுத்துங்கள்; இது
> primitives க்கு `true` மற்றும் objects மற்றும் functions க்கு `false` திருப்பும்.

### நன்மைகள்

- ஒரு மதிப்பு JavaScript primitive ஆக உள்ளதா என்பதை வேகமாகவும், allocation இல்லாமலும் சரிபார்க்கிறது.
- `null`-ஐ primitive ஆக சரியாகக் கருதுகிறது (`typeof null` என்பது `"object"` என்றாலும்).
- object-க்கு மட்டும் உரிய செயல்பாடுகளை செய்வதற்கு முன் `unknown` மதிப்புகளை குறுகலாக்க உதவுகிறது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isPrimitive(value)`

அளவுருக்கள்:

- `value`: primitive வகையா என்பதைச் சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isPrimitive } from "@type-check/guards";

function format(value: unknown): string {
  if (isPrimitive(value)) {
    return String(value);
  }
  return "[non-primitive]";
}

console.log(isPrimitive(null));
console.log(isPrimitive(42));
console.log(isPrimitive("hello"));
console.log(isPrimitive({}));
console.log(isPrimitive(() => {}));
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isPrimitive(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isPrimitive](../_analysis/isPrimitive.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 23:57:57 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>