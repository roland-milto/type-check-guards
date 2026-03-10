# isBuffer

## Beschrijving

Controleert of een waarde een Node.js-`Buffer` is en geeft `true` of `false` terug.

### Use case

Valideer invoer tijdens runtime (bijv. API-payloads, bestandsdata of message buffers) om te garanderen dat een waarde
een `Buffer` is voordat je deze verwerkt, en krijg betrouwbaar `false` wanneer je buiten Node.js draait waar `Buffer`
mogelijk niet bestaat.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isBuffer` om `unknown`-waarden te vernauwen naar `Buffer` voordat je Buffer-specifieke methoden aanroept.

### Voordelen

- Detecteert veilig Node.js-`Buffer`-instanties met `Buffer.isBuffer`.
- Geeft `false` terug in omgevingen waar `Buffer` niet beschikbaar is, waardoor runtimefouten worden voorkomen.
- Werkt met invoer van het type `unknown`, waardoor het geschikt is voor runtimevalidatie en type narrowing.

## Gebruik

### Syntax

Functie:

- `isBuffer(value)`

Parameters:

- `value`: De waarde die getest moet worden.

### Lokale functie-import

```ts
import { isBuffer } from "@type-check/guards";

const a: unknown = Buffer.from("hello");
const b: unknown = "hello";

console.log(isBuffer(a)); // waar
console.log(isBuffer(b)); // onwaar

if (isBuffer(a)) {
  // a is hier een Buffer
  console.log(a.toString("utf8"));
}
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isBuffer(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isBuffer](../_analysis/isBuffer.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:32:34 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>