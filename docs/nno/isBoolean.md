# isBoolean

## Skildring

Avgjer om ein gitt verdi er ein `boolean`.

### Brukstilfelle

Valider eksterne eller utypede data (t.d. miljøvariablar, JSON-nyttelast, spørrjeparametrar) for å sikre at ein verdi er
ein `boolean` før du brukar han i vilkårslogikk.

> **Merknad for TypeScript-brukarar:**
>
> Bruk `isBoolean` til å snevre inn `unknown` til `boolean` før du brukar boolske operasjonar.

### Fordelar

- Enkel og rask køyretidssjekk med `typeof`.
- Hjelper med å validere ukjent input før boolsk-spesifikk logikk.
- Returnerer eit føreseieleg `boolean`-resultat (`true`/`false`).

## Bruk

### Syntaks

Funksjon:

- `isBoolean(value)`

Parameter:

- `value`: Verdien som skal sjekkast.

### Lokal funksjonsimport

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input er ein boolsk verdi her
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Global objektimport

For å importere funksjonane som globale objektmetodar, bruk:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Følgjande metode vil då vere tilgjengeleg globalt:

- `Type.isBoolean(value)`

## Funksjonsanalyse

Her er det dokumentert ei tabellanalyse av utdataa som oppstår når ulike parameterar blir sette inn i
funksjonane: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Fila vart generert 30 January 2026 at 14:37:19 (UTC) ved bruk av *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** av *
*[Roland Milto](https://roland-milto.de/)**.</small>