# areDates

## Skildring

`areDates` avgjer om ein gitt tabell er utfylt og berre inneheld `Date`-objekt, og returnerer `true` berre når alle
element er gyldige datoar.

### Brukstilfelle

Bruk `areDates` til å validere ukjend inndata (t.d. tolka JSON, skjemadata, API-nyttelastar) før du køyrer
dato-spesifikk logikk som sortering etter tid, formatering eller utrekning av intervall.

> **Merknad for TypeScript-brukarar:**
>
> Returnerer `true` berre for ikkje-tomme tabellar der kvart element er ein `Date`; tomme tabellar gir `false`.

### Fordelar

- Sikrar at ein tabell ikkje er tom før innhaldet blir validert, og hindrar `true` for tomme inndata.
- Stadfestar at kvart element er ein `Date`-instans, og returnerer `false` med ein gong ved første avvik.
- Nyttig som ein vaktliknande sjekk før du utfører dato-spesifikke operasjonar på element i tabellen.

## Bruk

### Syntaks

Funksjon:

- `areDates(array)`

Parameter:

- `array`: Tabellen som skal sjekkast for `Date`-objekt.

### Lokal funksjonsimport

```ts
import { areDates } from "@type-check/guards";

const a: unknown[] = [new Date(), new Date("2021-01-01")];
const b: unknown[] = [];
const c: unknown[] = [new Date(), "not a date"];

console.log(areDates(a)); // sann
console.log(areDates(b)); // usann
console.log(areDates(c)); // usann

if (areDates(a)) {
  const timestamps = a.map(d => d.getTime());
  console.log(timestamps);
}
```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areDates(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areDates](../_analysis/areDates.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 15:31:38 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>