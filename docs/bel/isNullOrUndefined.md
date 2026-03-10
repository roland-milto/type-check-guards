# isNullOrUndefined

## Апісанне

Правярае, ці з'яўляецца зададзенае значэнне `null` або `undefined`.

### Выкарыстанне

Выкарыстоўвайце `isNullOrUndefined`, калі трэба лічыць і `null`, і `undefined` як «няма значэння», напрыклад пры
валідацыі неабавязковых уводаў, нармалізацыі API-пэйлоадаў або абароне шляхоў кода перад разыменаваннем патэнцыйна
адсутнага значэння.

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `isNullOrUndefined`, каб абараніцца ад адсутных значэнняў перад доступам да ўласцівасцяў або выклікам
> метадаў; ён вяртае `true` толькі для `null` і `undefined`.

### Перавагі

- Забяспечвае выразны, паўторна выкарыстоўвальны гард для выяўлення `null` і `undefined` у адным месцы.
- Вяртае простае булева значэнне (`true`/`false`), якое лёгка камбінаваць у ўмовах і валідацыях.
- Дапамагае пазбягаць распаўсюджаных памылак падчас выканання, правяраючы адсутныя значэнні перад доступам да
  ўласцівасцяў або выклікам метадаў.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `isNullOrUndefined(value)`

Параметры:

- `value`: Значэнне, якое трэба праверыць на `null` або `undefined`.

### Лакальны імпарт функцыі

```ts
import { isNullOrUndefined } from "@type-check/guards";

const a: unknown = null;
const b: unknown = undefined;
const c: unknown = 0;

if (isNullOrUndefined(a)) {
  // апрацаваць адсутнае значэнне
}

console.log(isNullOrUndefined(b)); // праўда
console.log(isNullOrUndefined(c)); // няпраўда

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.isNullOrUndefined(value)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [isNullOrUndefined](../_analysis/isNullOrUndefined.md)

<br>

---

<small>Файл быў створаны 31 January 2026 at 00:33:01 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>