# isSymbol

## Descrição

`isSymbol` determina se um determinado valor é do tipo `symbol`, retornando `true` para símbolos e `false` caso
contrário.

### Caso de uso

Valide que um valor `unknown` é um `symbol` antes de usá-lo como um identificador único, uma chave de registro ou uma
chave de propriedade computada em objetos e mapas.

> **Nota para utilizadores de TypeScript:**
>
> Use `isSymbol` para restringir `unknown` a `symbol` antes de chamar funções relacionadas a símbolos ou usá-lo como uma
> chave de propriedade computada.

### Vantagens

- Fornece uma verificação simples e confiável em tempo de execução para o tipo primitivo `symbol` do JavaScript.
- Ajuda a restringir valores `unknown` antes de usar APIs específicas de símbolos ou armazená-los como chaves.
- Evita falsos positivos ao usar `typeof`, que é a forma canônica de detectar valores `symbol`.

## Uso

### Sintaxe

Função:

- `isSymbol(value)`

Parâmetros:

- `value`: O valor a ser verificado.

### Importação local da função

```ts
import { isSymbol } from "@type-check/guards";

const input: unknown = Symbol("key");

if (isSymbol(input)) {
  // input é um símbolo aqui
  const registryKey = Symbol.keyFor(input);
  console.log(registryKey);
} else {
  console.log("Not a symbol");
}

```

### Importação global de objeto

Para importar as funções como métodos globais de objeto, use:

```ts
import "@type-check/guards/register-global-object.mjs";
```

O seguinte método ficará então disponível globalmente:

- `Type.isSymbol(value)`

## Análise de funções

Aqui está documentada uma análise tabular da saída gerada ao inserir diferentes parâmetros nas
funções: [isSymbol](../_analysis/isSymbol.md)

<br>

---

<small>O ficheiro foi gerado em 30 de janeiro de 2026 às 14:28:20 (UTC) com o uso do *
*[markdown-documentation-generator](https://github.com/roland-milto/markdown-documentation-generator)** por *
*[Roland Milto](https://roland-milto.de/)**.</small>