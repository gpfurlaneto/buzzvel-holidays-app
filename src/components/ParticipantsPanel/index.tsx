import { MouseEvent, useRef, useState } from "react";
import Input from "../Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

interface ParticipantsPanelProps {
  value: string[] | null
  onChange: (value: string[]) => void
}

export default function ParticipantsPanel({ onChange, value }: ParticipantsPanelProps) {

  const inpurRef = useRef<HTMLInputElement | null>(null)
  const [participants, setParticipants] = useState<string[]>(value ?? [])

  const handleAddParticipant = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const participant = inpurRef.current?.value?.trim()
    if (participant) {
      const newValue = [...participants, participant]
      setParticipants(newValue)
      // @ts-ignore (us this comment if typescript raises an error)
      inpurRef.current.value = ''
      onChange(newValue)
    }
  }

  const handleRemoveParticipant = (participant: string) => {
    const newValue = participants.filter(item => item !== participant)
    setParticipants(newValue)
    onChange(newValue)
  }

  return (
    <div className="flex flex-col items-end gap-2 w-full">
      <div className="flex flex-col sm:flex-row items-end gap-2 w-full">
        <Input ref={inpurRef} placeholder="Participant Name" />
        <Button variant='neutral' className='min-w-fit px-3 py-1 w-full sm:w-fit h-full' onClick={handleAddParticipant}>
          Add Participant
        </Button>
      </div>
      <ul className="w-full mr-auto flex flex-wrap gap-3">
        {participants.map(participant => (
          <li key={participant} className="flex flex-row items-center gap-1">
            {participant}
            <button aria-label={`Delete participant ${participant}`} onClick={() => handleRemoveParticipant(participant)}>
              <FontAwesomeIcon width={14} className="text-red-500" icon={faClose} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}