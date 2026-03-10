# isFilledArray

## Aprašymas

Patikrina, ar `value` yra masyvas su bent vienu elementu, grąžindama `true` arba `false`.

### Naudojimo atvejis

Naudokite `isFilledArray` įeinantiems duomenims (pvz., API naudingosioms apkrovoms, formų reikšmėms, konfigūracijai)
patikrinti prieš iteruojant, pasiekiant pirmą elementą arba taikant logiką, kuriai reikia bent vieno elemento.

> **Pastaba TypeScript naudotojams:**
>
> `isFilledArray` yra vykdymo laiko apsauginė funkcija, kuri grąžina loginę reikšmę; ji nesusiaurina elementų tipų,
> išskyrus patvirtinimą, kad masyvas yra netuščias.

### Privalumai

- Paprastas, greitas netuščio masyvo patikrinimas naudojant `Array.isArray` ir ilgio patikrą.
- Padeda išvengti vykdymo laiko klaidų, kai kodas daro prielaidą, kad masyvas turi bent vieną elementą.
- Aiškus loginis rezultatas: grąžina `true` netuštiems masyvams ir `false` kitu atveju.

## Naudojimas

### Sintaksė

Funkcija:

- `isFilledArray(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar tai netuščias masyvas.

### Lokalus funkcijos importas

```ts
import { isFilledArray } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && isFilledArray(input)) {
  // įvestis vykdymo metu yra netuščias masyvas
  console.log(input[0]);
} else {
  console.log("Not a non-empty array");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isFilledArray(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isFilledArray](../_analysis/isFilledArray.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 11:47:50 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>