# isSymbol

## விளக்கம்

`isSymbol` என்பது கொடுக்கப்பட்ட மதிப்பு `symbol` வகையா என்பதை நிர்ணயித்து, symbols-க்கு `true` மற்றும் இல்லையெனில்
`false` என்பதைத் திருப்பி அளிக்கிறது.

### பயன்பாட்டு நிகழ்வு

ஒரு `unknown` மதிப்பை தனித்த அடையாளங்காட்டி, registry key, அல்லது objects மற்றும் maps-இல் computed property key ஆக
பயன்படுத்துவதற்கு முன் அது `symbol` என்பதைச் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> symbol-தொடர்பான functions-ஐ அழைப்பதற்கு முன் அல்லது அதை computed property key ஆக பயன்படுத்துவதற்கு முன் `unknown`-ஐ
`symbol` ஆக குறுகச் செய்ய `isSymbol`-ஐ பயன்படுத்துங்கள்.

### நன்மைகள்

- JavaScript `symbol` அடிப்படை வகைக்கான எளிய, நம்பகமான இயக்கநேரச் சரிபார்ப்பை வழங்குகிறது.
- symbol-சார்ந்த API-களை பயன்படுத்துவதற்கு முன் அல்லது அதை key-களாக சேமிப்பதற்கு முன் `unknown` மதிப்புகளை குறுகச் செய்ய
  உதவுகிறது.
- `typeof`-ஐ பயன்படுத்துவதன் மூலம் தவறான நேர்மறைகளைத் தவிர்க்கிறது; இது `symbol` மதிப்புகளை கண்டறிய நிலையான முறையாகும்.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isSymbol(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // இங்கே input ஒரு சின்னமாக உள்ளது
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isSymbol(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>இந்த கோப்பு 30 January 2026 at 14:28:55 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>