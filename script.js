const app = document.getElementById("app")  // Pegando o elemento pelo ID.

// Array, vetor, lista.
const users = [
  {
    email: 'test@test.com',
    phone: '999999999',
    ref: 100,
    refBy: null
  },
  {
    email: 'tust@tust.com',
    phone: '999999999',
    ref: 200,
    refBy: 100
  },
  {
    email: 'tost@tost.com',
    phone: '999999999',
    ref: 300,
    refBy: 200
  }
]

const getUser = (userData) => {
  return users.find((user) => {
    return user.email == userData.email
  }) // Find = Encontrar. Find entra em estrutura de repetição.
}

const getTotalSubscribers = (userData) => {
  const subs = users.filter((user) => {
    return user.refBy == userData.ref
  })
  return subs.length
}
 
const ShowInvite = (userData) => {
  app.innerHTML = `
    <main>
        <h3>Inscrição confirmada!</h3>

        <p>
          Convide mais pessoas e concorra a prêmios!<br/> 
           Compartilhe o link e acompanhe as inscrições:
        </p>

        <div class="input-group">
          <label for="link">
            <img src="link.svg" alt="link icon">
          </label>
          <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>
        </div>
      </main>

      <section class="stats">
        <h4>
          ${getTotalSubscribers(userData)}
        </h4>
        <p>
          Inscrições feitas
        </p>
      </section>
  `
  app.setAttribute('class', 'page-invite')
  updateImageLinks()
}

const saveUser = (userData) => {
  const newUser = {
    ...userData,
    ref: Math.round(Math.random() * 4000),
    refBy: 100 
  }

  users.push(newUser)
  console.log(users)
  return newUser
}

const formAction = () => { // Função que vai pegar meu formulário também pelo ID.
  const form = document.getElementById("form")
  form.onsubmit = (event) => { // Sobre evento, sempre que algo acontecer ele ouve ou percebendo o evento e funcionar algo. 
    event.preventDefault() // Não faça o padrão.
    const formData = new FormData(form) //FormData recebe uma função do próprio javascrip chamada FormData que consegue ler os "names" do input nesse caso. 
    const userData = { // Criação de um objeto.
      email: formData.get('email'), // email é a propriedade e o que vem depois dos dois pontos é o valor do objeto. ( formData é um objeto, get (pegar) é uma função que ele possui.)
      phone: formData.get('phone'),
    }

    const user = getUser(userData)
    if (user) {
      ShowInvite(user)            // Encontrei.
    } else {
      const newUser = saveUser (userData)
      ShowInvite(newUser)                            // Não encontrei.
    }
    
  }
}

    const updateImageLinks = () => {
      document.querySelectorAll('img').forEach((img) => {
        if (img.src.includes('githubusercontent')) {
          return
        }
        const src = img.getAttribute('src')
      img.src= `https://raw.githubusercontent.com/maykbrito/my-public-files/main/nlw-19/${src}`
  }) 
}

const startApp  = () => { /* Inicia o meu app, ou seja, cria o HTML. */  
  const content = ` 
    <main>
        <section class="about">
          <div class="section-header">
            <h2>Sobre o evento</h2>
            <span class="badge">AO VIVO</span>
          </div>

          <p>
            Um evento feito por e para pessoas desenvolvedoras apaixonadas por criar soluções inovadoras e compartilhar conhecimento. Vamos mergulhar nas tendências mais recentes em desenvolvimento de software, arquitetura de sistemas e tecnologias emergentes, com palestras, workshops e hackathons.<br/><br/>
            Dias 15 a 17 de março | Das 18h às 21h | Online & Gratuito 
          </p>
        </section>

        <section class="registration">
          <h2>Inscrição</h2>
          <form id="form">
            <div class="input-wrapper">
              <div class="input-group">
                <label for="email">
                  <img src="mail.svg" alt="email icon">
                </label>
                <input type="email" id="email" name="email" placeholder="E-mail">
              </div>

              <div class="input-group">
                <label for="phone">
                  <img src="phone.svg" alt="phone icon">
                </label>
                <input type="phone" id="phone" name="phone" placeholder="Telefone">
              </div>
            </div>

            <button>
              Confirmar
              <img src="arrow.svg" alt="Arrow right">
            </button>
          </form>
        </section>
      </main>

  `

  app.innerHTML = content /* Colocando o conteúdo dentro do HTML. E também pósso usar para saber o que tem lá dentro do HTML. */
  app.setAttribute('class', 'page-start')
  updateImageLinks()
  formAction() /* Executando a função. */
}
startApp() /* Inicia o meu app, ou seja, cria o HTML. */
// ShowInvite({
//   email: 'test@test.com',
//   phone: '999',
//   ref: 100 
// })

document.querySelector("header").onclick = () => startApp() 