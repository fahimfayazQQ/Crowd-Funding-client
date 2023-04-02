import Image from 'next/image'
import React from 'react'
import Sourav from "../../public/assets/images/sourav.png"

const Members = () => {
  return (
    <div className="w-11/12 h-full mx-auto p-20 text-white">
        <div className='text-3xl mb-10'>Members List</div>
        <div className='grid grid-cols-4 h-[75vh] gap-3 p-5 overflow-y-scroll'>
            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

            <div className='flex justify-center items-center p-10 border rounded-2xl'>
                <div>
                    <Image src={Sourav} alt="img" className="w-24 h-24 rounded-full mx-auto"/>
                    <div className='text-center mt-5'>Sourav Sen</div>
                    <div className='text-sm text-center'>Business Owner</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Members