# areIndexesFound

## Ibsa

`areIndexesFound` gatiin tokko tarree hin duwwaa ta’ee elementiin isaa hundi indeeksii sirrii ta’uu isaa ni sakatta’a;
yoo ta’an `true` deebisa, yoo hin taane `false` deebisa.

### Haala itti fayyadama

Daataa fayyadamaan kenne yookaan daataa alaa (fakkeenyaaf, JSON hiikame) kan tarree indeeksii ta’uu eegamu, tarreewwan
keessa seenuu yookaan muruu (slice) irratti fayyadamuun dura mirkaneessi.

> **Hubachiisa fayyadamtoota TypeScript tiif:**
>
> `areIndexesFound` fayyadami galchi unknown ta’e mirkaneessuuf dura elementoota isaa akka indeeksii tarreetti ilaaluun;
> tarree duwwaa fi tarree gatii indeeksii hin taane of keessaa qabduuf `false` deebisa.

### Faayidaa

- Inni `true` qofa deebisa yeroo galchiin tarree guutame ta’ee fi elementiin hundi indeeksii sirrii ta’an qofa.
- Saffisaan dhaabata: akkuma elementiin indeeksii hin taane argameen `false` deebisa.
- Gatiiwwan akka iddoo tarree (array positions) yookaan offsettti fayyadamuun dura akka eegu (guard)tti faayidaa qaba.

## Fayyadama

### Sinaaksii

Faankishinii:

- `areIndexesFound(array)`

Paaraameetaroota:

- `array`: Tarree (array) walsimsiisummaa indeeksii irratti sakatta’amu.

### Galchii faankishinii naannoo

```ts
import { areIndexesFound } from "@type-check/guards";

const a: unknown[] = [0, 1, 2];
const b: unknown[] = [0, "a", 2];
const c: unknown[] = [];

console.log(areIndexesFound(a)); // dhugaa
console.log(areIndexesFound(b)); // soba
console.log(areIndexesFound(c)); // soba

if (areIndexesFound(a)) {
  // Asitti, `a` akka tarree indeeksii guutameetti mirkanaa'eera.
  const firstIndex = a[0];
  console.log(firstIndex);
}
```

### Galchii wanta addunyaa

Faankishiniiwwan akka mala wantaa addunyaa ta’anii galchuuf, kana fayyadami:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Ergasii mala armaan gadii addunyaatti ni argama:

- `Type.areIndexesFound(array)`

## Xiinxala faankishinii

Bu’aa yeroo paaraameetaroota garaagaraa faankishiniiwwan keessatti galchitan dhalatu irratti xiinxala gabatee asitti
galmaa’eera: [areIndexesFound](../_analysis/areIndexesFound.md)

<br>

---

<small>Faayiliin kun 31 January 2026 at 01:03:47 (UTC) irratti *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)**
fayyadamuudhaan **[Roland Milto](https://roland-milto.de/)**tiin uumame.</small>