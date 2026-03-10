# arePrimitives

## Beskrywing

`arePrimitives` evalueer of alle elemente in 'n verskafde, nie-leë skikking primitiewe tipes is.

### Gebruikscenario

Valideer dat inkomende data (bv. navraagparameters, CSV-rywaardes, of 'n lys van ID's/etikette) slegs primitiewe waardes
bevat voordat dit geserialiseer, gehash, gelog, of na API's deurgegee word wat nie objekte mag ontvang nie.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `arePrimitives` wanneer jy moet verseker dat 'n `unknown[]` slegs primitiewe waardes (string, number, bigint,
> boolean, symbol, undefined, of null) bevat voordat verdere verwerking plaasvind.

### Voordele

- Gee `true` slegs terug wanneer elke element 'n primitiewe waarde is, wat dit 'n streng wag maak vir “geen
  objekte/funksies”-skikkings.
- Misluk vinnig: gee `false` terug sodra 'n nie-primitiewe element gevind word.
- Gee ook `false` terug vir nie-skikkings en leë skikkings (via die gevulde-skikking-kontrole), wat toevallige
  aanvaarding van ongeldige invoer voorkom.

## Gebruik

### Sintaksis

Funksie:

- `arePrimitives(array)`

Parameters:

- `array`: Die skikking wat nagegaan moet word vir elemente van primitiewe tipe.

### Plaaslike funksie-invoer

```ts
import { arePrimitives } from "@type-check/guards";

const a: unknown[] = [1, "string", true];
const b: unknown[] = [null, undefined, Symbol("x")];
const c: unknown[] = [1, {}, false];

const r1 = arePrimitives(a); // waar
const r2 = arePrimitives(b); // waar
const r3 = arePrimitives(c); // vals
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.arePrimitives(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [arePrimitives](../_analysis/arePrimitives.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:00:10 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>