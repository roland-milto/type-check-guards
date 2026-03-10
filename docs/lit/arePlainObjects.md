# arePlainObjects

## Aprašymas

Patikrina, ar visi masyvo elementai yra paprasti objektai, grąžindamas `true` tik jei kiekvienas elementas atitinka
reikalavimus.

### Naudojimo atvejis

Patikrinkite išorinius arba netipuotus duomenis (pvz., išanalizuotą JSON, API naudingąją apkrovą, formų pateikimus), kad
įsitikintumėte, jog gavote netuščią masyvą, kuriame kiekvienas įrašas yra paprastas objektas, prieš iteruodami ir
skaitydami savybes.

> **Pastaba TypeScript naudotojams:**
>
> Naudokite `arePlainObjects`, kad patikrintumėte nežinomą įvestį prieš laikydami ją `Record<string, unknown>[]` (arba
> griežtesnės objektų formos) TypeScript aplinkoje.

### Privalumai

- Užtikrina, kad kiekvienas įvesties masyvo elementas yra paprastas objektas, grąžindamas `true` tik tada, kai visi
  elementai atitinka.
- Anksti atmeta neteisingas įvestis (ne masyvus arba tuščius masyvus), grąžindamas `false`.
- Laiko tiek objektų literalo objektus, tiek `Object.create(null)` objektus galiojančiais paprastais objektais.

## Naudojimas

### Sintaksė

Funkcija:

- `arePlainObjects(array)`

Parametrai:

- `array`: Masyvas, kurį reikia patikrinti dėl paprastų objektų elementų.

### Lokalus funkcijos importas

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // tiesa
const b = arePlainObjects([{}, Object.create(null)]); // tiesa
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // netiesa
const d = arePlainObjects([] as unknown[]); // netiesa
```

### Globalus objekto importas

Norėdami importuoti funkcijas kaip globalius objekto metodus, naudokite:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tuomet šis metodas bus prieinamas globaliai:

- `Type.arePlainObjects(array)`

## Funkcijų analizė

Čia dokumentuota lentelinė analizė, kokia išvestis gaunama į funkcijas įvedant skirtingus
parametrus: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Failas buvo sugeneruotas 30 January 2026 at 16:54:40 (UTC) naudojant *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** pagal *
*[Roland Milto](https://roland-milto.de/)**.</small>