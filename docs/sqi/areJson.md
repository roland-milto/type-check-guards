# areJson

## Përshkrim

Kontrollon nëse të gjithë elementët e një vargu janë vargje JSON, duke kthyer `true` vetëm nëse vargu është i mbushur
dhe çdo element është JSON i vlefshëm; përndryshe kthen `false`.

### Rast përdorimi

Vërteto të dhënat hyrëse (p.sh., nga parametrat e query, variablat e mjedisit, ose API-të e jashtme) kur pret një varg
vargjesh të koduara si JSON dhe dëshiron të refuzosh vargjet bosh ose çdo hyrje jo-JSON.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdor `areJson` kur ke nevojë të vërtetosh që një `unknown[]` përmban vetëm vargje JSON përpara se t’i analizosh (
> p.sh., me `JSON.parse`).

### Përparësi

- Kthen `true` vetëm kur çdo element është një varg JSON i vlefshëm; përndryshe kthen `false`.
- Dështon shpejt: ndalon kontrollimin sapo të gjendet një element jo-JSON.
- Refuzon vargjet bosh sipas dizajnit, duke kthyer `false` për hyrje të paplotësuar.

## Përdorim

### Sintaksë

Funksion:

- `areJson(array)`

Parametra:

- `array`: Vargu që do të kontrollohet për elemente që janë vargje JSON.

### Import lokal i funksionit

```ts
import { areJson } from "@type-check/guards";

const ok = areJson(["{\"a\":1}", "{\"b\":2}"]); // e vërtetë
const mixed = areJson(["{\"a\":1}", 123 as unknown]); // e rreme
const empty = areJson([]); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areJson(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areJson](../_analysis/areJson.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 16:17:33 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>