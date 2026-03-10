# isFalse

## Beskrivelse

`isFalse` sjekker om en gitt verdi er strengt lik den boolske literalverdien `false`.

### Brukstilfelle

Valider ukjente data (f.eks. fra JSON, spørringsparametere eller brukerinput) der bare den eksplisitte boolske verdien
`false` skal behandles som et gyldig flagg, og alt annet skal avvises.

> **Merknad for TypeScript-brukere:**
>
> Bruk `isFalse` når du bare trenger å godta literalverdien `false` og avvise alle andre falske verdier; den returnerer
`true` kun for `value === false`.

### Fordeler

- Gir en streng sjekk for den boolske literalverdien `false` uten typekonvertering.
- Hjelper med å skille `false` fra andre falske verdier som `0`, `""`, `null` og `undefined`.
- Forbedrer lesbarheten ved å gjøre intensjonen eksplisitt når ukjent input valideres.

## Bruk

### Syntaks

Funksjon:

- `isFalse(value)`

Parametere:

- `value`: Verdien som skal sjekkes.

### Lokal funksjonsimport

```ts
import { isFalse } from "@type-check/guards";

const input: unknown = false;

if (isFalse(input)) {
  // input er nøyaktig false her
  console.log("Got false");
} else {
  console.log("Not false");
}

```

### Global objektimport

For å importere funksjonene som globale objektmetoder, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgende metode vil da være tilgjengelig globalt:

- `Type.isFalse(value)`

## Funksjonsanalyse

Her er det dokumentert en tabellanalyse av utdataene som oppstår når ulike parametere settes inn i
funksjonene: [isFalse](../_analysis/isFalse.md)

<br>

---

<small>Filen ble generert 31 January 2026 at 16:44:00 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>