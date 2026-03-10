# areBooleans

## Disgrifiad

Mae `areBooleans` yn gwirio a yw arae benodol nad yw'n wag yn cynnwys gwerthoedd boolean yn unig, gan ddychwelyd `true`
os yw'n gwneud hynny a `false` fel arall.

### Achos defnydd

Dilysu data a ddarperir gan ddefnyddwyr neu ddata allanol (e.e., llwythi JSON, paramedrau ymholiad, araeau ffurfweddu) i
sicrhau bod rhestr nad yw'n wag yn cynnwys booleans yn unig cyn cymhwyso rhesymeg boolean neu ei basio i APIs sy'n
disgwyl `boolean[]`.

> **Awgrym i ddefnyddwyr TypeScript:**
>
> Defnyddiwch `areBooleans` i ddilysu `unknown[]` cyn ei drin fel `boolean[]`; mae'n dychwelyd `false` ar gyfer araeau
> gwag, felly triniwch yr achos hwnnw'n benodol os dylid caniatáu rhestr wag.

### Manteision

- Yn dychwelyd `true` dim ond pan fo pob elfen yn boolean a bod y mewnbwn yn arae nad yw'n wag.
- Yn atal canlyniadau positif ffug drwy wrthod araeau gwag (yn dychwelyd `false`).
- Yn gweithio'n dda fel gwarchodwr amser rhedeg cyn gweithrediadau boolean-yn-unig (e.e., `every`, `some`, lleihad
  rhesymegol).

## Defnydd

### Cystrawen

Swyddogaeth:

- `areBooleans(array)`

Paramedrau:

- `array`: Yr arae i'w gwirio am elfennau boolean.

### Mewnforio swyddogaeth leol

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Mewnforio gwrthrych yn fyd-eang

I fewnforio'r swyddogaethau fel dulliau gwrthrych yn fyd-eang, defnyddiwch:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Bydd y dull canlynol ar gael yn fyd-eang:

- `Type.areBooleans(array)`

## Dadansoddiad swyddogaethau

Mae dadansoddiad tabl o'r allbwn sy'n deillio o roi paramedrau gwahanol i'r swyddogaethau wedi'i ddogfennu
yma: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>Crëwyd y ffeil ar 30 January 2026 at 14:39:46 (UTC) gan ddefnyddio *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** gan *
*[Roland Milto](https://roland-milto.de/)**.</small>