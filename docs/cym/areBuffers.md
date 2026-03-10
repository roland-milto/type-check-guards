# areBuffers

## Disgrifiad

Mae `areBuffers` yn gwirio a yw’r gwerth a ddarperir yn arae nad yw’n wag ac sydd wedi’i llenwi lle mae pob elfen yn
`Buffer`, gan ddychwelyd `true` os felly a `false` fel arall.

### Achos defnydd

Dilysu araeau darnau sy’n dod i mewn (e.e., o ffrydiau, uwchlwythiadau ffeiliau, neu becynnau rhwydwaith) i sicrhau bod
pob rhan yn enghraifft `Buffer` cyn eu cydgadwynu, eu dadgodio, neu eu pasio i swyddogaethau cryptograffig neu brosesu
deuaidd.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areBuffers` i ddilysu `unknown[]` cyn galw APIau penodol i Buffer fel `Buffer.concat`, gan sicrhau bod y
> swyddogaeth yn dychwelyd `true` dim ond pan fo pob elfen yn `Buffer`.

### Manteision

- Yn sicrhau bod pob elfen yn y mewnbwn yn enghraifft `Buffer` Node.js, gan ddychwelyd `true` dim ond pan fo’r arae
  gyfan yn cyfateb.
- Yn gwrthod mewnbynnau annilys yn gynnar drwy fynnu arae nad yw’n wag ac sydd wedi’i llenwi; yn dychwelyd `false` ar
  gyfer araeau gwag neu rai nad ydynt yn araeau.
- Yn ddefnyddiol fel gwarchodwr cyn perfformio gweithrediadau sy’n gweithio gyda byfferau yn unig (e.e., cydgadwynu,
  hasio, protocolau deuaidd).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areBuffers(array)`

Paramedrau:

- `array`: Yr arae i’w gwirio am enghreifftiau byffer.

### Mewnforio swyddogaeth leol

```ts
import { areBuffers } from "@type-check/guards";

const chunks: unknown[] = [Buffer.from("test"), Buffer.from("123")];

if (areBuffers(chunks)) {
  const combined = Buffer.concat(chunks);
  console.log(combined.toString("utf8"));
} else {
  throw new TypeError("Expected a non-empty array of Buffer instances");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areBuffers(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 16:24:46 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>