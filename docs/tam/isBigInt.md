# isBigInt

## விளக்கம்

`isBigInt` கொடுக்கப்பட்ட மதிப்பு `bigint` வகையா என்பதைச் சரிபார்த்து, BigInt அடிப்படை மதிப்புகளுக்கு `true` மற்றும்
இல்லையெனில் `false` ஐத் திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

வகை குறிப்பிடப்படாத மூலங்களிலிருந்து (எ.கா., JSON parsing, பயனர் உள்ளீடு, வெளிப்புற API-கள்) வரும் மதிப்புகளைச்
சரிபார்த்து குறுகலாக்கி, BigInt-க்கு உரிய கணக்கீடுகளை செய்வதற்கு முன் அல்லது BigInt-மட்டும் உள்ள புலங்களில் சேமிப்பதற்கு
முன் பயன்படுத்தவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> BigInt கணிதம் (எ.கா., `+`, `*`) செய்யும் முன் `unknown` ஐ `bigint` ஆக குறுகலாக்க `isBigInt` ஐ பயன்படுத்துங்கள்; இதற்கு
> BigInt operand-கள் தேவை.

### நன்மைகள்

- `bigint` அடிப்படை வகைக்கான எளிய, நம்பகமான இயக்கநேர (runtime) சரிபார்ப்பை வழங்குகிறது.
- BigInt-க்கு மட்டும் உரிய செயல்பாடுகளை செய்வதற்கு முன் `unknown` மதிப்புகளை குறுகலாக்க (narrow) உதவுகிறது.
- தவறான நேர்மறைகளை (false positives) தவிர்க்கிறது: சாதாரண எண்கள், சரங்கள் (strings), மற்றும் பிற வகைகள் `false` ஐத்
  திருப்பும்.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isBigInt(value)`

அளவுருக்கள்:

- `value`: சரிபார்க்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isBigInt } from "@type-check/guards";

const input: unknown = 10n;

if (isBigInt(input)) {
  const doubled = input * 2n;
  console.log(doubled);
} else {
  console.log("Not a bigint");
}

console.log(isBigInt(10n)); // உண்மை
console.log(isBigInt(10));  // பொய்
console.log(isBigInt("10")); // பொய்
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isBigInt(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isBigInt](../_analysis/isBigInt.md)

<br>

---

<small>இந்த கோப்பு 31 January 2026 at 23:33:28 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>