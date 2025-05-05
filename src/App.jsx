import { useState } from "react"
import { Cardinicial } from "./components/Cardinicial"
import { CardFinal } from "./components/CardFinal"

export function App() {
  const [submited, setSubmited] = useState(false)
  const [rateNote, setRateNote] = useState(0)

  return (
      submited === false ? (
         <Cardinicial setRateNote={setRateNote} setSubmited={setSubmited} rateNote={rateNote}/> 
      ) : (
         <CardFinal rateNote={rateNote} /> 
      )
  )
}