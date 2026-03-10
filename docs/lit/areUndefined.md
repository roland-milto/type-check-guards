# areUndefined

## Aprašymas

`areUndefined` patikrina, ar kiekvienas pateikto masyvo elementas yra `undefined`.

### Naudojimo atvejis

Patikrinkite, kad pasirenkamų rezultatų sąraše nėra jokių realių reikšmių (tik `undefined`), pvz., po paieškų
susiejimo (mapping), kai trūkstami įrašai vaizduojami kaip `undefined`, ir norite patvirtinti, kad visos paieškos
nepavyko.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areUndefined`, kai reikia patvirtinti, kad `unknown[]` turi tik `undefined` reikšmes; ji grąžina `false`
> tuštiems masyvams ir ne masyvams / neteisingoms įvestims dėl vidinio `isFilledArray` patikrinimo.

### Privalumai

- Grąžina `false` ne masyvams ir tuštiems masyvams, nes per `isFilledArray` reikalaujama užpildyto masyvo.
- Užtikrina, kad kiekvienas elementas yra `undefined`, o ne tik kai kurie, taip aiškiai išreiškiant ketinimą.
- Naudinga kaip sargybinio tipo predikatas, kai tikrinamos nežinomos įvesties kolekcijos.

## Naudojimas

### Sintaksė

Funkcija:

- `areUndefined(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `undefined` elementų.

### Lokalus funkcijos importas

```ts
import { areUndefined } from "@type-check/guards";

const a: unknown[] = [undefined, undefined];
const b: unknown[] = [undefined, null];
const c: unknown[] = [undefined, 0, undefined];

const r1 = areUndefined(a); // true
const r2 = areUndefined(b); // false
const r3 = areUndefined(c); // false

// Pastaba: tuštiems masyvams grąžina false
const r4 = areUndefined([]); // false

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areUndefined(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areUndefined](../_analysis/areUndefined.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:56:45 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>