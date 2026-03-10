# isDecimal

## Përshkrim

`isDecimal` kontrollon nëse një vlerë është një përfaqësim vargu dhjetor pa hapësira të bardha në fillim/fund dhe me një
format dhjetor të vlefshëm.

### Rast përdorimi

Valido fushat e formularit, payload-et e API-së, ose vlerat e konfigurimit që duhet të jepen si një varg dhjetor (
opsionalisht me shenjë) pa asnjë hapësirë të bardhë përreth, përpara analizimit ose ruajtjes së tyre.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isDecimal` për të validuar hyrjen e përdoruesit përpara se ta konvertosh (p.sh., me `Number(value)`),
> veçanërisht kur hapësirat e bardha duhet të refuzohen.

### Përparësi

- Vërteton në mënyrë strikte që hyrja është një varg dhe përputhet me një model literal dhjetor.
- Refuzon hapësirat e bardha në fillim dhe në fund (përfshirë karakteret e kontrollit) për të shmangur analizimin e
  paqartë.
- Kryen kontrolle të shpejta paraprake (kontroll tipi dhe karakteri i parë/i fundit) përpara se të ekzekutojë regex-in.
- Kthen një rezultat të thjeshtë boolean (`true`/`false`) i përshtatshëm për guards dhe validimin e hyrjes.

## Përdorim

### Sintaksë

Funksion:

- `isDecimal(value)`

Parametra:

- `value`: Vlera që duhet kontrolluar për një format vargu dhjetor.

### Import lokal i funksionit

```ts
import { isDecimal } from "@type-check/guards";

const inputs: unknown[] = ["123.45", "0.99", "-42.0", 123.45, " 123.45", "123.45 "];

for (const v of inputs) {
  if (isDecimal(v)) {
    // v është një varg këtu (i vërtetuar në kohë ekzekutimi)
    console.log("decimal:", v);
  } else {
    console.log("not decimal:", v);
  }
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isDecimal(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isDecimal](../_analysis/isDecimal.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 15:54:40 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>