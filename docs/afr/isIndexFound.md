# isIndexFound

## Beskrywing

`isIndexFound` bepaal of 'n gegewe waarde 'n nie-negatiewe heelgetal is, wat aandui dat 'n indeks gevind is.

### Gebruikscenario

Valideer dat 'n soekresultaat 'n bruikbare indeks (heelgetal `>= 0`) verteenwoordig voordat jy in 'n skikking of string
indekseer, en voorkom per ongeluk gebruik van `-1` of nie-numeriese waardes.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `isIndexFound` ná bewerkings soos `indexOf`, `findIndex`, of pasgemaakte soektogte waar `-1` (of ander
> ongeldige waardes) “nie gevind nie” kan aandui. Wanneer dit `true` teruggee, is die waarde 'n nommer en veilig om as '
> n
> skikking-/stringindeks te gebruik.

### Voordele

- Bied 'n eenvoudige tipe-wag om te bepaal of 'n indeks gevind is deur vir 'n nie-negatiewe heelgetal te toets.
- Gee `true` slegs vir geldige indeks-agtige waardes (heelgetalle `>= 0`), en verwerp negatiewe waardes, nie-heelgetalle
  en nie-nommers.
- Help om afwykings-met-een en wagwaarde-foute te vermy wanneer jy met API's werk wat `-1` teruggee vir “nie gevind
  nie”.

## Gebruik

### Sintaksis

Funksie:

- `isIndexFound(value)`

Parameters:

- `value`: Die waarde om te toets of dit 'n nie-negatiewe heelgetal is.

### Plaaslike funksie-invoer

```ts
import { isIndexFound } from "@type-check/guards";

const idx: unknown = "3";

if (isIndexFound(idx)) {
  // idx is hier 'n getal en is >= 0
  const next = idx + 1;
  console.log(next);
} else {
  console.log("No valid index found");
}

// Tipiese gebruik met indexOf
const pos = "hello".indexOf("e");
if (isIndexFound(pos)) {
  console.log("Found at", pos);
}
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.isIndexFound(value)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [isIndexFound](../_analysis/isIndexFound.md)

<br>

---

<small>Hierdie lêer is op 31 January 2026 at 00:44:50 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>