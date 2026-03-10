# arePromises

## Апісанне

`arePromises` вызначае, ці з'яўляюцца ўсе элементы ў масіве асобнікамі `Promise`.

### Выкарыстанне

Праверце, што дынамічна сфарміраваны або атрыманы са знешняй крыніцы спіс утрымлівае толькі промісы перад іх
агрэгацыяй (напрыклад, з дапамогай `Promise.all`).

> **Падказка для карыстальнікаў TypeScript:**
>
> Выкарыстоўвайце `arePromises`, каб праверыць `unknown[]` перад выклікам `Promise.all` або іншых аперацый, якія
> працуюць толькі з промісамі; для пустых масіваў ён вяртае `false`.

### Перавагі

- Гарантуе, што кожны элемент з'яўляецца `Promise` перад тым, як вы працягнеце з логікай, спецыфічнай для промісаў.
- Вяртае `false` для пустых масіваў, прадухіляючы неадназначныя вынікі для пустых уваходных даных.
- Карысна як ахоўная праверка падчас выканання пры працы з `unknown[]` з знешніх крыніц.

## Выкарыстанне

### Сінтаксіс

Функцыя:

- `arePromises(array)`

Параметры:

- `array`: Масіў для праверкі на наяўнасць асобнікаў Promise.

### Лакальны імпарт функцыі

```ts
import { arePromises } from "@type-check/guards";

const values: unknown[] = [Promise.resolve(1), new Promise<void>(() => {})];

if (arePromises(values)) {
  // values — гэта масіў асобнікаў Promise падчас выканання
  Promise.all(values).then((results) => {
    console.log(results);
  });
} else {
  console.log("Not all items are promises");
}

```

### Глабальны імпарт аб’екта

Каб імпартаваць функцыі як глабальныя метады аб’екта, выкарыстоўвайце:

```ts
import "@type-check/guards/register-global-object.mjs";
```

Наступны метад будзе даступны глабальна:

- `Type.arePromises(array)`

## Аналіз функцый

Таблічны аналіз таго, які вынік атрымліваецца пры перадачы розных параметраў у функцыі, задокументаваны
тут: [arePromises](../_analysis/arePromises.md)

<br>

---

<small>Файл быў створаны 30 January 2026 at 23:47:31 (UTC) з выкарыстаннем *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** ад *
*[Roland Milto](https://roland-milto.de/)**.</small>