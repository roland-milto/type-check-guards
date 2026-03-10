# isHexadecimal

## Ibsa

`isHexadecimal` gatiin kenname literal string heksadeesimaalii taʼuu fi prefix dirqamaa `0x`/`0X` qabaachuu isaa ni
ilaala.

### Haala itti fayyadama

Gatiiwwan qindaaʼinaa, dirreewwan payload API, yookaan argumentoota CLI kanneen akka literal string heksadeesimaalii (
fakkeenyaaf, ID, mask, yookaan address) kennamuu qaban fi whitespace naannoo isaanii hin qabne mirkaneessuuf
`isHexadecimal` fayyadami.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> Yeroo galtee fayyadamaa yookaan deetaa serialized akka literal string heksadeesimaalii cimdaa (prefix `0x`/`0X`
> dabalatee) taʼee mirkaneessuu barbaaddu, dura parse yookaan convert gochuu keetiin `isHexadecimal` fayyadami.

### Faayidaa

- Gatiin tokko akka string taʼee fi bifa literal heksadeesimaalii cimdaa (prefix `0x`/`0X` barbaadu) waliin walsimu
  mirkaneessa.
- Stringwwan whitespace fuulduraa yookaan duubaa qaban ni dida; kunis galtee padding taʼe dogoggoraan fudhatamuu irraa
  ni ittisa.
- Mallattoo (sign) filannoo ni deeggara; prefix fi digitoota irratti case-insensitive dha, `true`/`false` immoo haala
  amanamaa taʼeen ni deebisa.

## Fayyadama

### Sinaaksii

Faankishinii:

- `isHexadecimal(value)`

Paaraameetaroota:

- `value`: Gatiin qoramu.

### Galchii faankishinii naannoo

```ts
import { isHexadecimal } from "@type-check/guards";

isHexadecimal("0x1A2B"); // dhugaa
isHexadecimal("-0Xff"); // dhugaa
isHexadecimal("1A2B"); // soba (dursaa dhabu)
isHexadecimal(" 0x1A2B"); // soba (iddoo duwwaa duraa)
isHexadecimal(0x1a2b); // soba (sarbama miti)

```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.isHexadecimal(value)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [isHexadecimal](../_analysis/isHexadecimal.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 23:00:08 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>