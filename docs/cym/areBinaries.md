# areBinaries

## Disgrifiad

Yn gwirio a yw'r gwerth a ddarperir yn arae nad yw'n wag o linynnau deuaidd dilys ac yn dychwelyd `true` dim ond os yw
pob eitem yn pasio dilysiad.

### Achos defnydd

Defnyddiwch `areBinaries` pan fyddwch yn derbyn rhestr anhysbys (e.e., o JSON, ffurflenni, neu APIs) ac angen sicrhau ei
bod yn arae nad yw'n wag o linynnau deuaidd cyn ei dosrannu neu ei phrosesu.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areBinaries` i ddilysu mewnbwn anhysbys cyn trosi llinynnau deuaidd yn rifau/BigInts; mae'n sicrhau nad
> yw'r arae'n wag a bod pob elfen yn llinyn deuaidd dilys.

### Manteision

- Dilysu bod gwerth yn arae nad yw'n wag lle mae pob elfen yn llinyn deuaidd dilys.
- Dychwelyd canlyniad booleaidd syml (`true`/`false`) sy'n addas ar gyfer gwarchodwyr, dychweliadau cynnar, a dilysu
  mewnbwn.
- Atal gwallau dosrannu i lawr y llif drwy wrthod araeau sy'n cynnwys unrhyw gofnod nad yw'n ddeuaidd.

## Defnydd

### Cystrawen

Swyddogaeth:

- `areBinaries(array)`

Paramedrau:

- `array`: Y gwerth i'w wirio.

### Mewnforio swyddogaeth leol

```ts
import { areBinaries } from "@type-check/guards";

const a = ["0b1010", "1101"];
const b = ["1010", "1020"];

console.log(areBinaries(a)); // gwir
console.log(areBinaries(b)); // ffug
console.log(areBinaries([])); // ffug
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areBinaries(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areBinaries](../_analysis/areBinaries.md)

<br>

---

<small>Crëwyd y ffeil ar 31 January 2026 at 23:14:13 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>