# areFinite

## Апісанне

`areFinite` правярае, ці з’яўляецца значэнне непустым масівам, элементы якога ўсе з’яўляюцца канечнымі лікамі, вяртаючы
`true` ў такім выпадку і `false` у адваротным.

### Выкарыстанне

Валідаваць масівы лікавых уваходных даных (напрыклад, шэрагі для дыяграм, спісы каардынат, узоры вымярэнняў) перад
выкананнем разлікаў, гарантуючы, што вынік будзе `true` толькі калі ўсе значэнні — канечныя лікі.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `areFinite`, калі трэба пераканацца, што масіў непусты і змяшчае толькі канечныя лікі; ён вяртае
`false` для пустых масіваў і для масіваў, якія змяшчаюць `NaN` або бясконцасці.

### Перавагі

- Вяртае `true` толькі тады, калі ўваходнае значэнне — непусты масіў і кожны элемент з’яўляецца канечным лікам.
- Адхіляе `Infinity`, `-Infinity` і `NaN`, абапіраючыся на праверкі `isFinite` для кожнага элемента.
- Забяспечвае просты булеў вынік (`true`/`false`), прыдатны для ахоўнікаў і патокаў валідацыі.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `areFinite(array)`

Параметры:

- `array`: Масіў, які трэба праверыць на канечнасць усіх яго элементаў.

### Лакальны імпарт функцыі

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // праўда
console.log(areFinite(b)); // няпраўда
console.log(areFinite(c)); // няпраўда

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.areFinite(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 16:33:40 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>