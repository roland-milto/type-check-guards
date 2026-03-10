# isFinite

## Descrição

Determina se um determinado `value` é um `number` finito.

### Caso de uso

Use `isFinite` para validar entradas desconhecidas (por exemplo, de JSON, formulários ou APIs) antes de realizar
cálculos numéricos, garantindo que o valor seja um número real e finito.

> **Nota para utilizadores de TypeScript:**
>
> `isFinite` retorna `true` apenas para números finitos; retorna `false` para `NaN`, `Infinity` e qualquer valor que não
> seja um número.

### Vantagens

- Usa o `Number.isFinite` embutido para uma verificação confiável de finitude.
- Retorna `true` apenas para números finitos; retorna `false` para `NaN`, `Infinity` e entradas que não são números.
- Predicado simples, sem efeitos colaterais, adequado para validação e lógica de proteção.

## Uso

### Sintaxe

Função:

- `isFinite(value)`

Parâmetros:

- `value`: O valor a ser verificado quanto à finitude.

### Importação local da função

```ts
import { isFinite } from "@type-check/guards";

const inputs: unknown[] = [123, -123.45, "123", Infinity, NaN, null, undefined];

const finiteNumbers = inputs.filter(isFinite);
// finiteNumbers é: [123, -123.45]

const value: unknown = 42;
if (isFinite(value)) {
  // value é um número finito aqui
  const doubled = value * 2;
  console.log(doubled);
}
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isFinite(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isFinite](../_analysis/isFinite.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 16:31:21 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>