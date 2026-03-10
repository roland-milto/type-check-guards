# areBuffers

## Beschrijving

`areBuffers` controleert of de opgegeven waarde een niet-lege, gevulde array is waarbij elk element een `Buffer` is, en
retourneert in dat geval `true` en anders `false`.

### Use case

Valideer binnenkomende chunk-arrays (bijv. uit streams, bestandsuploads of netwerkpakketten) om te garanderen dat alle
delen `Buffer`-instanties zijn voordat je ze samenvoegt, decodeert of doorgeeft aan cryptografische of binaire
verwerkingsfuncties.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areBuffers` om `unknown[]` te valideren voordat je Buffer-specifieke API's zoals `Buffer.concat` aanroept,
> zodat de functie alleen `true` retourneert wanneer elk element een `Buffer` is.

### Voordelen

- Zorgt ervoor dat elk element in de invoer een Node.js-`Buffer`-instantie is, en retourneert alleen `true` wanneer de
  volledige array overeenkomt.
- Wijst ongeldige invoer vroegtijdig af door een niet-lege, gevulde array te vereisen; retourneert `false` voor lege
  arrays of niet-arrays.
- Handig als guard voordat je buffer-alleen bewerkingen uitvoert (bijv. concatenatie, hashing, binaire protocollen).

## Gebruik

### Syntax

Functie:

- `areBuffers(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op buffer-instanties.

### Lokale functie-import

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areBuffers(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 16:26:28 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>