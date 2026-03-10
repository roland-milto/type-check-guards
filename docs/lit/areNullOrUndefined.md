# areNullOrUndefined

## Aprašymas

Patikrina, ar visi pateikto masyvo elementai yra `null` arba `undefined`.

### Naudojimo atvejis

Patikrinkite, ar pasirenkamų laukų sąraše nėra jokių realių reikšmių (tik `null`/`undefined`), prieš nuspręsdami
praleisti apdorojimą arba rodyti būseną „reikšmės nepateiktos“.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areNullOrUndefined`, kai reikia patikrinti, ar masyve yra tik trūkstamos reikšmės (`null`/`undefined`).
> Atkreipkite dėmesį, kad tuščiam masyvui ji grąžina `false`.

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra `null` arba `undefined`.
- Tuščioms masyvams grąžina `false`, padėdamas atskirti „nėra duomenų“ nuo „visos reikšmės trūksta“.
- Veikia su `unknown[]`, todėl saugu naudoti prieš siaurinant tipus.

## Naudojimas

### Sintaksė

Funkcija:

- `areNullOrUndefined(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areNullOrUndefined(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 00:30:17 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>