# areFalse

## Aprašymas

`areFalse` patikrina, ar visi pateikto masyvo elementai yra griežtai loginė reikšmė `false`.

### Naudojimo atvejis

Prieš tęsiant patvirtinti, kad funkcijų vėliavėlių, patikrų ar apsaugų rezultatų sąrašas yra vien `false` (pvz.,
įsitikinti, kad nėra blokuojančių sąlygų).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areFalse`, kai reikia griežtos validacijos, kad masyvas nebūtų tuščias ir jame būtų tik loginė reikšmė
`false`.

### Privalumai

- Užtikrina, kad kiekvienas elementas būtų griežtai `false` (be truthy/falsey prievartos).
- Grąžina `false` ne masyvams arba tuštiems masyvams, nes reikalauja užpildyto masyvo per `isFilledArray`.
- Dėl efektyvumo sustoja anksti ties pirmuoju ne-`false` elementu.

## Naudojimas

### Sintaksė

Funkcija:

- `areFalse(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, turintis bet kokio tipo elementų.

### Lokalus funkcijos importas

```ts
import { areFalse } from "@type-check/guards";

const a = areFalse([false, false, false]); // tiesa
const b = areFalse([false, true, false]);  // netiesa
const c = areFalse([false, "false", false]); // netiesa
const d = areFalse([]); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areFalse(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areFalse](../_analysis/areFalse.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 16:17:44 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>