# areHexadecimals

## Aprašymas

Patikrina, ar visi masyvo elementai yra šešioliktainės eilutės, grąžindama `true` tik netuščiuose masyvuose, kuriuose
kiekvienas elementas yra teisingas.

### Naudojimo atvejis

Naudokite `areHexadecimals`, kad patikrintumėte naudotojo įvestį arba išorinius duomenis (pvz., ID, kontrolines sumas,
spalvų kodus be pradinio '#') prieš atliekant šešioliktainį analizavimą ar tolesnį apdorojimą.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areHexadecimals`, kad patikrintumėte nežinomą įvestį prieš analizuodami ar konvertuodami reikšmes (
> pavyzdžiui, prieš `parseInt(value, 16)` arba BigInt konversijas).

### Privalumai

- Patikrina, ar kiekvienas elementas yra šešioliktainė eilutė, ir grąžina `true` tik tada, kai visi elementai atitinka.
- Pagal numatytąją logiką atmeta tuščius masyvus, grąžindama `false`, kai trūksta įvesties duomenų.
- Pateikia paprastą loginį rezultatą (`true`/`false`), tinkamą apsaugoms (guards) ir ankstyvam grąžinimui (early-return)
  validuojant.

## Naudojimas

### Sintaksė

Funkcija:

- `areHexadecimals(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti, ar jame yra šešioliktainių eilučių elementų.

### Lokalus funkcijos importas

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areHexadecimals(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areHexadecimals](../_analysis/areHexadecimals.md)

<br>

---

<small>Failas buvo sugeneruotas 31 January 2026 at 23:06:55 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>