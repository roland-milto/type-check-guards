# areTrue

## Aprašymas

Patikrina, ar netuščias masyvas turi tik logines `true` reikšmes.

### Naudojimo atvejis

Naudokite `areTrue`, kad patikrintumėte, ar išankstinės sąlygos arba funkcijų vėliavėlės yra visos įjungtos (visos
reikšmės yra `true`) prieš tęsiant, o tuščias ar netaisyklingas įvestis laikykite nepatenkinta (`false`).

> **Pastaba TypeScript naudotojams:**
>
> `areTrue` grąžina `false` tuščiam masyvui ir masyvams, kuriuose yra bet kokia reikšmė, kuri nėra griežtai `true`.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra griežtai `true` ir masyvas nėra tuščias.
- Greitai nutraukia: grąžina `false` iškart, kai randama reikšmė, kuri nėra `true`.
- Atmeta netinkamas įvestis (ne masyvus arba tuščius masyvus) grąžindama `false`.

## Naudojimas

### Sintaksė

Funkcija:

- `areTrue(array)`

Parametrai:

- `array`: Masyvas, kuriame tikrinama, ar visos reikšmės yra `true`.

### Lokalus funkcijos importas

```ts
import { areTrue } from "@type-check/guards";

const a = areTrue([true, true, true]);
const b = areTrue([true, false, true]);
const c = areTrue([]);
const d = areTrue([true, "string" as unknown, true]);

console.log(a, b, c, d);
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areTrue(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areTrue](../_analysis/areTrue.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:51:50 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>