# isDate

## Skildring

`isDate` avgjer om ein oppgitt verdi er ein `Date`, og returnerer `true` for `Date`-instansar og `false` elles.

### Brukstilfelle

Valider og snevre inn ukjende verdiar (t.d. førespurnadsdata, konfigurasjonsverdiar eller tolka JSON) før du utfører
`Date`-operasjonar som formatering, samanlikningar eller å kalle `toISOString()`.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isDate` til å snevre inn `unknown` til `Date` ved køyretid; det returnerer `true` berre for faktiske `Date`
> -instansar (ikkje datostrengar).

### Fordelar

- Det gir ein enkel køyretidskontroll for å stadfeste om ein verdi er ein `Date`.
- Det hjelper med å førebyggje typefeil ved å sikre at berre `Date`-instansar slepp gjennom valideringa.
- Det er nyttig for å validere ukjende inndata (t.d. API-nyttelaster) før ein brukar dato-spesifikke metodar.

## Bruk

### Syntaks

Funksjon:

- `isDate(value)`

Parameter:

- `value`: Verdien som skal kontrollerast for `Date`-type.

### Lokal funksjonsimport

```ts
import { isDate } from "@type-check/guards";

const input: unknown = new Date();

if (isDate(input)) {
  // input er ein Date her
  const iso = input.toISOString();
  console.log(iso);
} else {
  console.log("Not a Date");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isDate(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isDate](../_analysis/isDate.md)

<br>

---

<small>Fila vart generert 31 January 2026 at 15:47:05 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>