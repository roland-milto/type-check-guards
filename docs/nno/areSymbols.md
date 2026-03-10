# areSymbols

## Skildring

Sjekkar om ei inndata er ei fylt matrise der elementa alle er symbol, og returnerer `true` eller `false`.

### Brukstilfelle

Valider at eit konfigurasjonsfelt (t.d. ei liste med unike nøklar representerte som symbol) er ei ikkje-tom matrise som
berre inneheld symbol før du brukar det i API-ar som krev `symbol[]`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areSymbols` til å validere ukjend inndata før du handsamar det som `symbol[]`; det returnerer `false` for
> ikkje-matriser og tomme matriser.

### Fordelar

- Returnerer `true` berre når inndata er ein ikkje-tom matrise og kvart element er eit symbol.
- Hindrar falske positive ved å avvise ikkje-matriser og tomme matriser via den interne sjekken for fylt matrise.
- Nyttig som ein typevakt ved køyretid for å validere lister som berre inneheld symbol før vidare handsaming.

## Bruk

### Syntaks

Funksjon:

- `areSymbols(array)`

Parameter:

- `array`: Matrisa som skal sjekkast for symbolelement.

### Lokal funksjonsimport

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  // a er ein array som berre inneheld symbol ved køyretid
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areSymbols(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areSymbols](../_analysis/areSymbols.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:23:03 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>