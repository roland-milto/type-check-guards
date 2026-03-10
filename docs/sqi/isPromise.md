# isPromise

## Përshkrim

Përcakton nëse një vlerë e dhënë është një `Promise`.

### Rast përdorimi

Përdor `isPromise` për të validuar hyrje të panjohura përpara se t’i trajtosh si një `Promise`, p.sh. kur trajton vlera
të kthyera nga plugin-e, importe dinamike, ose API me tipizim të lirshëm.

> **Shënim për përdoruesit e TypeScript:**
>
> `isPromise` kontrollon përmes `instanceof Promise`, ndaj kthen `true` vetëm për instanca reale `Promise` (jo thenable
> të përgjithshme).

### Përparësi

- Ofron një kontroll të thjeshtë në kohë ekzekutimi për të përcaktuar nëse një vlerë është një `Promise`.
- Ndihmon në mbrojtjen e rrugëve të kodit që kërkojnë një instancë reale `Promise`, duke kthyer `true` ose `false` në
  mënyrë të parashikueshme.
- Shmang pozitivët e rremë nga objektet “thenable” (p.sh., `{ then() {} }`) duke kërkuar një instancë aktuale `Promise`.

## Përdorim

### Sintaksë

Funksion:

- `isPromise(value)`

Parametra:

- `value`: Vlera që do të kontrollohet.

### Import lokal i funksionit

```ts
import { isPromise } from "@type-check/guards";

const a: unknown = Promise.resolve(123);
const b: unknown = { then() {} };

if (isPromise(a)) {
  a.then((v) => console.log("resolved:", v));
}

console.log(isPromise(a)); // e vërtetë
console.log(isPromise(b)); // e rreme
console.log(isPromise(123)); // e rreme
console.log(isPromise(null)); // e rreme

```

### Import global i objektit

Për të importuar funksionet si metoda globale të objektit, përdor:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metoda e mëposhtme do të jetë e disponueshme globalisht:

- `Type.isPromise(value)`

## Analizë funksionesh

Këtu është dokumentuar një analizë tabelore e daljes që krijohet kur futen parametra të ndryshëm në
funksione: [isPromise](../_analysis/isPromise.md)

<br>

---

<small>Skedari u gjenerua më 30 January 2026 at 23:54:19 (UTC) me përdorimin e *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** nga *
*[Roland Milto](https://roland-milto.de/)**.</small>