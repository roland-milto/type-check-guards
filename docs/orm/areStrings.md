# areStrings

## Ibsa

`areStrings` array tokko duwwaa hin taanee fi elementoonni isaa hundi string ta’uu isaa ni sakatta’a; haala sana
keessatti qofa `true` deebisa.

### Haala itti fayyadama

Daataa alaa ykn fayyadamaan kennamu (fkn, query params, JSON payloads, CSV fields) mirkaneessuuf, hojii jalqabuu dura
tarree string kan hin duwwaan akka qabdu mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areStrings` fayyadamuun array hin beekamne mirkaneessi dura loojikii string-qofa irratti hojjettu; array duwwaa
> irratti `false` deebisa.

### Faayidaa

- Elementiin hundi akka string ta’e mirkaneessa; array gosa wal-makaa qabu `false` deebisuun ni dida.
- Array duwwaa ni dida; kanaaf `true` jechuun tarree string kan hin duwwaan qofa agarsiisa.
- Hojiiwwan string qofa irratti hojjetaman dura (fkn, `trim`, `toLowerCase`) akka eegumsa runtime saffisaa ta’utti ni
  fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areStrings(value)`

Paaraameetaroota:

- `value`: Expected type `string[]`.

### Galchii faankishinii naannoo

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input yeroo ammaa irratti string[] duwwaa hin taane dha
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areStrings(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Faayiliin kun 30 January 2026 at 13:19:51 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>