# isTrue

## Aprašymas

`isTrue` nustato, ar pateikta reikšmė yra griežtai lygi `true`.

### Naudojimo atvejis

Naudokite `isTrue` vėliavėlėms, funkcijų perjungikliams ar konfigūracijos reikšmėms validuoti, kai turi būti priimamas
tik literalas `true`, o visa kita turi būti laikoma `false`.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `isTrue`, kai reikia priimti tik loginės reikšmės literalą `true`, o ne vien „truthy“ reikšmes.

### Privalumai

- Suteikia griežtą loginės reikšmės literalo `true` patikrą (be tipų konvertavimo).
- Padeda atskirti `true` nuo „truthy“ reikšmių, tokių kaip `1`, `"true"` ar `{}`.
- Paprastas, nuspėjamas elgesys, tinkamas sargams ir validavimo grandinėms.

## Naudojimas

### Sintaksė

Funkcija:

- `isTrue(value)`

Parametrai:

- `value`: Reikšmė, kurią reikia patikrinti.

### Lokalus funkcijos importas

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // tiesa
const b = isTrue(1);         // netiesa
const c = isTrue("true");   // netiesa

if (isTrue(a)) {
  // a čia yra tiesa
}
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.isTrue(value)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 13:45:22 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>