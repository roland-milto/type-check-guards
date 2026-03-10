# areBooleans

## Descrição

`areBooleans` verifica se um determinado array não vazio contém apenas valores booleanos, retornando `true` se contiver
e `false` caso contrário.

### Caso de uso

Validar dados fornecidos pelo usuário ou externos (por exemplo, payloads JSON, parâmetros de consulta, arrays de
configuração) para garantir que uma lista não vazia contenha apenas booleanos antes de aplicar lógica booleana ou
passá-la para APIs que esperam `boolean[]`.

> **Nota para utilizadores de TypeScript:**
>
> Use `areBooleans` para validar `unknown[]` antes de tratá-lo como `boolean[]`; ele retorna `false` para arrays vazios,
> então trate esse caso explicitamente se uma lista vazia deva ser permitida.

### Vantagens

- Retorna `true` somente quando cada elemento é um booleano e a entrada é um array não vazio.
- Evita falsos positivos ao rejeitar arrays vazios (retorna `false`).
- Funciona bem como uma verificação em tempo de execução antes de operações somente com booleanos (por exemplo, `every`,
  `some`, reduções lógicas).

## Uso

### Sintaxe

Função:

- `areBooleans(array)`

Parâmetros:

- `array`: O array a ser verificado quanto a elementos booleanos.

### Importação local da função

```ts
import { areBooleans } from "@type-check/guards";

const values1: unknown[] = [true, false, true];
if (areBooleans(values1)) {
  const allTrue = values1.every(v => v);
  console.log(allTrue);
}

const values2: unknown[] = [];
console.log(areBooleans(values2));

const values3: unknown[] = [true, 1, false];
console.log(areBooleans(values3));
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areBooleans(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areBooleans](../_analysis/areBooleans.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:42:03 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>