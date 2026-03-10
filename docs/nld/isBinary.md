# isBinary

## Beschrijving

`isBinary` bepaalt of een waarde een binaire string is (optioneel met het voorvoegsel `0b`/`0B`) en retourneert `true`
of `false`.

### Use case

Valideer door gebruikers aangeleverde strings (bijv. formuliervelden, CLI-argumenten, configuratiewaarden) om te zorgen
dat ze uitsluitend binaire cijfers bevatten, optioneel met een `0b`/`0B`-voorvoegsel, voordat je ze verder verwerkt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isBinary` als type guard voordat je een string parseert of converteert naar `BigInt`/`Number` om ongeldige
> invoer te voorkomen.

### Voordelen

- Accepteert binaire strings met of zonder het voorvoegsel `0b`/`0B`.
- Weigert lege strings en strings met voor-/achterlopende witruimte (ASCII ≤ 32).
- Retourneert `true`/`false` zonder een fout te gooien, waardoor het veilig is voor onbekende invoer.

## Gebruik

### Syntax

Functie:

- `isBinary(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // waar
const b = isBinary("1010");   // waar
const c = isBinary("0b1020"); // onwaar
const d = isBinary(0b1010);     // onwaar

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isBinary(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:10:46 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>