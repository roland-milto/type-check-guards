# areHexadecimals

## Danasîn

Kontrol dike ka hemû hêmanên di rêzekê de rêzokên şeşanî ne, û tenê ji bo rêzên ne-vala ku her hêmanek rast e `true`
vedigerîne.

### Bikaranîn

`areHexadecimals` bikar bîne da ku têketina bikarhêner an daneyên derveyî (mînak, ID, checksum, kodên rengê bêyî
pêşîna '#') berî parsekirina şeşanî an pêvajoya din were piştrast kirin.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areHexadecimals` bikar bîne da ku têketina nenas berî parsekirin an veguherandinê were piştrast kirin (mînak, berî
`parseInt(value, 16)` an veguherandinên BigInt).

### Avantaj

- Piştrast dike ku her hêmanek rêzê rêzokek şeşanî (hexadecimal) e û tenê dema ku hemû hêman lihevhatin `true`
  vedigerîne.
- Bi şêwazê xwe rêzên vala red dike û ji bo daneyên têketinê yên winda `false` vedigerîne.
- Encamek hêsan a boolean (`true`/`false`) peyda dike ku ji bo guard û piştrastkirina vegerandina zû guncaw e.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areHexadecimals(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo hêmanên rêzokên şeşanî were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areHexadecimals } from "@type-check/guards";

const a = areHexadecimals(["1A", "3F", "B2"]);
const b = areHexadecimals(["1A", "3G", "B2"]);
const c = areHexadecimals([10 as unknown as string, "3F", "B2"] as unknown[]);
const d = areHexadecimals([]);

console.log(a, b, c, d);
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areHexadecimals(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areHexadecimals](‎../_analysis/areHexadecimals.md‎)

<br>

---

<small>Ev pel di 31 January 2026 at 23:06:53 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>