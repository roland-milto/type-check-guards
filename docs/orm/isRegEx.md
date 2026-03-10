# isRegEx

## Ibsa

Gatiin kennamu `RegExp` instance ta’uu isaa murteessa.

### Haala itti fayyadama

Gatiiwwan fayyadamaan kennaman yookaan dynamic ta’an (fakkeenyaaf, qindaa’ina, API payloads, plugin inputs) akka ibsa
idileetti itti fayyadamuun dura mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `isRegEx` fayyadamiitii gatii `unknown` (yookaan union) dhiphisuun dura amaloota yookaan mala RegExp irratti addatti
> fayyadamuuf; `true` kan deebisu qofa gatiiwwan `RegExp` instance ta’an irratti.

### Faayidaa

- Gatii yeroo hojii keessatti salphaa ta’e kan gatii tokko `RegExp` ta’uu isaa mirkaneessu ni kenna.
- Yeroo koodiin ibsa idilee (regular expression) eeguu keessatti dogoggora ittisa (fakkeenyaaf, `test`, `exec` waamuun
  dura yookaan `source` dubbisuun dura).
- Lamaanuu regex literals fi wantoota `new RegExp(...)`tiin uumaman waliin ni hojjata.
- Bu’aa boolean ifa ta’e (`true`/`false`) ni deebisa; galtee regex hin taane irratti hin darbatin.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isRegEx(value)`

Paaraameetaroota:

- `value`: Gatii sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input jechuun RegExp dha asitti
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isRegEx(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 23:30:33 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>