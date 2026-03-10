# areNumbers

## Disgrifiad

Mae `areNumbers` yn gwirio a yw gwerth yn arae nad yw'n wag lle mae pob elfen yn rhif.

### Achos defnydd

Dilysu data a ddarperir gan ddefnyddwyr neu gan API i sicrhau ei fod yn arae nad yw'n wag o rifau cyn cyfrifo
cyfansymiau, cyfartaleddau, neu agregiadau rhifiadol eraill.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areNumbers` i ddilysu araeau anhysbys cyn perfformio cyfrifiadau rhifiadol; mae'n dychwelyd `false` ar
> gyfer araeau gwag ac ar gyfer araeau sy'n cynnwys unrhyw werth nad yw'n rhif.

### Manteision

- Yn dychwelyd `true` dim ond pan fo'r mewnbwn yn arae nad yw'n wag a bod pob elfen yn rhif.
- Yn atal canlyniadau positif ffug drwy wrthod araeau gwag a mewnbynnau nad ydynt yn araeau.
- Yn ddefnyddiol fel gwarchodwr cyn gweithrediadau rhifiadol (e.e., crynhoi, cyfrifo cyfartaledd) i osgoi gwallau amser
  rhedeg.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areNumbers(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau rhif.

### Mewnforio swyddogaeth leol

```ts
import { areNumbers } from "@type-check/guards";

const input: unknown = [1, 2, 3];

if (Array.isArray(input) && areNumbers(input)) {
  const total = input.reduce((sum, n) => sum + n, 0);
  console.log(total);
} else {
  console.log("Not a non-empty number array");
}

```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areNumbers(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areNumbers](../_analysis/areNumbers.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 13:03:56 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>