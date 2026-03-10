# isArray

## Beschrijving

`isArray` controleert of een gegeven waarde een array is en retourneert `true` als dat zo is, anders `false`.

### Use case

Valideer onbekende data (bijv. geparseerde JSON of API-responses) om te zorgen dat een waarde een array is voordat je
erover iterereert, indexeert of `.length` benadert.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `isArray` wanneer je een runtime-controle voor arrays nodig hebt; het retourneert een boolean en is veilig om
> aan te roepen met `unknown`-waarden.

### Voordelen

- Gebruikt de ingebouwde `Array.isArray` voor betrouwbare array-detectie over verschillende realms (bijv. iframes).
- Geeft een eenvoudig booleaans resultaat (`true`/`false`) terug dat geschikt is voor guards en vertakkingslogica.
- Werkt met elk invoertype omdat de parameter `unknown` is.

## Gebruik

### Syntax

Functie:

- `isArray(value)`

Parameters:

- `value`: De waarde die gecontroleerd moet worden.

### Lokale functie-import

```ts
import { isArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (isArray(input)) {
  // input is tijdens runtime een array
  console.log(input.length);
} else {
  console.log("Not an array");
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.isArray(value)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [isArray](../_analysis/isArray.md)

<br>

---

<small>Het bestand is op 6 February 2026 at 11:31:25 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>