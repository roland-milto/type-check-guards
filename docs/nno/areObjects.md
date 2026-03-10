# areObjects

## Skildring

`areObjects` sjekkar om ei oppgitt fylt matrise berre inneheld objekt.

### Brukstilfelle

Bruk `areObjects` når du får ei ukjend matrise (t.d. frå JSON-parsing eller eksterne API-ar) og må sikre at ho ikkje er
tom, og at kvart element er eit objekt, før du itererer og får tilgang til objekteigenskapar.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areObjects` til å validere `unknown[]` før du behandlar element som objekt; han returnerer `false` for tomme
> matriser.

### Fordelar

- Returnerer `true` berre når inndata er ein fylt matrise og kvart element er eit objekt.
- Stoppar tidleg og returnerer `false` så snart eit element som ikkje er eit objekt blir funne.
- Hjelper med å validere ukjend inndata før du utfører objektspesifikke operasjonar.

## Bruk

### Syntaks

Funksjon:

- `areObjects(array)`

Parameter:

- `array`: Matrisa som skal kontrollerast for objektelement.

### Lokal funksjonsimport

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // value er ein fylt matrise av objekt
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areObjects(array)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 00:09:48 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>