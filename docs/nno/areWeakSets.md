# areWeakSets

## Skildring

Sjekkar om ei inndata er ein ikkje-tom array der kvart element er ein `WeakSet`, og returnerer `true` berre i det
tilfellet.

### Brukstilfelle

Valider inndata ved køyretid (t.d. frå API-ar, konfigurasjon eller brukarleverte data) for å sikre at du har ei
ikkje-tom liste med `WeakSet`-instansar før du går vidare med logikk som er avhengig av `WeakSet`-åtferd.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areWeakSets` til å validere ukjend inndata før du handsamar ho som `WeakSet[]`. Ho returnerer `false` for tomme
> arrayar og for verdiar som ikkje er arrayar.

### Fordelar

- Sikrar at kvart element i inndata-arrayen er ein `WeakSet`.
- Returnerer `false` for tomme arrayar, noko som hindrar utilsikta «alle gyldige»-resultat ved manglande data.
- Feilar trygt ved å returnere `false` når inndata ikkje er ein utfylt array (inkludert `null`).
- Nyttig som ein vakt før du utfører operasjonar som krev `WeakSet`-instansar.

## Bruk

### Syntaks

Funksjon:

- `areWeakSets(array)`

Parameter:

- `array`: Arrayen som skal kontrollerast for `WeakSet`-objekt.

### Lokal funksjonsimport

```ts
import { areWeakSets } from "@type-check/guards";

const a: unknown = [new WeakSet<object>(), new WeakSet<object>()];
const b: unknown = [new WeakSet<object>(), {}];
const c: unknown = [];

if (areWeakSets(a)) {
  // a er ein ikkje-tom matrise av WeakSet-instansar
}

console.log(areWeakSets(a)); // true
console.log(areWeakSets(b)); // false
console.log(areWeakSets(c)); // false
console.log(areWeakSets(null as unknown)); // false
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areWeakSets(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areWeakSets](../_analysis/areWeakSets.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:10:03 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>