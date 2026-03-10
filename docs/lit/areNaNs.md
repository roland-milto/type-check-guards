# areNaNs

## Aprašymas

`areNaNs` patikrina, ar visi masyvo elementai yra `NaN`, ir grąžina `true` tik jei kiekvienas elementas yra `NaN`.

### Naudojimo atvejis

Patikrinkite gaunamus duomenis, kai `NaN` naudojama kaip žymeklio (sentinel) reikšmė ir būtina užtikrinti, kad visas
masyvas sudarytas išimtinai iš `NaN` (pvz., aptinkant visiškai trūkstamą skaitinę seką).

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areNaNs`, kai reikia patikrinti, kad masyve yra tik skaitinė `NaN` reikšmė (be eilučių į skaičius
> konvertavimo).

### Privalumai

- Grąžina `true` tik tada, kai kiekvienas elementas yra `NaN` (griežtas visų elementų patikrinimas).
- Nekonvertuoja eilučių į skaičius; tokios reikšmės kaip „NaN“ lieka ne `NaN` ir rezultatas tampa `false`.
- Grąžina `false` neužpildytiems masyvams, taip užkertant kelią netyčiniam `true` esant tuščiai įvesčiai.

## Naudojimas

### Sintaksė

Funkcija:

- `areNaNs(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl `NaN` reikšmių.

### Lokalus funkcijos importas

```ts
import { areNaNs } from "@type-check/guards";

const a = areNaNs([NaN, NaN]); // tiesa
const b = areNaNs([NaN, 1, NaN]); // netiesa
const c = areNaNs([NaN, "NaN", NaN]); // netiesa
const d = areNaNs([NaN, null, NaN]); // netiesa
const e = areNaNs([] as unknown[]); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areNaNs(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areNaNs](../_analysis/areNaNs.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 15:52:14 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>