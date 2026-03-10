# areOfType

## Aprašymas

Patikrina, ar visi pateikto `array` elementai yra nurodyto `type`.

### Naudojimo atvejis

Naudokite `areOfType` nežinomai įvesčiai (pvz., išanalizuotam JSON, API duomenų paketams, naudotojo įvesčiai) patikrinti
prieš atliekant tipui specifines operacijas su kiekvienu masyvo elementu.

> **Pastaba TypeScript naudotojams:**
>
> Kadangi `areOfType` yra tipo apsauga, TypeScript susiaurina masyvą `if (areOfType(...)) {}` bloke iki
`Array<DataTypeOf<T>>`.

### Privalumai

- Pateikia TypeScript tipo apsaugą: kai grąžina `true`, įvestis susiaurinama iki `Array<DataTypeOf<T>>`.
- Patikrina kiekvieną elementą pagal prašomą vykdymo laiko tipą, neleisdama praeiti mišraus tipo masyvams.
- Greitai nutraukia: grąžina `false` iškart, kai randamas neatitinkantis elementas.
- Pagal dizainą atmeta ne masyvus ir tuščius masyvus (priklauso nuo `isFilledArray`).

## Naudojimas

### Sintaksė

Funkcija:

- `areOfType(array, type)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti.
- `type`: Tipas, pagal kurį reikia patikrinti kiekvieną masyvo elementą.

### Lokalus funkcijos importas

```ts
import { areOfType } from "@type-check/guards";

const values: unknown[] = [1, 2, 3];

if (areOfType(values, "number")) {
  // values dabar yra number[]
  const sum = values.reduce((a, b) => a + b, 0);
  console.log(sum);
}

const mixed: unknown[] = [1, "2", 3];
const allNumbers = areOfType(mixed, "number"); // netiesa

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.areOfType(array, type)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [areOfType](../_analysis/areOfType.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 17:10:18 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>