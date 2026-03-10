# areStrings

## Aprašymas

`areStrings` patikrina, ar masyvas yra netuščias ir ar visi jo elementai yra eilutės, ir grąžina `true` tik tokiu
atveju.

### Naudojimo atvejis

Patikrinti išorinius arba naudotojo pateiktus duomenis (pvz., užklausos parametrus, JSON duomenų paketus, CSV laukus),
kad prieš apdorojant įsitikintumėte, jog turite netuščą eilučių sąrašą.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `areStrings`, kad patikrintumėte nežinomus masyvus prieš taikydami tik su eilutėmis susijusią logiką;
> tuštiems masyvams ji grąžina `false`.

### Privalumai

- Užtikrina, kad kiekvienas elementas yra eilutė, ir atmeta mišraus tipo masyvus, grąžindamas `false`.
- Atmeta tuščius masyvus, todėl `true` reiškia tik netuščią eilučių sąrašą.
- Naudinga kaip greita vykdymo laiko patikra prieš atliekant tik su eilutėmis susijusias operacijas (pvz., `trim`,
  `toLowerCase`).

## Naudojimas

### Sintaksė

Funkcija:

- `areStrings(value)`

Parametrai:

- `value`: Expected type `string[]`.

### Lokalus funkcijos importas

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // įvestis vykdymo metu yra netuščias string[]
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areStrings(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:19:07 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>