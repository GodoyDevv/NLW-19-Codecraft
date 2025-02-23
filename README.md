App de Inscrição e Convite para Evento
Este projeto é um aplicativo web simples que permite que os usuários se inscrevam para um evento e, ao mesmo tempo, gerenciem um sistema de convite através de um código de referência. A ideia é incentivar a divulgação do evento, permitindo que os participantes compartilhem um link único e acompanhem quantas inscrições foram realizadas através dele.

Funcionalidades
Inscrição de Usuários:
Os usuários podem se registrar informando e-mail e telefone. Caso o usuário já esteja cadastrado, o sistema redireciona para a página de convite.

Sistema de Convite:
Ao confirmar a inscrição, o usuário recebe um link de convite personalizado com um código de referência. Esse link pode ser compartilhado para convidar outras pessoas.

Contagem de Indicações:
O aplicativo exibe o número total de inscrições feitas através do link de referência do usuário, permitindo acompanhar o sucesso do convite.

Atualização Dinâmica de Imagens:
As imagens da página são atualizadas para serem carregadas a partir de um repositório público no GitHub, garantindo que o conteúdo visual esteja sempre sincronizado.

Tecnologias Utilizadas
HTML5 – Estrutura da página.
CSS3 – Estilização dos elementos (não incluso neste exemplo, mas pode ser complementado).
JavaScript (Vanilla) – Lógica de manipulação do DOM, cadastro de usuários, gerenciamento do sistema de convites e atualização de links de imagens.


Como Funciona
Início:

Ao carregar a página, o usuário vê informações sobre o evento e o formulário de inscrição.

Cadastro:

O usuário preenche o formulário com e-mail e telefone.
Ao enviar o formulário, a função formAction verifica se o usuário já existe utilizando a função getUser.
Se o usuário não existir, é criado um novo registro através da função saveUser.

Página de Convite:

Após a inscrição, a função ShowInvite é chamada.
O usuário vê uma mensagem de confirmação e recebe um link personalizado para convidar amigos.
É exibido também o número de inscrições realizadas através do seu link, utilizando a função getTotalSubscribers.

Atualização de Imagens:

A função updateImageLinks atualiza as fontes das imagens para que sejam carregadas de um repositório público no GitHub.

Possíveis melhorias
Persistência de Dados:
Implementar uma API ou utilizar armazenamento local para manter os dados dos usuários entre as sessões.

Validação de Formulário:
Incluir validações mais robustas para os campos de e-mail e telefone.

Feedback Visual:
Melhorar a experiência do usuário com mensagens de erro, loaders e animações durante o processo de inscrição.

Responsividade:
Ajustar o layout para garantir uma boa experiência em dispositivos móveis.

Contribuições
Sinta-se à vontade para contribuir com o projeto. Caso tenha sugestões, correções ou melhorias, abra uma issue ou envie um pull request.

Desenvolvido por GodoyDevv