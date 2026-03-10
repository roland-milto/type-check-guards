# isBoolean

## Beschrijving

Bepaalt of een gegeven waarde een `boolean` is.

### Use case

Valideer externe of niet-getypeerde data (bijv. omgevingsvariabelen, JSON-payloads, queryparameters) om te garanderen
dat een waarde een `boolean` is voordat je die gebruikt in conditionele logica.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isBoolean` om `unknown` te vernauwen naar `boolean` voordat je booleaanse bewerkingen toepast.

### Voordelen

- Eenvoudige en snelle runtimecontrole met `typeof`.
- Helpt onbekende invoer te valideren vóór booleanspecifieke logica.
- Geeft een voorspelbaar `boolean`-resultaat terug (`true`/`false`).

## Gebruik

### Syntax

Functie:

- `isBoolean(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isBoolean } from "@type-check/guards";

const input: unknown = Math.random() > 0.5 ? true : "true";

if (isBoolean(input)) {
  // input is hier een boolean
  const toggled = !input;
  console.log(toggled);
} else {
  console.log("Not a boolean:", input);
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isBoolean(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isBoolean](../_analysis/isBoolean.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 14:37:17 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>