# areIndexesFound

## Aprašymas

`areIndexesFound` patikrina, ar reikšmė yra ne tuščias masyvas, kurio visi elementai yra galiojantys indeksai; jei taip,
grąžina `true`, kitu atveju – `false`.

### Naudojimo atvejis

Patikrinti naudotojo pateiktus ar išorinius duomenis (pvz., išanalizuotą JSON), iš kurių tikimasi indeksų sąrašo, prieš
naudojant juos masyvams pasiekti ar iškirpti.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areIndexesFound`, kad patikrintumėte nežinomą įvestį prieš laikydami jos elementus masyvo indeksais; ji
> grąžina `false` tuštiems masyvams ir masyvams, kuriuose yra ne indekso tipo reikšmių.

### Privalumai

- Grąžina `true` tik tada, kai įvestis yra užpildytas masyvas ir kiekvienas elementas yra galiojantis indeksas.
- Greitai nutraukia: grąžina `false` vos tik aptinkamas ne indekso tipo elementas.
- Naudinga kaip apsauga prieš naudojant reikšmes kaip masyvo pozicijas ar poslinkius.

## Naudojimas

### Sintaksė

Funkcija:

- `areIndexesFound(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl atitikties indeksams.

### Lokalus funkcijos importas

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // tiesa
console.log(areIndexesFound(b)); // netiesa
console.log(areIndexesFound(c)); // netiesa

if (areIndexesFound(a)) {
  // Čia patvirtinama, kad `a` yra užpildytas indeksų masyvas.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areIndexesFound(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:42:36 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>