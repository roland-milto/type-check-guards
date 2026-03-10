# areStrings

## Skildring

`areStrings` sjekkar om ein tabell er ikkje-tom og om alle elementa er strengar, og returnerer `true` berre i det
tilfellet.

### Brukstilfelle

Valider eksterne eller brukarleverte data (t.d. spørjeparametrar, JSON-nyttelast, CSV-felt) for å sikre at du har ei
ikkje-tom liste av strengar før prosessering.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `areStrings` til å validere ukjende tabellar før du bruker logikk som berre gjeld strengar; han returnerer
`false` for tomme tabellar.

### Fordelar

- Sikrar at kvart element er ein streng og avviser blandingstypar i tabellar ved å returnere `false`.
- Avviser tomme tabellar, så `true` indikerer berre ei ikkje-tom liste av strengar.
- Nyttig som ein rask køyretidsvakt før du utfører operasjonar som berre gjeld strengar (t.d. `trim`, `toLowerCase`).

## Bruk

### Syntaks

Funksjon:

- `areStrings(value)`

Parameter:

- `value`: Expected type `string[]`.

### Lokal funksjonsimport

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input er ein ikkje-tom string[] ved køyretid
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.areStrings(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 13:19:38 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>