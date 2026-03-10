# arePlainObjects

## Disgrifiad

Yn gwirio a yw pob elfen o arae yn wrthrychau plaen, gan ddychwelyd `true` dim ond os yw pob elfen yn gymwys.

### Achos defnydd

Dilysu data allanol neu heb deip (e.e., JSON wedi'i barso, llwythi tâl API, cyflwyniadau ffurflen) i sicrhau eich bod
wedi derbyn arae nad yw'n wag lle mae pob cofnod yn wrthrych plaen cyn iteru a darllen priodweddau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `arePlainObjects` i ddilysu mewnbwn anhysbys cyn ei drin fel `Record<string, unknown>[]` (neu siâp
> gwrthrych llymach) yn TypeScript.

### Manteision

- Yn sicrhau bod pob elfen yn yr arae fewnbwn yn wrthrych plaen, gan ddychwelyd `true` dim ond pan fo pob eitem yn
  cyfateb.
- Yn gwrthod mewnbynnau annilys yn gynnar (nad ydynt yn araeau neu araeau gwag) drwy ddychwelyd `false`.
- Yn trin gwrthrychau llythrennol (object-literal) a gwrthrychau `Object.create(null)` fel gwrthrychau plaen dilys.

## Defnydd

### Cystrawen

Swyddogaeth:

- `arePlainObjects(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau sy'n wrthrychau plaen.

### Mewnforio swyddogaeth leol

```ts
import { arePlainObjects } from "@type-check/guards";

const a = arePlainObjects([{ a: 1 }, { b: 2 }]); // gwir
const b = arePlainObjects([{}, Object.create(null)]); // gwir
const c = arePlainObjects([{ a: 1 }, 2 as unknown]); // ffug
const d = arePlainObjects([] as unknown[]); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.arePlainObjects(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [arePlainObjects](../_analysis/arePlainObjects.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 16:24:50 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>