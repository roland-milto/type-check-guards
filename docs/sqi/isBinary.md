# isBinary

## Përshkrim

`isBinary` përcakton nëse një vlerë është një varg binar (opsionalisht me prefiks `0b`/`0B`) dhe kthen `true` ose
`false`.

### Rast përdorimi

Valido vargjet e dhëna nga përdoruesi (p.sh., fusha formulari, argumente CLI, vlera konfigurimi) për të siguruar që
përfaqësojnë vetëm shifra binare, opsionalisht me prefiks `0b`/`0B`, përpara përpunimit të mëtejshëm.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `isBinary` si një type guard përpara se të analizosh ose të konvertosh një varg në `BigInt`/`Number` për të
> shmangur hyrje të pavlefshme.

### Përparësi

- Pranon vargje binare me ose pa prefiksin `0b`/`0B`.
- Refuzon vargje bosh dhe vargje me hapësira në fillim/fund (ASCII ≤ 32).
- Kthen `true`/`false` pa hedhur përjashtime, duke e bërë të sigurt për hyrje të panjohura.

## Përdorim

### Sintaksë

Funksion:

- `isBinary(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isBinary } from "@type-check/guards";

const a = isBinary("0b1010"); // e vërtetë
const b = isBinary("1010");   // e vërtetë
const c = isBinary("0b1020"); // e rreme
const d = isBinary(0b1010);     // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isBinary(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isBinary](../_analysis/isBinary.md)

<br>

---

<small>Skedari u gjenerua më 31 January 2026 at 23:11:22 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>