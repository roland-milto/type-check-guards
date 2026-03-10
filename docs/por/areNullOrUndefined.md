# areNullOrUndefined

## Descrição

Verifica se todos os elementos no array fornecido são `null` ou `undefined`.

### Caso de uso

Validar que uma lista de campos opcionais não contém valores reais (apenas `null`/`undefined`) antes de decidir pular o
processamento ou exibir um estado de “nenhum valor fornecido”.

> **Nota para utilizadores de TypeScript:**
>
> Use `areNullOrUndefined` quando você precisar verificar que um array contém apenas valores ausentes (`null`/
`undefined`). Observe que ele retorna `false` para um array vazio.

### Vantagens

- Retorna `true` apenas quando cada elemento é `null` ou `undefined`.
- Retorna `false` para arrays vazios, ajudando a distinguir “sem dados” de “todos os valores ausentes”.
- Funciona com `unknown[]`, tornando seguro usar antes de restringir tipos.

## Uso

### Sintaxe

Função:

- `areNullOrUndefined(array)`

Parâmetros:

- `array`: O array a verificar.

### Importação local da função

```ts
import { areNullOrUndefined } from "@type-check/guards";

const allMissing = areNullOrUndefined([null, undefined, null]);
// allMissing === true

const containsValue = areNullOrUndefined([null, "value", undefined]);
// containsValue === false

const empty = areNullOrUndefined([]);
// empty === false

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.areNullOrUndefined(array)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [areNullOrUndefined](../_analysis/areNullOrUndefined.md)

<br>

---

<small>O ficheiro foi gerado em 31 de janeiro de 2026 às 00:31:05 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>