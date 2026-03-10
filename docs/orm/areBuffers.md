# areBuffers

## Ibsa

`areBuffers` gatiin kenname tarree duwwaa hin taane fi guutamee jiru ta'ee, elementiin hundi `Buffer` ta'uu isaa ni
sakatta'a; yoo akkas ta'e `true` deebisa, yoo hin ta'in immoo `false` deebisa.

### Haala itti fayyadama

Tarree chunk galuu (fkn, stream irraa, file upload irraa, ykn network packet irraa) mirkaneessi; kutaan hundi `Buffer`
ta'uu isaa dura walitti qabuu, decode gochuu, ykn hojiiwwan crypto/binary-processing irratti dabarsuu.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areBuffers` fayyadamuun `unknown[]` mirkaneessi dura API-wwan Buffer irratti hundaa'an akka `Buffer.concat` waamu;
> kunis elementiin hundi `Buffer` ta'uu isaa yeroo qofa `true` akka deebisu mirkaneessa.

### Faayidaa

- Elementiin hundi galtee keessaa hundi Node.js `Buffer` ta'uu isaa mirkaneessa; `true` kan deebisu yoo tarreen guutuun
  walsimu qofa.
- Galtee dogoggoraa dursee ni dida; tarree duwwaa hin taane fi guutamee jiru akka barbaaduu taasisa; tarree duwwaa ykn
  tarree hin taane irratti `false` deebisa.
- Hojiiwwan Buffer-qofa irratti hojjechuu dura akka eegu (fkn, walitti qabuu, haashii gochuu, pirootokoolii baayinaarii)
  ni fayyada.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areBuffers(array)`

Paaraameetaroota:

- `array`: Tarree Buffer ta'uu isaanii mirkaneessuuf sakatta'amu.

### Galchii faankishinii naannoo

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

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areBuffers(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areBuffers](../_analysis/areBuffers.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 16:26:43 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>