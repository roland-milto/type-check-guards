# areStrings

## Beskrivelse

`areStrings` sjekker om en array er ikke-tom og om alle elementene er strenger, og returnerer `true` kun i det
tilfellet.

### Brukstilfelle

Valider eksterne eller brukerleverte data (f.eks. spørringsparametere, JSON-nyttelaster, CSV-felt) for å sikre at du har
en ikke-tom liste med strenger før behandling.

> **Merknad for TypeScript-brukere:**
>
> Bruk `areStrings` til å validere ukjente arrayer før du anvender logikk som kun gjelder strenger; den returnerer
`false` for tomme arrayer.

### Fordeler

- Sikrer at hvert element er en streng og avviser arrayer med blandede typer ved å returnere `false`.
- Avviser tomme arrayer, så `true` indikerer kun en ikke-tom liste med strenger.
- Nyttig som en rask kjøretidsvakt før du utfører operasjoner som kun gjelder strenger (f.eks. `trim`, `toLowerCase`).

## Bruk

### Syntaks

Funksjon:

- `areStrings(value)`

Parametere:

- `value`: Expected type `string[]`.

### Lokal funksjonsimport

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input ke string[] yeo e se nago le selo ka nako ya go tsamaya
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.areStrings(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 13:19:51 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>