import '../App.css'
import Loading from './Loading'
export default function Player({dice, setDice, name, setName}) {
    return (
        <div className='dice-box'>
            <h1 className='player-name'>{name}</h1>
            <div>dice</div>
            <button className='dice-roll' onClick={() => {
                const numbers = [1,2,3,4,5,6]
                let randomizer = numbers[(Math.floor(Math.random()*5))]
                setDice(dice = randomizer)
            }}>  </button>
            <p>{dice}</p>
        </div>
    )
}