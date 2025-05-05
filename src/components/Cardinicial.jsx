import iconStar from "../assets/icon-star.svg"
import { InputButton } from "./InputButton"

export function Cardinicial({ setRateNote, setSubmited, rateNote }) { 
    function handleSubmit() {
        if (rateNote !== 0) {
          setSubmited(true)
          return
        }
    
        alert("Please, choose a rate button!")
      }

    return(
        <div className="bg-radial-gradient max-w-103 px-6 pt-6 pb-8  rounded-2xlfont-overpass rounded-4xl shadow-2xl">
        <div className="bg-dark-blue p-4 w-fit rounded-full mb-4">
         <img src={iconStar} alt="" srcset="ícone da estrela" />
        </div>
         
         <h1 className="font-bold text-2xl mb-2.5">How did we do?</h1>
 
         <p className="text-light-grey text-sm leading-1 mb-6">Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos 
           melhorar nosso atendimento!</p>
 
           <div className="flex justify-between mb-6">
             <InputButton value={1} handleChangeRateNote={setRateNote}/>
             <InputButton value={2} handleChangeRateNote={setRateNote}/>
             <InputButton value={3} handleChangeRateNote={setRateNote}/>
             <InputButton value={4} handleChangeRateNote={setRateNote}/>
             <InputButton value={5} handleChangeRateNote={setRateNote}/>
            
           </div>
 
           <button className="bg-orange w-full py-3 rounded-3xl uppercase font-bold 
           tracking-1 hover:bg-white hover:text-orange cursor-pointer transition
           duration-400" onClick={handleSubmit}>Submit</button>
 
       </div>
    )
}