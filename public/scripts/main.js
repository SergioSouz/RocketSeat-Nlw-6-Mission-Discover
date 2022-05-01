import Modal from './modal.js'

const modal = Modal()

// abri e fecha modal
const checkbuttons = document.querySelectorAll('.actions a.check')
const deletebuttons = document.querySelectorAll('.actions a.delete')

// alterando o conteudo da modal
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

checkbuttons.forEach(button => {
   button.addEventListener('click', handleClick)
})

deletebuttons.forEach(button => {
   button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
   const text = check ? 'Marcar como lida' : 'excluir'

   //variavel da routa pra pegar os dados do form
   const slug = check ? 'check' : 'delete'
   const questionId = event.target.dataset.id
   const roomId = document.querySelector('#room-id').dataset.id

   const form = document.querySelector('.modal form')
   form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

   modalTitle.innerHTML = `${text} esta perguta`
   modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
   modalButton.innerHTML = `Sim,${text}`
   check
      ? modalButton.classList.remove('red')
      : modalButton.classList.add('red')

   event.preventDefault()
   modal.open()
}
