# areIndexesFound

## Skildring

`areIndexesFound` sjekkar om ein verdi er ei ikkje-tom matrise der alle elementa er gyldige indeksar, og returnerer
`true` dersom dei er det og `false` elles.

### Brukstilfelle

Valider brukaroppgjevne eller eksterne data (t.d. tolka JSON) som er venta å vere ei liste med indeksar, før du bruker
dei til å aksessere eller dele opp matriser.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areIndexesFound` til å validere ukjend inndata før du behandlar elementa som matriseindeksar; funksjonen
> returnerer `false` for tomme matriser og for matriser som inneheld verdiar som ikkje er indeksar.

### Fordelar

- Returnerer `true` berre når inndata er ein utfylt matrise og kvart element er ein gyldig indeks.
- Feilar raskt: returnerer `false` så snart eit element som ikkje er ein indeks blir oppdaga.
- Nyttig som ein vakt før ein bruker verdiar som matriseposisjonar eller forskyvingar.

## Bruk

### Syntaks

Funksjon:

- `areIndexesFound(array)`

Parameter:

- `array`: Matrisa som skal kontrollerast for samsvar med indeksar.

### Lokal funksjonsimport

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // sant
console.log(areIndexesFound(b)); // usant
console.log(areIndexesFound(c)); // usant

if (areIndexesFound(a)) {
  // Her er `a` stadfesta å vere ein fylt matrise med indeksar.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areIndexesFound(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:43:01 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>