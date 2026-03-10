# isTrue

## Apraksts

`isTrue` nosaka, vai dotā vērtība ir stingri vienāda ar `true`.

### Lietošanas gadījums

Izmantojiet `isTrue`, lai validētu karodziņus, funkciju pārslēgus (feature toggles) vai konfigurācijas vērtības, kur
jāpieņem tikai literālis `true`, bet viss pārējais jāuzskata par `false`.

> **Piezīme TypeScript lietotājiem:**
>
> Izmantojiet `isTrue`, ja nepieciešams pieņemt tikai booleja literāli `true`, nevis vienkārši patiesas (truthy)
> vērtības.

### Priekšrocības

- Nodrošina stingru pārbaudi booleja literālim `true` (bez tipa piespiedu pārveides).
- Palīdz atšķirt `true` no patiesām (truthy) vērtībām, piemēram, `1`, `"true"` vai `{}`.
- Vienkārša, paredzama uzvedība, kas piemērota sargiem (guards) un validācijas konveijeriem.

## Lietošana

### Sintakse

Funkcija:

- `isTrue(value)`

Parametri:

- `value`: Vērtība, ko pārbaudīt.

### Lokāls funkcijas imports

```ts
import { isTrue } from "@type-check/guards";

const a = isTrue(true);      // patiess
const b = isTrue(1);         // aplams
const c = isTrue("true");   // aplams

if (isTrue(a)) {
  // a šeit ir patiess
}
```

### Globāls objekta imports

Lai importētu funkcijas kā globālas objekta metodes, izmantojiet:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Tad globāli būs pieejama šī metode:

- `Type.isTrue(value)`

## Funkciju analīze

Šeit ir dokumentēta tabulveida analīze par izvadi, kas rodas, funkcijās ievadot dažādus
parametrus: [isTrue](../_analysis/isTrue.md)

<br>

---

<small>Fails tika izveidots 30 January 2026 at 13:45:23 (UTC), izmantojot *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**, autors: *
*[Roland Milto](https://roland-milto.de/)**.</small>