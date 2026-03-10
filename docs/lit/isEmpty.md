# isEmpty

## Aprašymas

Nustato, ar pateikta reikšmė yra tuščia, grąžindamas `true` reikšmėms `null`, `undefined`, tuščioms / tik iš tarpų
sudarytoms eilutėms, tuštiems masyvams, tuštiems `Map`/`Set` arba objektams be nuosavų išvardijamų savybių.

### Naudojimo atvejis

Naudokite `isEmpty` įvesčių validacijai ir trūkstamų / tuščių reikšmių aptikimui per kelis duomenų tipus (pvz., formų
laukus, API užklausų duomenis, konfigūracijos objektus), kai `null`, `undefined`, tik iš tarpų sudarytos eilutės,
tuščios kolekcijos ir objektai be savybių turėtų būti laikomi tuščiais.

> **Pastaba TypeScript naudotojams:**
>
> `isEmpty` yra loginę reikšmę grąžinanti pagalbinė funkcija (ne TypeScript tipo predikatas), todėl ji pati savaime
> nesusiaurina tipų; naudokite ją validacijai / šakotumui, o ne kompiliavimo laiko tipo siaurinimui.

### Privalumai

- Laiko `null` ir `undefined` kaip `true` tuštumo tikrinimams.
- Laiko tik iš tarpų sudarytas eilutes tuščiomis, nes prieš tikrinant ilgį apkarpo (trim).
- Palaiko įprastus konteinerių tipus (masyvus, `Map`, `Set`) ir paprastus objektus be nuosavų išvardijamų savybių.
- Vengia skaičiuoti paveldėtas savybes, naudodamas `hasOwnProperty` patikras.
- Grąžina paprastą loginį rezultatą (`true`/`false`), tinkamą sargams ir validacijai.

## Naudojimas

### Sintaksė

Funkcija:

- `isEmpty(value)`

Parametrai:

- `value`: Reikšmė, kurios tuštumas tikrinamas.

### Lokalus funkcijos importas

```ts
import { isEmpty } from "@type-check/guards";

const values: unknown[] = [
  null,
  undefined,
  "   ",
  "Hello",
  [],
  [1],
  new Map(),
  new Set(["x"]),
  {},
  { a: undefined }
];

const results = values.map(v => ({ value: v, empty: isEmpty(v) }));
console.log(results);

```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isEmpty(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isEmpty](../_analysis/isEmpty.md)

<br>

---

<small>Failas buvo sugeneruotas 6 February 2026 at 16:19:26 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>