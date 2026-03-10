# areValidDates

## Descrição

Determina se um array não está vazio e consiste inteiramente de objetos `Date` válidos.

### Caso de uso

Use `areValidDates` para validar arrays fornecidos por usuários ou por APIs antes de realizar operações baseadas em
datas (ordenação, verificações de intervalo, formatação), garantindo que todas as entradas sejam objetos `Date` reais e
válidos e que a lista não esteja vazia.

> **Nota para utilizadores de TypeScript:**
>
> `areValidDates` retorna `false` para um array vazio; garanta que o array deva ser não vazio antes de depender dele
> como uma etapa de validação.

### Vantagens

- Retorna `true` somente quando cada elemento é uma instância válida de `Date` (sem datas inválidas como
  `new Date('invalid')`).
- Rejeita entrada vazia retornando `false`, garantindo que você aceite apenas listas de datas significativas e não
  vazias.
- Fornece uma verificação booleana simples no estilo de *guard* que é fácil de compor com outras validações.

## Uso

### Sintaxe

Função:

- `areValidDates(array)`

Parâmetros:

- `array`: O array a ser verificado, potencialmente contendo objetos `Date`.

### Importação local da função

```ts
import { areValidDates } from "@type-check/guards";

const a = [new Date(), new Date("2025-12-17")];
const b = [new Date(), "not a date"] as unknown[];
const c: unknown[] = [];
const d = [new Date("invalid date")] as unknown[];

console.log(areValidDates(a)); // verdadeiro
console.log(areValidDates(b)); // falso
console.log(areValidDates(c)); // falso
console.log(areValidDates(d)); // falso

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areValidDates(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areValidDates](../_analysis/areValidDates.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:33:33 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>