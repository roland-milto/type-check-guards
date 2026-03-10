# isRegEx

## Skildring

Avgjer om ein oppgjeven verdi er ein `RegExp`-instans.

### Brukstilfelle

Valider brukaroppgjevne eller dynamiske verdiar (t.d. konfigurasjon, API-nyttelast, plugin-inndata) før du handsamar dei
som eit regulært uttrykk.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isRegEx` til å snevre inn `unknown`- (eller union-) verdiar før du brukar RegExp-spesifikke eigenskapar eller
> metodar; han returnerer `true` berre for verdiar som er instansar av `RegExp`.

### Fordelar

- Gjev ein enkel typevakt ved køyretid for å sjekke om ein verdi er ein `RegExp`.
- Hjelper med å førebyggje feil når kode forventar eit regulært uttrykk (t.d. før ein kallar `test`, `exec`, eller les
  `source`).
- Fungerer både med regex-litteralar og instansar oppretta via `new RegExp(...)`.
- Returnerer eit tydeleg boolsk resultat (`true`/`false`) utan å kaste feil for ikkje-regex-inndata.

## Bruk

### Syntaks

Funksjon:

- `isRegEx(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isRegEx } from "@type-check/guards";

const input: unknown = /abc/i;

if (isRegEx(input)) {
  // input er ein RegExp her
  console.log(input.test("ABC"));
} else {
  console.log("Not a RegExp");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isRegEx(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isRegEx](../_analysis/isRegEx.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 23:30:24 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>