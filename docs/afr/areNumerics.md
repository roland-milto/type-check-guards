# areNumerics

## Beskrywing

`areNumerics` kontroleer of 'n waarde 'n nie-leë skikking is waar alle elemente numeries is.

### Gebruikscenario

Gebruik `areNumerics` om eksterne of ongetipeerde data (bv. JSON-ladings, navraagparameters, vorminvoer) te valideer
voordat somme, gemiddeldes of ander numeriese bewerkings bereken word, en verseker dat die invoer 'n nie-leë numeriese
skikking is en andersins `false` teruggee.

> **Wenk vir TypeScript-gebruikers:**
>
> Gebruik `areNumerics` om `unknown`-invoer te bewaak voordat dit as 'n numeriese skikking hanteer word; dit gee `false`
> terug vir nie-skikkings en leë skikkings.

### Voordele

- Gee `true` slegs terug wanneer die invoer 'n nie-leë skikking is en elke element numeries is.
- Misluk vinnig: hou op kontroleer sodra 'n nie-numeriese element gevind word, en gee `false` terug.
- Help om onbekende invoer veilig te valideer voordat numeriese bewerkings uitgevoer word.

## Gebruik

### Sintaksis

Funksie:

- `areNumerics(array)`

Parameters:

- `array`: Die skikking om na te gaan vir numeriese elemente.

### Plaaslike funksie-invoer

```ts
import { areNumerics } from "@type-check/guards";

const a: unknown = [1, 2, 3];
const b: unknown = [-3.14, 0, 42];
const c: unknown = [1, "two", 3];
const d: unknown = "string";
const e: unknown = [];

console.log(areNumerics(a)); // waar
console.log(areNumerics(b)); // waar
console.log(areNumerics(c)); // vals
console.log(areNumerics(d)); // vals
console.log(areNumerics(e)); // vals

function sumUnknown(values: unknown): number | null {
  if (!areNumerics(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumUnknown([10, 20, 30])); // 60
console.log(sumUnknown([10, "20", 30])); // nul
```

### Globale objek-invoer

Gebruik die volgende invoer om die funksies as globale objekmetodes in te voer:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Die volgende metode is dan globaal beskikbaar:

- `Type.areNumerics(array)`

## Funksie-analise

’n Tabelanalise van watter uitset ontstaan wanneer verskillende parameters in die funksies ingevoer word, is hier
gedokumenteer: [areNumerics](../_analysis/areNumerics.md)

<br>

---

<small>Hierdie lêer is op 6 February 2026 at 16:03:52 (UTC) gegenereer met die gebruik van die *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** deur *
*[Roland Milto](https://roland-milto.de/)**.</small>