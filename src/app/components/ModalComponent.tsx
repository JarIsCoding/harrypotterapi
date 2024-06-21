'use client'

import Image from "next/image"
import { IModalProps } from "../interfaces/Interfaces"
import placeholder from '@/app/assets/PlaceholderPfp2.png'
import { useEffect, useState } from "react"

const ModalComponent = (props: IModalProps) => {
    const [wizStatus, setWizStatus] = useState<string>('')
    const [liveStatus, setLiveStatus] = useState<string>('')

    const charImg = props.charData.image || placeholder

    const wiz = props.charData.wizard

    const wizFunc = () => {
        if (wiz) {
            setWizStatus('Yes')
        } else {
            setWizStatus('No')
        }   
    }

    useEffect(() => {
        wizFunc()
        aliveFunc()
    }, [])

    const alive = props.charData.house

    const aliveFunc = () => {
        if (alive) {
            setLiveStatus('Alive')
        } else {
            setLiveStatus('Deceased')
        }
    }

    return (
        <>
            <div className='z-20 fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-20' onClick={() => props.setIsModalOpen(false)}>
                <div className='z-10 absolute top-0 left-0 bottom-0 right-0 m-auto max-md:mx-10 max-w-[1200px] h-[580px] rounded-lg bg-stone-700'>
                    <div className="pt-4 h-10">

                        <div className="grid grid-cols-3 px-5">

                            <div className="col-span-1 pt-6">
                                <Image src={charImg} alt="Harry potter charater image" width={500} height={500} className="imageSize" />
                            </div>

                            <div className="col-span-2">
                                <p className='text-white text-[40px] text-center underline'>{props.charData.name}</p>

                                <div className="col-span-2 text-white ps-4 text-[20px] grid grid-cols-2 pt-4">
                                    <p className='col-span-1 border p-2'>Actor: <br /> {props.charData.actor || 'No actors found'}</p>

                                    <p className='col-span-1 border p-2'>Species: <br /> {props.charData.species || 'No species found'}</p>

                                    <p className='col-span-1 border p-2'>Gender: <br /> {props.charData.gender || 'No gender found'}</p>

                                    <p className="col-span-1 border p-2">Birthday: <br /> {props.charData.dateOfBirth || 'No birthday found'}</p>

                                    <p className="col-span-1 border p-2">Is a wizard?: <br /> {wizStatus}</p>

                                    <p className="col-span-1 border p-2">Ancestery: <br /> {props.charData.ancestry || 'No ancestry found'}</p>

                                    <p className="col-span-1 border p-2">House: <br /> {props.charData.house || 'No corresponding house found'}</p>

                                    <p className="col-span-1 border p-2">Alive?: <br /> {liveStatus} </p>

                                    <p className='col-span-1 border p-2'>Alternate Names: <br /> 
                                        {props.charData.alternate_names.length > 0 ? (
                                            props.charData.alternate_names.map((i, index) => (
                                                <span key={index}>{i}<br /></span>
                                            ))
                                        ) : (
                                            'No other names found'
                                        )}
                                    </p>

                                    <p className="border p-2">Wand Specs: <br /> {props.charData.wand.wood || 'No wood data'}, {props.charData.wand.length || 'No length data'}, {props.charData.wand.core || 'No core data'} </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalComponent