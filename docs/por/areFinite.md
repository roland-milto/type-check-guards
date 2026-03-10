# areFinite

## Descrição

`areFinite` verifica se um valor é um array não vazio cujos elementos são todos números finitos, retornando `true` se
for o caso e `false` caso contrário.

### Caso de uso

Validar arrays de entrada numérica (por exemplo, séries de gráficos, listas de coordenadas, amostras de medição) antes
de realizar cálculos, garantindo que o resultado seja `true` somente quando todos os valores forem números finitos.

> **Nota para utilizadores de TypeScript:**
>
> Use `areFinite` quando você precisar garantir que um array não esteja vazio e contenha apenas números finitos; ele
> retorna `false` para arrays vazios e para arrays que contenham `NaN` ou infinitos.

### Vantagens

- Retorna `true` somente quando a entrada é um array não vazio e cada elemento é um número finito.
- Rejeita `Infinity`, `-Infinity` e `NaN` ao se basear em verificações `isFinite` para cada elemento.
- Fornece um resultado booleano simples (`true`/`false`) adequado para guards e fluxos de validação.

## Uso

### Sintaxe

Função:

- `areFinite(array)`

Parâmetros:

- `array`: O array a ser verificado quanto à finitude de todos os seus elementos.

### Importação local da função

```ts
import { areFinite } from "@type-check/guards";

const a: unknown[] = [1, 2, 3];
const b: unknown[] = [1, Infinity, 3];
const c: unknown[] = [true, false, null];

console.log(areFinite(a)); // verdadeiro
console.log(areFinite(b)); // falso
console.log(areFinite(c)); // falso

function sumIfFinite(values: unknown[]): number | null {
  if (!areFinite(values)) return null;
  return values.reduce((acc, n) => acc + n, 0);
}

console.log(sumIfFinite([10, 20, 30])); // 60
console.log(sumIfFinite([10, NaN, 30])); // null
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areFinite(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areFinite](../_analysis/areFinite.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:36:44 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>