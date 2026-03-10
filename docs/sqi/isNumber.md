# isNumber

## Përshkrim

`isNumber` kontrollon nëse një vlerë është një numër i fundëm, jo-`NaN`.

### Rast përdorimi

Valido hyrjen numerike nga burime jo të besueshme (formularë, parametra query, payload-e JSON) përpara llogaritjeve,
ruajtjes ose kontrolleve të intervalit, duke siguruar që vetëm numrat e fundëm kalojnë (`true`) dhe gjithçka tjetër
kthen `false`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isNumber` për të validuar vlera `unknown` përpara se të bësh veprime aritmetike; ai refuzon `NaN`, `Infinity`
> dhe `-Infinity`.

### Përparësi

- Kthen `true` vetëm për numra realë JavaScript (kontroll tipi plus refuzim i `NaN` dhe i pafundësisë).
- Parandalon gabime të zakonshme validimi ku `NaN`, `Infinity` ose `-Infinity` kalojnë gabimisht si numra.
- Funksionon mirë si një mbrojtës në kohë ekzekutimi për hyrje të panjohura (p.sh., JSON, hyrje përdoruesi, API të
  jashtme).
- I thjeshtë, i shpejtë dhe pa efekte anësore.

## Përdorim

### Sintaksë

Funksion:

- `isNumber(value)`

Parametra:

- `value`: Vlera për t'u kontrolluar.

### Import lokal i funksionit

```ts
import { isNumber } from "@type-check/guards";

const input: unknown = 42;

if (isNumber(input)) {
  // input është një numër i vlefshëm i fundëm
  const doubled = input * 2;
  console.log(doubled);
} else {
  console.log("Not a valid number");
}

console.log(isNumber(NaN));
console.log(isNumber(Infinity));
console.log(isNumber("42"));
```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isNumber(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isNumber](../_analysis/isNumber.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:11:02 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>