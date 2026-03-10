# areFilledArrays

## Aprašymas

`areFilledArrays` patikrina, ar dvimatis masyvas nėra tuščias ir ar visi jo poaibiai nėra tušti.

### Naudojimo atvejis

Naudokite `areFilledArrays`, kad patikrintumėte lentelės ar matricos tipo įvestį (pvz., CSV eilutes, tinklelio duomenis,
sugrupuotus rezultatus), kad galėtumėte saugiai daryti prielaidą, jog yra bent vienas poaibis ir nė vienas poaibis nėra
tuščias.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areFilledArrays`, kai reikia užtikrinti, kad 2D masyvas turėtų bent vieną eilutę ir kad kiekvienoje
> eilutėje būtų bent vienas elementas prieš iteruojant ar indeksuojant.

### Privalumai

- Patikrina, ar išorinis masyvas nėra tuščias ir ar kiekvienas vidinis masyvas taip pat nėra tuščias, grąžindamas `true`
  tik tada, kai įvykdomos abi sąlygos.
- Veikia su bet kokiais elementų tipais poaibiuose (pvz., skaičiais, eilutėmis, objektais, įdėtais masyvais), nes
  tikrina tik masyvų „užpildymo“ būseną, o ne elementų turinį.
- Pateikia paprastą loginį rezultatą (`true`/`false`), tinkamą kaip apsauga prieš apdorojant dvimačius duomenis.

## Naudojimas

### Sintaksė

Funkcija:

- `areFilledArrays(array)`

Parametrai:

- `array`: Tikrinamas dvimatis masyvas.

### Lokalus funkcijos importas

```ts
import { areFilledArrays } from "@type-check/guards";

const a: unknown[][] = [[1]];
const b: unknown[][] = [["a", "b"], [1, 2, 3]];
const c: unknown[][] = [[{}, []], ["string"]];
const d: unknown[][] = [[]];
const e: unknown[][] = [[], [1, 2, 3]];
const f: unknown[][] = [];

console.log(areFilledArrays(a)); // tiesa
console.log(areFilledArrays(b)); // tiesa
console.log(areFilledArrays(c)); // tiesa
console.log(areFilledArrays(d)); // netiesa
console.log(areFilledArrays(e)); // netiesa
console.log(areFilledArrays(f)); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areFilledArrays(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areFilledArrays](../_analysis/areFilledArrays.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 11:57:37 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>