# areStrings

## Përshkrim

`areStrings` kontrollon nëse një varg është jo-bosh dhe nëse të gjithë elementët e tij janë vargje (strings), duke
kthyer `true` vetëm në atë rast.

### Rast përdorimi

Valido të dhëna të jashtme ose të ofruara nga përdoruesi (p.sh., parametra të query-t, payload-e JSON, fusha CSV) për të
siguruar që ke një listë jo-bosh vargjesh përpara përpunimit.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areStrings` për të validuar vargje të panjohura përpara se të aplikosh logjikë vetëm për vargje; kthen `false`
> për vargjet bosh.

### Përparësi

- Siguron që çdo element është një varg (string) dhe refuzon vargjet me tipe të përziera duke kthyer `false`.
- Refuzon vargjet bosh, kështu që `true` tregon vetëm një listë jo-bosh vargjesh.
- I dobishëm si një kontroll i shpejtë në kohë ekzekutimi përpara kryerjes së operacioneve vetëm për vargje (p.sh.,
  `trim`, `toLowerCase`).

## Përdorim

### Sintaksë

Funksion:

- `areStrings(value)`

Parametra:

- `value`: Expected type `string[]`.

### Import lokal i funksionit

```ts
import { areStrings } from "@type-check/guards";

const input: unknown = ["hello", "world"];

if (Array.isArray(input) && areStrings(input)) {
  // input është një string[] jo-bosh në kohë ekzekutimi
  const upper = input.map((s) => s.toUpperCase());
  console.log(upper);
} else {
  console.log("Not a non-empty array of strings");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areStrings(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areStrings](../_analysis/areStrings.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 13:20:28 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>