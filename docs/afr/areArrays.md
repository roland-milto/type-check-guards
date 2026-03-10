# areArrays

## Beskrywing

`areArrays` bepaal of 'n waarde 'n gevulde tweedimensionele skikking is waarvan die items almal skikkings is.

### Gebruikscenario

Gebruik `areArrays` om tabel- of matriksagtige invoere (bv. CSV-rye, roosterdata, of gegroepeerde lyste) te valideer
voordat jy ry-/kolombewerkings uitvoer; dit gee `false` terug as die invoer nie 'n skikking is nie, leeg is, of enige
nie-skikking-element bevat.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areArrays` wanneer jy moet verseker dat 'n waarde 'n nie-leë 2D-skikking is en dat elke ry 'n skikking is
> voordat jy oor geneste skikkings iterer of daarin indekseer.

### Voordele

- Valideer dat die invoer 'n nie-leë tweedimensionele skikking is waar elke element 'n skikking is.
- Gee 'n eenvoudige booleaanse resultaat (`true`/`false`) wat geskik is vir wagte en vroeë uitgange.
- Help om looptydfoute te voorkom wanneer latere kode aanneem dat geneste skikkingbewerkings plaasvind (bv. om rye te
  map).

## Gebruik

### Sintaksis

Funksie:

- `areArrays(array)`

Parameters:

- `array`: Die invoer wat nagegaan moet word.

### Plaaslike funksie-invoer

```ts
import { areArrays } from "@type-check/guards";

const value: unknown = [[1, 2], [3, 4]];

if (areArrays(value as unknown[][])) {
  // waarde is 'n 2D-skikking met skikkings as elemente
  const lengths = value.map(row => row.length);
  console.log(lengths);
} else {
  console.log("Not a 2D array of arrays");
}

```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areArrays(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areArrays](../_analysis/areArrays.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 13:38:35 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>