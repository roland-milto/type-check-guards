# isPlainObject

## விளக்கம்

கொடுக்கப்பட்ட `value` ஒரு சாதாரண object ஆக உள்ளதா என்பதைச் சரிபார்த்து, இருந்தால் `true`, இல்லையெனில் `false` ஐத்
திருப்புகிறது.

### பயன்பாட்டு நிகழ்வு

`unknown` உள்ளீடு (எ.கா., parse செய்யப்பட்ட JSON, வெளிப்புற தரவு, அல்லது function arguments) ஒரு சாதாரண object என்பதை
உறுதிப்படுத்தி, keys-ஐ வாசிப்பதற்கு முன் அல்லது அதை typed configuration object ஆக map செய்வதற்கு முன் சரிபார்க்கவும்.

> **TypeScript பயனர்களுக்கான குறிப்பு:**
>
> `isPlainObject` என்பது `unknown` ஐ record போன்ற object ஆகக் கருதுவதற்கு முன் அதை குறுகச் செய்ய (narrow) பயனுள்ளது;
> அதன் internal tag `[object Object]` ஆக உள்ள மதிப்புகளுக்கு மட்டுமே இது `true` ஐத் திருப்பும்.

### நன்மைகள்

- ஒரு மதிப்பு சாதாரண (plain) object (அதாவது, `Object` / `{}`) ஆக உள்ளதா என்பதை எளிமையாகவும் நம்பகமாகவும் சரிபார்க்கிறது;
  `true` அல்லது `false` ஐத் திருப்புகிறது.
- சாதாரண object-களை array-கள், function-கள், `null`, மற்றும் பிற non-plain object வகைகளிலிருந்து வேறுபடுத்த உதவுகிறது.
- TypeScript-இல் object பண்புகளை அணுகுவதற்கு முன் `unknown` மதிப்புகளை குறுகச் செய்ய (narrow) ஒரு type guard ஆக
  பயனுள்ளது.

## பயன்பாடு

### சிண்டாக்ஸ்

செயல்பாடு:

- `isPlainObject(value)`

அளவுருக்கள்:

- `value`: சாதாரண object நிலையைச் சோதிக்க வேண்டிய மதிப்பு.

### உள்ளூர் செயல்பாடு இறக்குமதி

```ts
import { isPlainObject } from "@type-check/guards";

const input: unknown = JSON.parse('{"a":1}');

if (isPlainObject(input)) {
  // இங்கே input ஒரு சாதாரண பொருள் ஆகும்
  console.log(Object.keys(input));
} else {
  console.log("Not a plain object");
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false
```

### உலகளாவிய பொருள் இறக்குமதி

செயல்பாடுகளை உலகளாவிய பொருள் முறைகளாக இறக்குமதி செய்ய பயன்படுத்தவும்:

```ts
import "@type-check/guards/register-global-object.mjs";
```

பின்னர் கீழ்க்காணும் முறை உலகளாவியமாக கிடைக்கும்:

- `Type.isPlainObject(value)`

## செயல்பாடு பகுப்பாய்வு

செயல்பாடுகளில் வேறு வேறு அளவுருக்கள் வழங்கும்போது உருவாகும் வெளியீட்டின் அட்டவணை பகுப்பாய்வு இங்கே
ஆவணப்படுத்தப்பட்டுள்ளது: [isPlainObject](../_analysis/isPlainObject.md)

<br>

---

<small>இந்த கோப்பு 6 February 2026 at 12:20:01 (UTC) அன்று *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ஐ பயன்படுத்தி *
*[Roland Milto](https://roland-milto.de/)** மூலம் உருவாக்கப்பட்டது.</small>