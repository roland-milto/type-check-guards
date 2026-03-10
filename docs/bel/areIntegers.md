# areIntegers

## Апісанне

`areIntegers` вызначае, ці ўсе элементы ў зададзеным масіве з'яўляюцца цэлымі лікамі, вяртаючы `true`, калі так, і
`false` у адваротным выпадку.

### Выкарыстанне

Выкарыстоўвайце `areIntegers` для праверкі даных, пададзеных карыстальнікам або атрыманых знешне (напрыклад, параметры
запыту, JSON-пэйлоады, радкі CSV), калі ваша логіка патрабуе запоўненага спісу цэлых значэнняў, такіх як ID, лічыльнікі,
зрухі пагінацыі або індэксы масіва.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areIntegers` як runtime-ахоўнік для ўваходных значэнняў тыпу `unknown[]` перад тым, як разглядаць іх
> як `number[]`, што змяшчае толькі цэлыя лікі. Калі ён вяртае `false`, увод альбо не з'яўляецца запоўненым масівам,
> альбо
> змяшчае прынамсі адно нецэлае значэнне.

### Перавагі

- Вяртае `true` толькі тады, калі кожны элемент з'яўляецца цэлым лікам; у адваротным выпадку вяртае `false`.
- Дапамагае правяраць невядомы ўвод перад выкананнем аперацый, якія дапускаюць толькі цэлыя лікі (напрыклад, індэксацыя,
  падлікі, ID).
- Хутка спыняецца: перастае праверку, як толькі знаходзіць элемент, які не з'яўляецца цэлым лікам.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areIntegers(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на наяўнасць цэлалікавых элементаў.

### Лакальны імпарт функцыі

```ts
import { areIntegers } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [0, -10, 42];
const c: unknown[] = [1, 2, "3"];

console.log(areIntegers(a)); // праўда
console.log(areIntegers(b)); // праўда
console.log(areIntegers(c)); // няпраўда

function sumIntegers(values: unknown[]): number {
  if (!areIntegers(values)) {
    throw new TypeError("Expected a filled array of integers");
  }
  return (values as number[]).reduce((acc, n) => acc + n, 0);
}

console.log(sumIntegers([10, 20, 30]));

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areIntegers(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areIntegers](../_analysis/areIntegers.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 00:57:27 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>