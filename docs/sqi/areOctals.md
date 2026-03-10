# areOctals

## Përshkrim

`areOctals` përcakton nëse vlera e dhënë është një varg jo-bosh me vargje oktale të vlefshme.

### Rast përdorimi

Përdorni `areOctals` kur vërtetoni inputin e përdoruesit, vlerat e konfigurimit, ose payload-et e API-së që duhet të
përmbajnë literale oktale (p.sh., mënyrat e lejeve të skedarëve si `0o755`) dhe dëshironi të refuzoni vargjet bosh ose
çdo hyrje të pavlefshme duke kthyer `false`.

> **Shënim për përdoruesit e TypeScript:**
>
> Përdorni `areOctals` për t’u siguruar që keni një `unknown[]` jo-bosh ku çdo hyrje është një varg oktal i vlefshëm
> përpara konvertimit (p.sh., përmes `Number(...)` ose analizimit të personalizuar).

### Përparësi

- Vërteton që një vlerë është një varg jo-bosh ku çdo element është një varg oktal, duke kthyer `true` vetëm kur të
  gjithë elementët kalojnë.
- Dështon shpejt: kthen `false` sapo të gjendet një element jo-oktal.
- E dobishme si një mbrojtës përpara analizimit ose konvertimit të vargjeve oktale për të shmangur gabimet në kohë
  ekzekutimi dhe trajtimin e paqëndrueshëm të inputit.

## Përdorim

### Sintaksë

Funksion:

- `areOctals(array)`

Parametra:

- `array`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { areOctals } from "@type-check/guards";

const value: unknown = ["0o123", "+0O755"];

if (Array.isArray(value) && areOctals(value)) {
  // vlera është një varg jo bosh me vargje oktale
  const parsed = value.map(v => Number(v));
  console.log(parsed);
} else {
  console.log("Not an array of octal strings");
}

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.areOctals(array)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [areOctals](../_analysis/areOctals.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 14:58:21 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>