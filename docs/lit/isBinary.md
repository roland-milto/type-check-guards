# isBinary

## Aprašymas

`isBinary` nustato, ar reikšmė yra dvejetainė eilutė (pasirinktinai su `0b`/`0B` priešdėliu), ir grąžina `true` arba
`false`.

### Naudojimo atvejis

Patikrinkite naudotojo pateiktas eilutes (pvz., formų laukus, CLI argumentus, konfigūracijos reikšmes), kad
įsitikintumėte, jog jos sudarytos tik iš dvejetainių skaitmenų, pasirinktinai su `0b`/`0B` priešdėliu, prieš tolesnį
apdorojimą.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isBinary` kaip tipo sargą prieš analizuodami ar konvertuodami eilutę į `BigInt`/`Number`, kad išvengtumėte
> neteisingos įvesties.

### Privalumai

- Priima dvejetaines eilutes su `0b`/`0B` priešdėliu arba be jo.
- Atmeta tuščias eilutes ir eilutes su pradžios/pabaigos tarpais (ASCII ≤ 32).
- Grąžina `true`/`false` nemesdamas išimčių, todėl tai saugu nežinomoms įvestims.

## Naudojimas

### Sintaksė

Funkcija:

- `isBinary(value)`

Parametrai:

- `value`: Tikrinama reikšmė.

### Lokalus funkcijos importas

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // tiesa
const b = isBinary("1010");   // tiesa
const c = isBinary("0b1020"); // netiesa
const d = isBinary(0b1010);     // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isBinary(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:10:28 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>