# areOfType

## Beskrywing

Kontroleer of alle elemente in die gegewe `array` van die gespesifiseerde `type` is.

### Gebruikscenario

Gebruik `areOfType` om onbekende invoer (bv. ontlede JSON, API-ladings, gebruikersinvoer) te valideer voordat
tipe-spesifieke bewerkings op elke element van 'n skikking uitgevoer word.

> **Wenk vir TypeScript-gebruikers:**
>
> Omdat `areOfType` 'n tipewag is, vernou TypeScript die skikking binne 'n `if (areOfType(...)) {}`-blok na
`Array<DataTypeOf<T>>`.

### Voordele

- Verskaf 'n TypeScript-tipewag: wanneer dit `true` teruggee, word die invoer vernou na `Array<DataTypeOf<T>>`.
- Valideer elke element teen die versoekte looptyptipe, wat verhoed dat gemengde-tipe skikkings deurgaan.
- Misluk vinnig: gee `false` terug sodra 'n nie-ooreenstemmende element gevind word.
- Verwerp nie-skikkings en leë skikkings by ontwerp (hang af van `isFilledArray`).

## Gebruik

### Sintaksis

Funksie:

- `areOfType(array, type)`

Parameters:

- `array`: Die skikking om na te gaan.
- `type`: Die tipe waarteen elke element in die skikking nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values is nou number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // vals

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areOfType(array, type)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Hierdie lêer is op 30 January 2026 at 17:08:32 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>