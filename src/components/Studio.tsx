import Image from 'next/image';
import React from 'react';
import liveparte from '../../public/images/circle_bg.png'

const Studio = () => {
    return (
        <div className='flex justify-center mt-40 gap-6 items-center'>
            <div className='w-[298px] h-[181px] bg-grey.300 flex justify-between flex-col rounded-[12px] p-5'>
                <div>
                    <h1 className='uppercase font-mdtest text-[24px] leading-[24px] font-medium tracking-[-0.12px]'>Studio</h1>
                    <p className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] mt-3'>Full access to create and manage your live events and customer data.</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <p className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.200'>Total revenue</p>
                        <p className='font-mdtest text-[14px] leading-[16.8px] tracking-[-0.12px] font-bold mt-0.5'>$100,000</p>
                    </div>
                    <div>
                        <p className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] text-grey.200'>Average Sales Price</p>
                        <p className='font-mdtest text-[14px] leading-[16.8px] tracking-[-0.12px] font-bold mt-0.5'>$10</p>
                    </div>
                </div>
            </div>
            <div className='w-[366px] h-[366px] rounded-full'>
                <Image className='w-full h-full bg-cover object-cover' src={liveparte} alt='' />
            </div>
            <div className='w-[298px] h-[181px] bg-grey.300 flex justify-between flex-col rounded-[12px] p-5'>
                <div>
                    <h1 className='uppercase font-mdtest text-[24px] leading-[24px] font-medium tracking-[-0.12px]'>Engage</h1>
                    <p className='font-mattersq text-[14px] leading-[16.8px] tracking-[-0.12px] mt-3'>Marketing tool to engage and send direct campaigns to your fans</p>
                </div>
                <div className='flex gap-10'>
                    <div className='flex gap-2 items-center'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.12" d="M2 10.5C2 7.69974 2 6.29961 2.54497 5.23005C3.02433 4.28924 3.78924 3.52433 4.73005 3.04497C5.79961 2.5 7.19974 2.5 10 2.5H14C16.8003 2.5 18.2004 2.5 19.27 3.04497C20.2108 3.52433 20.9757 4.28924 21.455 5.23005C22 6.29961 22 7.69974 22 10.5V19.6708C22 20.6969 22 21.21 21.8373 21.5302C21.5642 22.0676 20.996 22.3893 20.3947 22.347C20.0363 22.3218 19.5964 22.0578 18.7165 21.5299C18.1917 21.215 17.9293 21.0576 17.6542 20.9347C17.1972 20.7306 16.7122 20.5963 16.2154 20.5362C15.9163 20.5 15.6103 20.5 14.9983 20.5H10C7.19974 20.5 5.79961 20.5 4.73005 19.955C3.78924 19.4757 3.02433 18.7108 2.54497 17.77C2 16.7004 2 15.3003 2 12.5V10.5Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.96644 1.75H10H14H14.0336H14.0336C15.4053 1.75 16.4807 1.74999 17.3451 1.82061C18.2252 1.89252 18.9523 2.04138 19.6104 2.37671C20.6924 2.92799 21.572 3.80762 22.1233 4.88955C22.4586 5.54769 22.6075 6.2748 22.6794 7.15494C22.75 8.01926 22.75 9.09466 22.75 10.4663V10.4664V10.4664V10.5V19.6708V19.6978C22.75 20.1879 22.75 20.5941 22.7279 20.9165C22.7057 21.24 22.6574 21.5718 22.5059 21.87C22.0963 22.6761 21.2439 23.1586 20.342 23.0952C20.0084 23.0717 19.699 22.9424 19.4102 22.795C19.1224 22.6481 18.774 22.4391 18.3538 22.1869L18.3306 22.173C17.7908 21.8491 17.5727 21.7197 17.3484 21.6195C16.9599 21.446 16.5476 21.3318 16.1253 21.2807C15.8814 21.2512 15.6277 21.25 14.9983 21.25H10H9.96642H9.96637H9.96632C8.59466 21.25 7.51926 21.25 6.65494 21.1794C5.77479 21.1075 5.04769 20.9586 4.38955 20.6233C3.30762 20.072 2.42798 19.1924 1.87671 18.1104C1.54138 17.4523 1.39252 16.7252 1.32061 15.8451C1.24999 14.9807 1.25 13.9053 1.25 12.5336V12.5V10.5V10.4664C1.25 9.09472 1.24999 8.01929 1.32061 7.15494C1.39252 6.2748 1.54138 5.54769 1.87671 4.88955C2.42798 3.80762 3.30762 2.92799 4.38955 2.37671C5.04769 2.04138 5.77479 1.89252 6.65494 1.82061C7.51928 1.74999 8.59471 1.75 9.96642 1.75H9.96644ZM6.77708 3.31563C5.9897 3.37996 5.48197 3.50359 5.07054 3.71322C4.27085 4.12068 3.62068 4.77085 3.21322 5.57054C3.00359 5.98197 2.87996 6.4897 2.81563 7.27708C2.75058 8.07322 2.75 9.08749 2.75 10.5V12.5C2.75 13.9125 2.75058 14.9268 2.81563 15.7229C2.87996 16.5103 3.00359 17.018 3.21322 17.4295C3.62068 18.2291 4.27085 18.8793 5.07054 19.2868C5.48197 19.4964 5.9897 19.62 6.77708 19.6844C7.57322 19.7494 8.58749 19.75 10 19.75H14.9983L15.0473 19.75H15.0473C15.6128 19.75 15.961 19.7499 16.3054 19.7916C16.8768 19.8607 17.4346 20.0152 17.9601 20.2499C18.2768 20.3914 18.5754 20.5706 19.0603 20.8615L19.1023 20.8868C19.5516 21.1563 19.8557 21.3383 20.0921 21.4589C20.3328 21.5818 20.4226 21.5971 20.4473 21.5989C20.748 21.62 21.0321 21.4592 21.1686 21.1905C21.1799 21.1684 21.2129 21.0835 21.2314 20.8139C21.2496 20.5491 21.25 20.1948 21.25 19.6708V10.5C21.25 9.08749 21.2494 8.07322 21.1844 7.27708C21.12 6.4897 20.9964 5.98197 20.7868 5.57054C20.3793 4.77085 19.7291 4.12068 18.9295 3.71322C18.518 3.50359 18.0103 3.37996 17.2229 3.31563C16.4268 3.25058 15.4125 3.25 14 3.25H10C8.58749 3.25 7.57322 3.25058 6.77708 3.31563ZM6.25 8.5C6.25 8.08579 6.58579 7.75 7 7.75H15C15.4142 7.75 15.75 8.08579 15.75 8.5C15.75 8.91421 15.4142 9.25 15 9.25H7C6.58579 9.25 6.25 8.91421 6.25 8.5ZM7 11.75C6.58579 11.75 6.25 12.0858 6.25 12.5C6.25 12.9142 6.58579 13.25 7 13.25H11C11.4142 13.25 11.75 12.9142 11.75 12.5C11.75 12.0858 11.4142 11.75 11 11.75H7Z" fill="white" />
                        </svg>
                        <p className='font-mattersq text-grey.200 text-[14px] leading-[16.8px] tracking-[-0.12px]'>SMS</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect opacity="0.12" x="2" y="3.5" width="20" height="18" rx="5" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 2.75H9.96644C8.59472 2.75 7.51929 2.74999 6.65494 2.82061C5.77479 2.89252 5.04769 3.04138 4.38955 3.37671C3.30762 3.92798 2.42798 4.80762 1.87671 5.88955C1.54138 6.54769 1.39252 7.27479 1.32061 8.15494C1.24999 9.01929 1.25 10.0947 1.25 11.4664V11.5V13.5V13.5336C1.25 14.9053 1.24999 15.9807 1.32061 16.8451C1.39252 17.7252 1.54138 18.4523 1.87671 19.1104C2.42798 20.1924 3.30762 21.072 4.38955 21.6233C5.04769 21.9586 5.77479 22.1075 6.65494 22.1794C7.51927 22.25 8.59469 22.25 9.96637 22.25H9.96642H10H14H14.0336H14.0336C15.4053 22.25 16.4807 22.25 17.3451 22.1794C18.2252 22.1075 18.9523 21.9586 19.6104 21.6233C20.6924 21.072 21.572 20.1924 22.1233 19.1104C22.4586 18.4523 22.6075 17.7252 22.6794 16.8451C22.75 15.9807 22.75 14.9053 22.75 13.5336V13.5336V13.5V11.5V11.4664V11.4664C22.75 10.0947 22.75 9.01927 22.6794 8.15494C22.6075 7.27479 22.4586 6.54769 22.1233 5.88955C21.572 4.80762 20.6924 3.92798 19.6104 3.37671C18.9523 3.04138 18.2252 2.89252 17.3451 2.82061C16.4807 2.74999 15.4053 2.75 14.0336 2.75H14H10ZM5.07054 4.71322C5.48197 4.50359 5.9897 4.37996 6.77708 4.31563C7.57322 4.25058 8.58749 4.25 10 4.25H14C15.4125 4.25 16.4268 4.25058 17.2229 4.31563C18.0103 4.37996 18.518 4.50359 18.9295 4.71322C19.7291 5.12068 20.3793 5.77085 20.7868 6.57054C20.9964 6.98197 21.12 7.4897 21.1844 8.27708C21.2494 9.07322 21.25 10.0875 21.25 11.5V13.5C21.25 14.9125 21.2494 15.9268 21.1844 16.7229C21.12 17.5103 20.9964 18.018 20.7868 18.4295C20.3793 19.2291 19.7291 19.8793 18.9295 20.2868C18.518 20.4964 18.0103 20.62 17.2229 20.6844C16.4268 20.7494 15.4125 20.75 14 20.75H10C8.58749 20.75 7.57322 20.7494 6.77708 20.6844C5.9897 20.62 5.48197 20.4964 5.07054 20.2868C4.27085 19.8793 3.62068 19.2291 3.21322 18.4295C3.00359 18.018 2.87996 17.5103 2.81563 16.7229C2.75058 15.9268 2.75 14.9125 2.75 13.5V11.5C2.75 10.0875 2.75058 9.07322 2.81563 8.27708C2.87996 7.4897 3.00359 6.98197 3.21322 6.57054C3.62068 5.77085 4.27085 5.12068 5.07054 4.71322ZM6.41603 7.87596C6.07138 7.6462 5.60573 7.73933 5.37596 8.08397C5.1462 8.42862 5.23933 8.89427 5.58398 9.12404L6.58398 9.7907L6.70034 9.86829L6.70035 9.8683C8.19864 10.8674 9.09026 11.4619 10.0527 11.7519C11.3227 12.1346 12.6773 12.1346 13.9473 11.7519C14.9097 11.4619 15.8014 10.8674 17.2997 9.86829L17.416 9.7907L18.416 9.12404C18.7607 8.89427 18.8538 8.42862 18.624 8.08397C18.3943 7.73933 17.9286 7.6462 17.584 7.87596L16.584 8.54263C14.9337 9.64281 14.2367 10.0981 13.5145 10.3157C12.5268 10.6133 11.4732 10.6133 10.4855 10.3157C9.76334 10.0981 9.0663 9.64281 7.41603 8.54263L6.41603 7.87596Z" fill="white" />
                        </svg>
                        <p className='font-mattersq text-grey.200 text-[14px] leading-[16.8px] tracking-[-0.12px]'>Email</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studio