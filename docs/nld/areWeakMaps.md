# areWeakMaps

## Beschrijving

`areWeakMaps` controleert of een waarde een niet-lege array is waarbij elk element een `WeakMap` is, en geeft alleen in
dat geval `true` terug en anders `false`.

### Use case

Valideer runtimegegevens (bijv. geparseerde JSON, plugin-invoer of los getypeerde configuratie) om te garanderen dat het
een niet-lege array van `WeakMap`-instanties is voordat je erover iterereert en `WeakMap`-methoden aanroept; geeft
`false` terug wanneer een element geen `WeakMap` is of wanneer de array leeg is.

> **Hint voor TypeScript-gebruikers:**
>
> Gebruik `areWeakMaps` om onbekende invoer te valideren voordat je deze behandelt als een niet-lege `WeakMap[]`; het
> geeft `false` terug voor lege arrays.

### Voordelen

- Zorgt ervoor dat elk element in de opgegeven array een `WeakMap`-instantie is.
- Geeft `false` terug voor lege arrays, waardoor wordt voorkomen dat “geen gegevens” per ongeluk als geldige invoer
  wordt geaccepteerd.
- Handig als guard voordat je `WeakMap`-specifieke bewerkingen op alle items uitvoert.

## Gebruik

### Syntax

Functie:

- `areWeakMaps(array)`

Parameters:

- `array`: De array die gecontroleerd moet worden op `WeakMap`-instanties.

### Lokale functie-import

```ts
import { areWeakMaps } from "@type-check/guards";

const list: unknown[] = [new WeakMap<object, number>(), new WeakMap<object, number>()];

if (areWeakMaps(list)) {
  // list is een niet-lege array van WeakMap-instanties
  for (const wm of list) {
    wm.set({}, 1);
  }
} else {
  // geen niet-lege WeakMap[]
}

```

### Globale object-import

Gebruik om functies als globale objectmethoden te importeren:

```ts
import "@type-check/guards/register-global-object.mjs";
```

De volgende methode is dan globaal beschikbaar:

- `Type.areWeakMaps(array)`

## Functieanalyse

Hier is een tabelanalyse gedocumenteerd van de uitvoer die ontstaat bij het invullen van verschillende parameters in de
functies: [areWeakMaps](../_analysis/areWeakMaps.md)

<br>

---

<small>Het bestand is op 30 January 2026 at 13:38:34 (UTC) gegenereerd met gebruik van *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** door *
*[Roland Milto](https://roland-milto.de/)**.</small>