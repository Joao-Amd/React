import './style.css'
import Trash from '../../assets/lixeira.png'

function Home() {

  const users = [{
    id: '2329',
    name: 'Rodolfo',
    age: 33,
    email: 'rod@email.com',
  },
  {
    id: '2249',
    name: 'Paulo',
    age: 28,
    email: 'paulo@email.com',
  }
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name} </p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
