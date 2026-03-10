# isNumeric

## Përshkrim

`isNumeric` përcakton nëse një `value` e dhënë konsiderohet numerike duke kontrolluar tipin e saj të zgjidhur kundrejt
`NUMERIC_TYPES`.

### Rast përdorimi

Përdorni `isNumeric` për të validuar inputet (p.sh., payload-e API, vlera formularësh, konfigurim) përpara kryerjes së
operacioneve numerike, dhe për të pranuar në mënyrë të qëndrueshme tipe të ngjashme me numeriket (si `BigInt`) sipas
`NUMERIC_TYPES`.

> **Shënim për përdoruesit e TypeScript:**
>
> `isNumeric` është një predikat që kthen boolean; trajtojeni si një kontroll në kohë ekzekutimi për të parë nëse një
> vlerë i përket grupit të tipeve numerike të përcaktuara nga biblioteka.

### Përparësi

- Përdor `getTypeOf` së bashku me `NUMERIC_TYPES` për të centralizuar logjikën e zbulimit të vlerave numerike dhe për
  t’i mbajtur kontrollet të qëndrueshme në të gjithë bazën e kodit.
- Kthen një boolean të thjeshtë (`true`/`false`) për degëzim të lehtë dhe përdorim në stilin guard.
- Mbështet përfaqësime të shumta numerike (p.sh., `number`, `BigInt`) siç përcaktohen nga `NUMERIC_TYPES`.

## Përdorim

### Sintaksë

Funksion:

- `isNumeric(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për tip numerik.

### Import lokal i funksionit

```ts
import { isNumeric } from "@type-check/guards";

const inputs: unknown[] = [42, 3.14, BigInt(1000), "123", null, undefined];

for (const v of inputs) {
  if (isNumeric(v)) {
    // v konsiderohet numerik sipas rregullave të tipit të bibliotekës
    console.log("numeric:", v);
  } else {
    console.log("not numeric:", v);
  }
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isNumeric(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isNumeric](../_analysis/isNumeric.md)

<br>

---

<small>Skedari u gjenerua më 6 February 2026 at 15:54:35 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>