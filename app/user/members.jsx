import Image from 'next/image'
import React from 'react'
import Sourav from "../../public/assets/images/sourav.png"

const Members = () => {
  return (
    <div className="w-full h-full mx-auto lg:py-20 lg:pl-5 text-white">
        <div className='text-3xl mb-4 lg:mb-10 pl-5'>Members List</div>
        <div className='grid lg:grid-cols-4 h-screen lg:h-[75vh] gap-3 p-5 overflow-y-scroll'>
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