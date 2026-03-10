# areSymbols

## Beskrivelse

Kontrollerer, om et input er et udfyldt array, hvis elementer alle er symboler, og returnerer `true` eller `false`.

### Anvendelsestilfælde

Validér, at et konfigurationsfelt (f.eks. en liste over unikke nøgler repræsenteret som symboler) er et ikke-tomt array,
der kun indeholder symboler, før det bruges i API'er, der kræver `symbol[]`.

> **Bemærkning til TypeScript-brugere:**
>
> Brug `areSymbols` til at validere ukendt input, før du behandler det som `symbol[]`; den returnerer `false` for
> ikke-arrays og tomme arrays.

### Fordele

- Returnerer kun `true`, når inputtet er et ikke-tomt array, og hvert element er et symbol.
- Forhindrer falske positiver ved at afvise ikke-arrays og tomme arrays via den interne kontrol for udfyldt array.
- Nyttig som en runtime type guard til at validere lister, der kun indeholder symboler, før videre behandling.

## Brug

### Syntaks

Funktion:

- `areSymbols(array)`

Parametre:

- `array`: Arrayet, der skal kontrolleres for symbolelementer.

### Lokal import af funktion

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a er et array, der kun indeholder symboler ved kørselstid
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global import af objekt

For at importere funktionerne som globale objektmetoder, brug:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil derefter være globalt tilgængelig:

- `Type.areSymbols(array)`

## Funktionsanalyse

Her er dokumenteret en tabelanalyse af det output, der opstår ved at indsætte forskellige parametre i
funktionerne: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Filen blev oprettet den 30 January 2026 at 14:21:16 (UTC) ved brug af *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** af *
*[Roland Milto](https://roland-milto.de/)**.</small>