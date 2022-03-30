# Porjeto Lotecaria-vesp
Um simulador de loteria que o usuario escolhe seis numeros
e o programa sorteia outros seis numeros e após isso verifica
a quantidade de acertos!
## Tecnologias Utilizadas
- **HTML:** Estrutura do SITE
- **CSS:** Estilo do SITE
- **JS:** Funções do SITE
- ~~BootStrap~~:


### Melhorias Possiveis
1. [x] Subir no github pages
2. [ ] Trocar o Alert pro mensagens mais amigaveis
3. [ ] Realizar testes para descobrir bugs


### disponivel em: 
[GitHubPages](https://larissaalessandra.github.io/Lotecaria-vesp/)

### Prints da Tela do WebApp

| Tela ínicial | Primeira Rodada |
|------------------|----------------|
| ![tela inicial do site](/img/tela1.png)           | ![tela inicial do site](https://raw.githubusercontent.com/larissaalessandra/Lotecaria-vesp/master/img/tela2.png)     
  |


### codigo principal 

```
function verificaAcertos() {
    let cont = 0
    numDig.forEach(function (valor, index) {
        if (numSort.includes(valor)) {
            cont = cont + 1

        }
    })
    document.getElementById("total").innerText = cont
}

```