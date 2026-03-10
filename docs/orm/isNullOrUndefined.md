# isNullOrUndefined

## Ibsa

Gatiin kenname `null` yookaan `undefined` ta’uu isaa ni sakatta’a.

### Haala itti fayyadama

`isNullOrUndefined` fayyadami yeroo `null` fi `undefined` lamaanis akka “gatii hin jiru”tti ilaaluu barbaaddu,
fakkeenyaaf galtee filannoo (optional inputs) mirkaneessuu, payload API sirreessuu (normalize), yookaan gatii dhabamuu
danda’u irratti dereference gochuun dura daandii koodii eeguuf.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isNullOrUndefined` fayyadami gatii dhabame irraa of eeguuf, amaloota seenuu yookaan mala waamuun dura; inni `true`
> kan deebisu `null` fi `undefined` qofaaf.

### Faayidaa

- Iddoo tokko keessatti `null` fi `undefined` adda baasuuf eegumsa ifa ta’e, irra deebi’amee fayyadamamuu danda’u ni
  kenna.
- Booleeana salphaa (`true`/`false`) kan haala (conditions) fi mirkaneessuu (validations) keessatti salphaatti walitti
  makamu ni deebisa.
- Amaloota (properties) seenuu yookaan mala (methods) waamuun dura gatii dhabame (missing values) jiraachuu isaa
  mirkaneessuun dogoggora runtime beekamoo irraa ni ittisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isNullOrUndefined(value)`

Paaraameetaroota:

- `value`: Gatii `null` yookaan `undefined` ta’uu isaa sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // gatii dhabuu
}

console.log(isNullOrUndefined(b)); // dhugaa
console.log(isNullOrUndefined(c)); // soba

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isNullOrUndefined(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 00:34:53 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>