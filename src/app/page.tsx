'use client'

import { useEffect, useState } from "react";
import { getChar } from "./utils/Dataservices";
import { IPotterName } from "./interfaces/Interfaces";
import ModalComponent from "./components/ModalComponent";

export default function Home() {

  const [showNames, setShowNames] = useState<IPotterName[]>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChar, setSelectedChar] = useState<IPotterName | null>(null);

  const saveData = async () => {
    const data: IPotterName[] = await getChar();
    setShowNames(data)
  }

  useEffect(() => {
    saveData()
  }, [])

  const openModal = (char: IPotterName) => {
    setSelectedChar(char);
    setIsModalOpen(true);
  }

  return (
    <div>
      <div className="text-center text-[40px] py-14">
        HARRY POTTER API
        <p className="text-[16px] hAnim text-center">Created by Jared :3</p>
      </div>

      <div className="grid grid-cols-4 gap-2 text-center px-2">
        {showNames && showNames.length > 0 ? (
          showNames.map((name: IPotterName, index) => (
            <div key={index} className="p-10 border rounded-lg border-violet-500 cursor-pointer drop" onClick={() => openModal(name)}>
              {name.name}
            </div>
          ))
        )
        :
        (
          <div className="text-center col-span-4 pt-20">Loading...</div>
        )}
      </div>

      {isModalOpen && selectedChar && (
        <ModalComponent
          charData={selectedChar}
          setIsModalOpen={setIsModalOpen}
        />
      )}

    </div>
  );
}
