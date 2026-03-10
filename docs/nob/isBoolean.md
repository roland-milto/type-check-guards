# isBoolean

## Beskrivelse

Avgjør om en gitt verdi er en `boolean`.

### Brukstilfelle

Valider eksterne eller utypede data (f.eks. miljøvariabler, JSON-nyttelaster, spørringsparametere) for å sikre at en
verdi er en `boolean` før den brukes i betinget logikk.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isBoolean` til å snevre inn `unknown` til `boolean` før du bruker boolske operasjoner.

### Fordeler

- Enkel og rask kjøretidssjekk ved bruk av `typeof`.
- Hjelper med å validere ukjent input før boolsk-spesifikk logikk.
- Returnerer et forutsigbart `boolean`-resultat (`true`/`false`).

## Bruk

### Syntaks

Funksjon:

- `isBoolean(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input er en boolsk verdi her
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isBoolean(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Filen ble generert 30 January 2026 at 14:37:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>