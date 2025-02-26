<div align="center">
    <img src="./README/logo.png" >
</div>


O Next Level Week(NLW) é um evento semanal onde a Rocketseat disponibiliza um projeto para realizar junto a sua comunidade. Nessa edição, a "Connect", foi realizado um projeto na trilha de React.js, para inscrição em um evento o devstage. Neste evento, é possível indicar/convidar outras pessoas para participarem e os que vinherem pelo seu link, vão contar como uma indicação sua, ou seja, no final, quem tiver mais indicações estará em 1º lugar no ranking geral. Além de abordar pontos importantes do ambiente React.js, também foi colocado alguns assuntos como Server e Client components, novas formas de organizar suas requisições com a biblioteca Orval e uso do Docker para rodar os containers presentes no Backend.


---
## :art: Layout
[Figma](https://www.figma.com/community/file/1471119935944492720)

---
## :gear: Techs
- [React.js](https://react.dev/)
- [Next.js](https://nextjs.org/)
- [Orval](https://orval.dev/)
- [Docker](https://www.docker.com/)
---
## :book: Features adicionais

<p></p>

---


## :receipt: Environment variables

- Todas as variáveis necessárias para rodar o ambiente localmente estão incorporadas no projeto.

---

## :desktop_computer: Como rodar?

- 1º É necessário rodar o Backend em separado, sendo necessário baixar/clonar o repositório no Github.
    - Foi escolhido o Backend da trilha de Node.js, [clique aqui para baixar](https://github.com/rocketseat-education/nlw-connect-node)
- 2º Instale o Docker na sua máquina
- 3º Abra a pasta raiz do projeto Backend e rode o comando abaixo:

```
    docker compose up -d
```
- 4º Em caso de sucesso na criação e start dos containers, use o comando abaixo para iniciar o projeto localmente.

```
    npm run dev
``` 
- 5º Após isso, basta entrar na pasta do projeto Frontend e rodar o mesmo comando acima e acessar o endereço [localhost](http://localhost:3000) no navegador.
---
<h2 id="colab">🤝 Colaboradores</h2>
 <tr>
    <td align="center">
      <a href="https://github.com/lucasgomesgp">
        <img src="https://avatars.githubusercontent.com/u/45949487?v=4" width="100px;" alt="Lucas Gomes Profile Picture"/><br>
        <sub>
          <b>Lucas Gomes</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

---
## :spiral_notepad: License
Arquivos sob a licença [MIT](https://github.com/lucasgomesgp) criado por Lucas Gomes.
