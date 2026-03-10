# areOneOfType

## Descrição

`areOneOfType` verifica se todos os elementos em um array não vazio são de um dos tipos especificados em tempo de
execução.

### Caso de uso

Validar dados de entrada (por exemplo, JSON analisado) em que um campo deve ser um array não vazio cujos itens são
restritos a um conjunto conhecido de tipos primitivos; retornar `false` quando o array estiver vazio ou contiver
qualquer tipo não permitido.

> **Nota para utilizadores de TypeScript:**
>
> Esta função retorna um boolean e não restringe os tipos dos elementos do array em tempo de compilação; use-a como uma
> etapa de validação em tempo de execução antes de processamento adicional.

### Vantagens

- Garante que cada elemento em um array corresponda a pelo menos um tipo permitido em tempo de execução, retornando
  `true` somente quando o array inteiro passa.
- Rejeita entradas inválidas cedo: retorna `false` quando `array` ou `types` está vazio ou não é um array preenchido.
- Útil para validar coleções de tipos mistos (por exemplo, números e strings) com uma única chamada a `areOneOfType`.

## Uso

### Sintaxe

Função:

- `areOneOfType(array, types)`

Parâmetros:

- `array`: Um array de elementos a verificar em relação aos tipos fornecidos.
- `types`: Um array de strings que representam os tipos de dados a serem verificados.

### Importação local da função

```ts
import { areOneOfType } from "@type-check/guards";

const values1: unknown[] = [1, "a", true];
const ok1 = areOneOfType(values1, ["number", "string", "boolean"]);

const values2: unknown[] = [1, "a", {}];
const ok2 = areOneOfType(values2, ["number", "string"]);

const values3: unknown[] = [];
const ok3 = areOneOfType(values3, ["number"]);

console.log({ ok1, ok2, ok3 });
```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areOneOfType(array, types)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areOneOfType](../_analysis/areOneOfType.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 23:38:18 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>