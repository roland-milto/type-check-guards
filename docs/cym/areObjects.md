# areObjects

## Disgrifiad

Mae `areObjects` yn gwirio a yw arae wedi'i llenwi a ddarperir yn cynnwys gwrthrychau yn unig.

### Achos defnydd

Defnyddiwch `areObjects` pan fyddwch yn derbyn arae anhysbys (e.e., o ddadansoddi JSON neu APIau allanol) ac mae angen
sicrhau ei bod yn ddi-wag a bod pob elfen yn wrthrych cyn iteru a chael mynediad at briodweddau gwrthrychau.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areObjects` i ddilysu `unknown[]` cyn trin eitemau fel gwrthrychau; mae'n dychwelyd `false` ar gyfer
> araeau gwag.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae wedi'i llenwi a bod pob elfen yn wrthrych.
- Yn stopio'n gynnar ac yn dychwelyd `false` cyn gynted ag y canfyddir elfen nad yw'n wrthrych.
- Yn helpu i ddilysu mewnbwn anhysbys cyn perfformio gweithrediadau penodol i wrthrychau.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areObjects(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau sy'n wrthrychau.

### Mewnforio swyddogaeth leol

```ts
import { areObjects } from "@type-check/guards";

const value: unknown = [{}, { a: 1 }, new Date()];

if (Array.isArray(value) && areObjects(value)) {
  // mae value yn arae wedi'i llenwi o wrthrychau
  console.log("All items are objects:", value.length);
} else {
  console.log("Not a filled array of objects");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areObjects(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areObjects](../_analysis/areObjects.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 00:08:23 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>