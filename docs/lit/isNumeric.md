# isNumeric

## Aprašymas

`isNumeric` nustato, ar pateikta `value` laikoma skaitine, patikrindama jos nustatytą tipą pagal `NUMERIC_TYPES`.

### Naudojimo atvejis

Naudokite `isNumeric` įvesčių (pvz., API užklausų duomenų, formų reikšmių, konfigūracijos) validavimui prieš atliekant
skaitines operacijas ir tam, kad nuosekliai priimtumėte skaitiniams panašius tipus (pvz., `BigInt`) pagal
`NUMERIC_TYPES`.

> **Pastaba TypeScript naudotojams:**
>
> `isNumeric` yra predikatas, grąžinantis loginę reikšmę; laikykite jį vykdymo laiko patikrinimu, ar reikšmė priklauso
> bibliotekos apibrėžtam skaitinių tipų rinkiniui.

### Privalumai

- Naudoja `getTypeOf` kartu su `NUMERIC_TYPES`, kad centralizuotų skaitinių reikšmių aptikimo logiką ir užtikrintų
  nuoseklius patikrinimus visoje kodo bazėje.
- Grąžina paprastą loginę reikšmę (`true`/`false`), kad būtų lengva šakoti logiką ir naudoti kaip apsauginį (guard)
  patikrinimą.
- Palaiko kelias skaitines reprezentacijas (pvz., `number`, `BigInt`), kaip apibrėžta `NUMERIC_TYPES`.

## Naudojimas

### Sintaksė

Funkcija:

- `isNumeric(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti, ar ji yra skaitinio tipo.

### Lokalus funkcijos importas

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v pagal bibliotekos tipų taisykles laikomas skaitiniu
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isNumeric(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 15:53:22 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>