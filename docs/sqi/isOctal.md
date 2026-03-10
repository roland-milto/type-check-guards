# isOctal

## Përshkrim

Përcakton nëse një vlerë është një varg literal oktal i vlefshëm (p.sh. `0o755`).

### Rast përdorimi

Vërtetoni hyrjen e përdoruesit ose vlerat e konfigurimit që duhet të shprehen si varg literal oktal (për shembull,
mënyrat e lejeve të skedarëve si `0o644`) përpara se t’i analizoni ose t’i konvertoni.

> **Shënim për përdoruesit e TypeScript:**
>
> `isOctal` është një mbrojtës tipi (`value is string`). Pas një rezultati `true`, TypeScript e ngushton variablën e
> kontrolluar në `string`.

### Përparësi

- Ofron një mbrojtës të rreptë tipi: kthen `true` vetëm kur hyrja është një varg që përputhet me formatin e një literali
  oktal.
- Refuzon vargjet bosh dhe vargjet me hapësira në fillim/fund (kontroll/hapësirë ASCII), duke ulur përputhjet
  aksidentale.
- Mbështet shenjën opsionale dhe nuk bën dallim mes shkronjave të mëdha/vogla për prefiksin `0o`/`0O`.
- Është tolerant ndaj hyrjeve që nuk janë vargje duke kthyer `false` në vend që të hedhë përjashtim.

## Përdorim

### Sintaksë

Funksion:

- `isOctal(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isOctal } from "@type-check/guards";

const a: unknown = "0o123";
const b: unknown = "+0O755";
const c: unknown = "0o128";
const d: unknown = 0o123;

console.log(isOctal(a)); // e vërtetë
console.log(isOctal(b)); // e vërtetë
console.log(isOctal(c)); // e rreme
console.log(isOctal(d)); // e rreme

if (isOctal(a)) {
  // a është varg këtu
  const normalized = a.toLowerCase();
  console.log(normalized);
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isOctal(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isOctal](../_analysis/isOctal.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 15:43:24 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>