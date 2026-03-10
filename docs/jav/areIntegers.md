# areIntegers

## Katrangan

`areIntegers` nemtokake apa kabeh unsur ing sawijining array iku bilangan bulat, mbalekake `true` yen iya lan `false`
yen ora.

### Kahanan panggunaan

Gunakake `areIntegers` kanggo validasi data saka pangguna utawa saka njaba (umpamane, parameter query, payload JSON,
baris CSV) nalika logikamu mbutuhake dhaptar nilai bilangan bulat sing kebak kayata ID, counter, offset pagination,
utawa indeks array.

> **Cathetan kanggo pangguna TypeScript:**
>
> Gunakake `areIntegers` minangka guard runtime kanggo input `unknown[]` sadurunge dianggep minangka `number[]` sing
> isine mung bilangan bulat. Yen mbalekake `false`, input kuwi salah siji: dudu array sing kebak, utawa ngemot paling
> ora
> siji nilai sing dudu bilangan bulat.

### Kauntungan

- Mbalekake `true` mung nalika saben unsur iku bilangan bulat; yen ora mbalekake `false`.
- Mbantu validasi input sing durung dingerteni sadurunge nindakake operasi sing mung kanggo bilangan bulat (umpamane,
  indeks, cacah, ID).
- Gagal cepet: mandheg mriksa sakcepete nemokake unsur sing dudu bilangan bulat.

## Panggunaan

### Sintaks

Fungsi:

- `areIntegers(array)`

Paramèter:

- `array`: Array sing arep dipriksa apa isine unsur bilangan bulat.

### Impor fungsi lokal

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // bener
console.log(areIntegers(b)); // bener
console.log(areIntegers(c)); // salah

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Impor obyek global

Kanggo ngimpor fungsi minangka metode obyek global, gunakna:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Metode ing ngisor iki banjur kasedhiya sacara global:

- `Type.areIntegers(array)`

## Analisis fungsi

Ing kéné didokumentasèkaké analisis tabel babagan output sing metu nalika paramèter sing béda-béda dilebokaké menyang
fungsi: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Berkas iki digawe ing 31 January 2026 at 00:59:01 (UTC) nganggo *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** déning *
*[Roland Milto](https://roland-milto.de/)**.</small>