# areHexadecimals

## Beschrijving

Controleert of alle elementen in een array hexadecimale strings zijn en retourneert `true` alleen voor niet-lege arrays
waarbij elk item geldig is.

### Use case

Gebruik `areHexadecimals` om gebruikersinvoer of externe data (bijv. ID's, checksums, kleurcodes zonder een
leidende '#') te valideren voordat je hexadecimaal gaat parsen of verder verwerkt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areHexadecimals` om onbekende invoer te valideren voordat je waarden parseert of converteert (bijvoorbeeld
> vóór `parseInt(value, 16)` of BigInt-conversies).

### Voordelen

- Valideert dat elk element een hexadecimale string is en retourneert `true` alleen wanneer alle items overeenkomen.
- Wijst lege arrays bewust af en retourneert `false` bij ontbrekende invoergegevens.
- Biedt een eenvoudig booleaans resultaat (`true`/`false`) dat geschikt is voor guards en validatie met vroege return.

## Gebruik

### Syntax

Functie:

- `areHexadecimals(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op hexadecimale stringelementen.

### Lokale functie-import

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areHexadecimals(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:07:11 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>