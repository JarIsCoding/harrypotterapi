'use client'

import { useEffect, useState } from "react";
import { getChar } from "./utils/Dataservices";
import { IPotterName } from "./interfaces/Interfaces";

export default function Home() {

  const [showNames, setShowNames] = useState<IPotterName[]>();

  const saveData = async () => {
    const data: IPotterName[] = await getChar();
    setShowNames(data)
  }

  useEffect(() => {
    saveData()
  }, [])

  return (
    <div>
      <div className="text-center text-[40px] pt-16">
        HARRY POTTER API
      </div>
      <div>
      {showNames && showNames.length > 0 ? (
          showNames.map((name, index) => (
            <div key={index}>
              {name.name}
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
