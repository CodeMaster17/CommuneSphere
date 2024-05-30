
import { Heading } from "../shared/Heading"
import { Card } from "../ui/card"
import Image from "next/image"


const SponsorPageCard = async () => {


    return (
        <div className='mt-2 grid grid-cols-2 gap-4 '>
            <div className=' rounded-[6px] bg-white p-4 '>

                <Heading type='small' >
                    Top Sponsors
                </Heading>
                <div className='mt-2 grid grid-cols-3 gap-4'>

                 <Card className='flex flex-col items-center justify-center p-2'>
                  <Image src='/Banner.png' alt='intro' width={400} height={100} className='h-24 w-full rounded-lg' />
                  <div className='mt-2 flex w-full items-center justify-between'>
                    <p className='text-xs font-semibold'>Monster</p>
                   <p className='rounded-sm bg-greenTab px-1 text-xs text-greenText'>Rs 30000</p>
                 </div>
                 </Card>

                 <Card className='flex flex-col items-center justify-center p-2'>
                  <Image src='/Banner.png' alt='intro' width={400} height={100} className='h-24 w-full rounded-lg' />
                  <div className='mt-2 flex w-full items-center justify-between'>
                    <p className='text-xs font-semibold'>Redbull</p>
                   <p className='rounded-sm bg-greenTab px-1 text-xs text-greenText'>Rs 25000</p>
                 </div>
                 </Card>

                 <Card className='flex flex-col items-center justify-center p-2'>
                  <Image src='/Banner.png' alt='intro' width={400} height={100} className='h-24 w-full rounded-lg' />
                  <div className='mt-2 flex w-full items-center justify-between'>
                    <p className='text-xs font-semibold'>Zuno</p>
                   <p className='rounded-sm bg-greenTab px-1 text-xs text-greenText'>Rs 24000</p>
                 </div>
                 </Card>
                </div>
            </div>
            <div className='flex  flex-col gap-4  '>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Sponsors</p>
                        <p className='text-4xl font-bold'>
                            31
                        </p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Food Sponsors</p>
                        <p className='text-4xl font-bold'>7</p>
                    </Card>
                </div>
                <div className='flex gap-4'>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Total Collection</p>
                        <p className='text-4xl font-bold'>45,870</p>
                    </Card>
                    <Card className="w-1/2 py-4 pl-4">
                        <p>Heighest Collection</p>
                        <p className='text-4xl font-bold'>30,000</p>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default SponsorPageCard
