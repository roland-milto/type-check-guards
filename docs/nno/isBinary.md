# isBinary

## Skildring

`isBinary` avgjer om ein verdi er ein binærstreng (valfritt med prefiks `0b`/`0B`) og returnerer `true` eller `false`.

### Brukstilfelle

Valider brukaroppgjevne strengar (t.d. skjemafelt, CLI-argument, konfigurasjonsverdiar) for å sikre at dei berre
representerer binærsiffer, eventuelt med prefiks `0b`/`0B`, før vidare handsaming.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isBinary` som ei typevakt før du parsar eller konverterer ein streng til `BigInt`/`Number` for å unngå ugyldige
> inndata.

### Fordelar

- Godtek binærstrengar med eller utan prefikset `0b`/`0B`.
- Avviser tomme strengar og strengar med innleiande/etterfølgjande blankteikn (ASCII ≤ 32).
- Returnerer `true`/`false` utan å kaste feil, noko som gjer det trygt for ukjende inndata.

## Bruk

### Syntaks

Funksjon:

- `isBinary(value)`

Parameter:

- `value`: Verdien som skal kontrollerast.

### Lokal funksjonsimport

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // sann
const b = isBinary("1010");   // sann
const c = isBinary("0b1020"); // usann
const d = isBinary(0b1010);     // usann

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isBinary(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 23:10:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>