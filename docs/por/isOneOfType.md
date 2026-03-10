# isOneOfType

## Descrição

`isOneOfType` determina se um determinado `value` corresponde a pelo menos uma das strings de tipo fornecidas,
retornando `true` se alguma correspondência for encontrada e `false` caso contrário.

### Caso de uso

Validar dados com tipagem flexível ou externos (por exemplo, JSON analisado, parâmetros de consulta) permitindo
múltiplos tipos aceitáveis em tempo de execução (como `number` ou `string`) antes de prosseguir com lógica adicional.

> **Nota para utilizadores de TypeScript:**
>
> Use `isOneOfType` quando você quiser uma verificação em tempo de execução de que um valor corresponde a qualquer um de
> vários tipos permitidos; ele retorna `true` se pelo menos um tipo corresponder, caso contrário `false`.

### Vantagens

- Verifica um valor em relação a vários tipos permitidos em uma única chamada, retornando `true` na primeira
  correspondência.
- Funciona com entradas `unknown`, tornando-o útil em limites de tempo de execução (por exemplo, dados externos, entrada
  do usuário).
- Fornece um resultado booleano simples (`true`/`false`) que se compõe bem com lógica condicional e retornos
  antecipados.

## Uso

### Sintaxe

Função:

- `isOneOfType(value, types)`

Parâmetros:

- `value`: O valor a ser verificado em relação aos tipos especificados.
- `types`: Um array de strings de tipo representando os tipos potenciais do valor.

### Importação local da função

```ts
import { isOneOfType } from "@type-check/guards";

const input: unknown = JSON.parse('{"count": 3}');

if (isOneOfType(input, ["object"])) {
  // input é um objeto em tempo de execução
}

console.log(isOneOfType(3, ["number", "string"])); // true
console.log(isOneOfType("hello", ["number", "boolean"])); // false

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isOneOfType(value, types)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isOneOfType](../_analysis/isOneOfType.md)

<br>

---

<small>O ficheiro foi gerado em 6 de fevereiro de 2026 às 13:53:56 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>