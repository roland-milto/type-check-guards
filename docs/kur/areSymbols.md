# areSymbols

## Danasîn

Kontrol dike ka têketin rêzek tije ye ku hêmanên wê hemû sembol in, û `true` an `false` vedigerîne.

### Bikaranîn

Piştrast bike ku qadeke mîhengê (mînak: lîsteyek mifteyên yekta ku bi sembolan têne nîşandan) rêzek nevala ye ku tenê
sembolan dihewîne, berî ku wê di API-yên ku `symbol[]` dixwazin de bikar bînî.

> **Têbînî ji bo bikarhênerên TypeScript:**
>
> `areSymbols` bikar bîne da ku têketina nenas berî ku wê wek `symbol[]` bihesibînî bipejirînî; ji bo ne-rêzekan û
> rêzekên vala `false` vedigerîne.

### Avantaj

- Tenê dema ku têketin rêzek nevala ye û her hêmanek sembol be, `true` vedigerîne.
- Bi redkirina ne-rêzekan û rêzekên vala bi kontrola hundirîn a rêza tije, pozîtîfên şaş asteng dike.
- Wek parêzvana cureyê ya demê-xebatê (runtime) ji bo pejirandina lîsteyên tenê-sembol berî pêvajoya din bikar tê.

## Bikaranîn

### Sîntaks

Fonksiyon:

- `areSymbols(array)`

Parametreyên:

- `array`: Rêza ku divê ji bo hêmanên sembol were kontrol kirin.

### Importa fonksiyona herêmî

```ts
import { areSymbols } from "@type-check/guards";

const a = [Symbol("a"), Symbol("b")];
const b = [Symbol("a"), "b"] as unknown[];

if (areSymbols(a)) {
  //‎ a di dema şertên demê de tenê sembolan e
  const first = a[0];
  console.log(typeof first); // "symbol"
}

console.log(areSymbols(b)); // false
```

### Importa objeyê global

Ji bo importa fonksiyonan wekî metodên objeyê yên global, vî bikar bîne:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Dû re metoda jêrîn global dê berdest be:

- `Type.areSymbols(array)`

## Analîza fonksiyonan

Li vir analîzek tabloyî ya encamê ku di dema danîna parametreyên cûda di nav fonksiyonan de çêdibe hatiye
belgekirin: [areSymbols](‎../_analysis/areSymbols.md‎)

<br>

---

<small>Ev pel di 30 January 2026 at 14:22:33 (UTC) de bi bikaranîna *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ji aliyê *
*[Roland Milto](https://roland-milto.de/)** ve hat afirandin.</small>