# isInteger

## Disgrifiad

Yn pennu a yw `value` penodol yn rhif cyfanrif diogel.

### Achos defnydd

Dilysu mewnbwn nad yw'n ymddiriedus (e.e., paramedrau ymholiad, llwythi JSON, newidynnau amgylchedd) cyn ei ddefnyddio
fel cyfanrif ar gyfer mynegeion arae, tudaleniad, cyfrifwyr, neu IDau cronfa ddata.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `isInteger` i ddilysu mewnbwn anhysbys cyn ei drin fel cyfanrif rhifol; mae'n dychwelyd `true` dim ond ar
> gyfer gwerthoedd lle mae `typeof value === "number"` a `Number.isSafeInteger(value)`.

### Manteision

- Yn gwirio diogelwch math a rhifol: yn dychwelyd `true` dim ond pan fo'r mewnbwn yn rhif ac yn gyfanrif diogel.
- Yn atal peryglon cyffredin gyda gorfodaeth rifiadol: mae llinynnau fel "5" yn dychwelyd `false` yn gywir.
- Yn gwrthod rhifau nad ydynt yn gyfanrifau a chyfanrifau anniogel, gan ei wneud yn addas ar gyfer IDau, cyfrifwyr, a
  mynegeio araeau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `isInteger(value)`

Paramedrau:

- `value`: Y gwerth i'w wirio am statws cyfanrif.

### Mewnforio swyddogaeth leol

```ts
import { isInteger } from "@type-check/guards";

const a = isInteger(5);      // gwir
const b = isInteger(-100);   // gwir
const c = isInteger("5");    // ffug
const d = isInteger(5.5);    // ffug
const e = isInteger(null);   // ffug

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.isInteger(value)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [isInteger](../_analysis/isInteger.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:49:32 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>