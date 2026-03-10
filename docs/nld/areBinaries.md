# areBinaries

## Beschrijving

Controleert of de opgegeven waarde een niet-lege array van geldige binaire strings is en geeft alleen `true` terug als
alle items de validatie doorstaan.

### Use case

Gebruik `areBinaries` wanneer je een onbekende lijst ontvangt (bijv. uit JSON, formulieren of API's) en moet garanderen
dat het een niet-lege array van binaire strings is voordat je deze parseert of verwerkt.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areBinaries` om onbekende invoer te valideren voordat je binaire strings naar getallen/BigInts converteert;
> het zorgt ervoor dat de array niet leeg is en dat elk element een geldige binaire string is.

### Voordelen

- Valideert dat een waarde een niet-lege array is waarbij elk element een geldige binaire string is.
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug, geschikt voor guards, vroege returns en
  invoervalidatie.
- Voorkomt latere parsefouten door arrays te weigeren die een niet-binaire invoer bevatten.

## Gebruik

### Syntax

Functie:

- `areBinaries(array)`

Parameters:

- `array`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // waar
console.log(areBinaries(b)); // onwaar
console.log(areBinaries([])); // onwaar
```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areBinaries(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Het bestand is op 31 January 2026 at 23:15:22 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>