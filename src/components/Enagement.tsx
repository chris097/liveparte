import Image from 'next/image';
import React, { ReactNode } from 'react';
import group from '../../public/images/youth-group.png';

interface IDataProps {
    id: number;
    icon: ReactNode;
    title: string;
}

const data: IDataProps[] = [
    {
        icon: <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.41669 4C4.41669 2.94146 5.27481 2.08334 6.33335 2.08334C7.3919 2.08334 8.25002 2.94146 8.25002 4C8.25002 5.05855 7.3919 5.91667 6.33335 5.91667C5.27481 5.91667 4.41669 5.05855 4.41669 4ZM6.33335 0.583336C4.44638 0.583336 2.91669 2.11303 2.91669 4C2.91669 5.88698 4.44638 7.41667 6.33335 7.41667C8.22033 7.41667 9.75002 5.88698 9.75002 4C9.75002 2.11303 8.22033 0.583336 6.33335 0.583336ZM11 0.583336C10.5858 0.583336 10.25 0.919122 10.25 1.33334C10.25 1.74755 10.5858 2.08334 11 2.08334C12.0586 2.08334 12.9167 2.94146 12.9167 4C12.9167 5.05855 12.0586 5.91667 11 5.91667C10.5858 5.91667 10.25 6.25246 10.25 6.66667C10.25 7.08088 10.5858 7.41667 11 7.41667C12.887 7.41667 14.4167 5.88698 14.4167 4C14.4167 2.11303 12.887 0.583336 11 0.583336ZM0.916687 12.5333C0.916687 10.3518 2.68516 8.58334 4.86669 8.58334H7.80002C9.98155 8.58334 11.75 10.3518 11.75 12.5333C11.75 14.1258 10.4591 15.4167 8.86669 15.4167H3.80002C2.2076 15.4167 0.916687 14.1258 0.916687 12.5333ZM4.86669 10.0833C3.51359 10.0833 2.41669 11.1802 2.41669 12.5333C2.41669 13.2973 3.03603 13.9167 3.80002 13.9167H8.86669C9.63068 13.9167 10.25 13.2973 10.25 12.5333C10.25 11.1802 9.15312 10.0833 7.80002 10.0833H4.86669ZM12.3334 8.58334C11.9191 8.58334 11.5834 8.91912 11.5834 9.33334C11.5834 9.74755 11.9191 10.0833 12.3334 10.0833H13.1334C14.4865 10.0833 15.5834 11.1802 15.5834 12.5333C15.5834 13.2973 14.964 13.9167 14.2 13.9167H12.3334C11.9191 13.9167 11.5834 14.2525 11.5834 14.6667C11.5834 15.0809 11.9191 15.4167 12.3334 15.4167H14.2C15.7924 15.4167 17.0834 14.1258 17.0834 12.5333C17.0834 10.3518 15.3149 8.58334 13.1334 8.58334H12.3334Z" fill="#060809" />
        </svg>,
        title: "Select your Audience",
        id: 1
    },
    {
        icon: <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.7666 2.22815C10.2502 2.08978 9.59823 2.08333 7.99999 2.08333H7.33332C6.37566 2.08333 5.98414 2.08566 5.66847 2.13566C3.84993 2.42369 2.42367 3.84994 2.13565 5.66849C2.08565 5.98416 2.08332 6.37567 2.08332 7.33333C2.08332 8.291 2.08565 8.68251 2.13565 8.99818C2.42367 10.8167 3.84993 12.243 5.66847 12.531C5.98414 12.581 6.37566 12.5833 7.33332 12.5833H9.99883C11.008 12.5833 11.9982 12.8576 12.8635 13.3768C13.327 13.6549 13.9167 13.321 13.9167 12.7805V8C13.9167 6.40176 13.9102 5.74977 13.7718 5.23335C13.3789 3.76671 12.2333 2.62113 10.7666 2.22815ZM8.13479 0.583321C9.55592 0.583135 10.4225 0.583021 11.1549 0.77926C13.1391 1.31095 14.689 2.86084 15.2207 4.84512C15.417 5.5775 15.4169 6.44407 15.4167 7.8652L15.4167 8V12.7805C15.4167 14.487 13.555 15.541 12.0918 14.663C11.4595 14.2837 10.7361 14.0833 9.99883 14.0833H7.33332L7.25249 14.0833C6.40048 14.0834 5.8815 14.0834 5.43382 14.0125C2.97344 13.6229 1.0438 11.6932 0.654113 9.23283C0.583208 8.78516 0.583249 8.26617 0.583317 7.41415L0.583321 7.33333L0.583317 7.25251C0.583249 6.4005 0.583208 5.88151 0.654113 5.43384C1.0438 2.97345 2.97344 1.04381 5.43382 0.654125C5.8815 0.58322 6.40049 0.583261 7.2525 0.583329L7.33332 0.583333H7.99999L8.13479 0.583321ZM3.91665 5.33333C3.91665 4.91912 4.25244 4.58333 4.66666 4.58333H9.99999C10.4142 4.58333 10.75 4.91912 10.75 5.33333C10.75 5.74755 10.4142 6.08333 9.99999 6.08333H4.66666C4.25244 6.08333 3.91665 5.74755 3.91665 5.33333ZM4.66666 7.25C4.25244 7.25 3.91665 7.58579 3.91665 8C3.91665 8.41421 4.25244 8.75 4.66666 8.75H7.33332C7.74753 8.75 8.08332 8.41421 8.08332 8C8.08332 7.58579 7.74753 7.25 7.33332 7.25H4.66666Z" fill="#060809" />
        </svg>,
        title: "Choose The Type Of Message",
        id: 2
    },
    {
        icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.12" d="M2.66669 9.33333C2.66669 12.3636 5.00002 14.6667 8.00002 14.6667C11 14.6667 13.3334 12.3636 13.3334 9.33333C13.3334 3.87879 8.00002 1.33333 8.00002 1.33333C8.00002 4 8.66669 8 6.66669 8C5.33335 8 5.00002 6.66667 5.00002 4.33333C5.00002 4.33333 2.66669 6.30303 2.66669 9.33333Z" fill="#060809" />
            <path fillRule="evenodd" clipRule="evenodd" d="M8.32307 0.656473L8.00002 1.33333C8.32307 0.656473 8.32336 0.656614 8.32368 0.656765L8.32441 0.657117L8.32625 0.658L8.33139 0.660482L8.34737 0.668314C8.36053 0.674811 8.37864 0.683867 8.40138 0.695494C8.44685 0.718744 8.51087 0.752307 8.59079 0.79629C8.75053 0.884199 8.97442 1.01407 9.24109 1.1868C9.77316 1.53144 10.4826 2.05124 11.194 2.75453C12.6151 4.15953 14.0834 6.34 14.0834 9.33333C14.0834 12.7806 11.4114 15.4167 8.00002 15.4167C4.58861 15.4167 1.91669 12.7806 1.91669 9.33333C1.91669 7.62262 2.57487 6.2285 3.21015 5.2797C3.52923 4.80314 3.84838 4.42993 4.08974 4.17394C4.21071 4.04565 4.31293 3.94594 4.38697 3.87658C4.42402 3.84187 4.45408 3.81468 4.476 3.79524L4.50264 3.77187L4.51112 3.76458L4.5141 3.76203L4.51527 3.76104L4.51578 3.76061C4.51601 3.76042 4.51623 3.76023 5.00002 4.33333L4.51623 3.76023C4.73926 3.57195 5.05127 3.53017 5.31598 3.65313C5.58069 3.77609 5.75002 4.04146 5.75002 4.33333C5.75002 5.49691 5.83815 6.28423 6.02971 6.76312C6.11946 6.98749 6.21381 7.09616 6.28916 7.15178C6.35742 7.20216 6.46469 7.25 6.66669 7.25C6.78487 7.25 6.84613 7.22272 6.88435 7.19744C6.92806 7.16851 6.98903 7.10984 7.05472 6.98471C7.19736 6.71302 7.29475 6.26087 7.33481 5.61988C7.37381 4.996 7.35481 4.28061 7.32359 3.53122C7.3171 3.37558 7.31006 3.21801 7.30298 3.05977C7.27671 2.47195 7.25002 1.8749 7.25002 1.33333C7.25002 1.07585 7.38211 0.836361 7.59989 0.698989C7.81767 0.561617 8.09069 0.545566 8.32307 0.656473ZM4.36482 6.25484C3.86814 7.0363 3.41669 8.08994 3.41669 9.33333C3.41669 11.9466 5.41143 13.9167 8.00002 13.9167C10.5886 13.9167 12.5834 11.9466 12.5834 9.33333C12.5834 6.87212 11.3849 5.05259 10.1394 3.82123C9.66705 3.35426 9.1936 2.97807 8.78819 2.69135C8.79224 2.78418 8.79642 2.87789 8.80063 2.97241C8.80791 3.13557 8.8153 3.30115 8.82229 3.46878C8.85356 4.21939 8.87623 5.004 8.83189 5.71345C8.78862 6.4058 8.67768 7.12031 8.38282 7.68196C8.22976 7.97349 8.01469 8.24815 7.71205 8.4484C7.40391 8.65228 7.0485 8.75 6.66669 8.75C6.20202 8.75 5.76762 8.63118 5.39838 8.35864C5.03623 8.09134 4.79725 7.72084 4.637 7.32021C4.51173 7.00705 4.42439 6.64855 4.36482 6.25484Z" fill="#060809" />
        </svg>,
        title: "Create Your Campaign",
        id: 3
    },
    {
        icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.7964 2.15584C13.2586 2.02644 13.5553 1.94415 13.7758 1.90368C13.9133 1.87844 13.9748 1.87943 13.9922 1.88035C14.049 1.90551 14.0945 1.95097 14.1196 2.00782C14.1206 2.02516 14.1216 2.08669 14.0963 2.22423C14.0558 2.4447 13.9735 2.74139 13.8441 3.20355L11.2458 12.4831C11.0438 13.2043 10.9048 13.6983 10.7773 14.0412C10.6922 14.2702 10.6357 14.3602 10.6195 14.3859L10.6188 14.3871C10.5615 14.4126 10.4966 14.4157 10.4371 14.3956L10.4363 14.3945C10.4178 14.3704 10.353 14.2861 10.2468 14.0662C10.0875 13.7368 9.90273 13.2581 9.6339 12.5591L8.28862 9.06117L8.27015 9.01298L8.27015 9.01297C8.25002 8.96035 8.22952 8.90673 8.20775 8.85291L9.86367 7.19699C10.1566 6.9041 10.1566 6.42923 9.86367 6.13633C9.57077 5.84344 9.0959 5.84344 8.80301 6.13633L7.1471 7.79224C7.09327 7.77048 7.03966 7.74997 6.98704 7.72984L6.98703 7.72984L6.93884 7.71138L3.44086 6.366C2.74188 6.09716 2.26313 5.91234 1.93372 5.75313C1.71382 5.64684 1.62954 5.58212 1.60544 5.56361L1.60434 5.56277C1.5843 5.50332 1.58736 5.43843 1.6129 5.38113L1.61407 5.38039C1.63982 5.36423 1.72982 5.30772 1.95872 5.22259C2.30164 5.09505 2.79565 4.95606 3.51681 4.75414L12.7964 2.15584ZM14.5108 0.472415C14.1606 0.339777 13.8042 0.373408 13.505 0.428326C13.2085 0.482749 12.8446 0.58464 12.4249 0.702167L12.392 0.711396L3.11237 3.30969L3.07755 3.31944C2.3997 3.50923 1.8446 3.66465 1.43584 3.81667C1.06331 3.95522 0.597964 4.16026 0.346926 4.57214C0.0366675 5.08119 0.00689042 5.71317 0.26791 6.24914C0.479108 6.6828 0.923113 6.93069 1.28096 7.10365C1.67361 7.29343 2.21162 7.50034 2.86859 7.75302L2.86865 7.75304L2.90239 7.76602L6.40038 9.11139C6.52906 9.16089 6.60108 9.1888 6.6546 9.21243C6.69438 9.22998 6.70547 9.23734 6.7054 9.23738C6.70539 9.23739 6.70502 9.23716 6.7044 9.23672C6.72718 9.25291 6.74708 9.27281 6.76327 9.29559C6.76035 9.29148 6.76688 9.29851 6.78756 9.34539C6.81118 9.39891 6.8391 9.47093 6.88859 9.59962L8.23388 13.0975L8.24687 13.1313L8.24689 13.1314C8.49955 13.7883 8.70646 14.3263 8.89623 14.719C9.06919 15.0768 9.31706 15.5208 9.75073 15.732C10.2867 15.9931 10.9187 15.9633 11.4277 15.6531C11.8396 15.402 12.0447 14.9367 12.1832 14.5641C12.3352 14.1554 12.4906 13.6004 12.6804 12.9226L12.6805 12.9224L12.6902 12.8876L15.2886 3.60801L15.2978 3.57505C15.4153 3.15539 15.5172 2.79155 15.5717 2.49504C15.6266 2.19582 15.6602 1.83939 15.5276 1.48917C15.35 1.02024 14.9798 0.650015 14.5108 0.472415Z" fill="#060809" />
        </svg>,
        title: "Hit Send!",
        id: 4
    }
];

const Enagement = () => {
    return (
        <div className='flex md:flex-row flex-col w-[90%] mx-auto mt-28 gap-16 md:ml-32'>
            <div className='flex-1'>
                <Image className='bg-cover object-cover' src={group} alt='' />
            </div>
            <div className='flex-1'>
                <div className='font-mdtest font-medium text-base leading-4 text-black.300 tracking-[-0.12px] bg-yellow.200 text-center rounded-[30px] flex justify-center items-center w-[149px] h-[32px]'>Coming Soon</div>
                <h1 className='font-mdtest mt-5 font-bold text-[62px] leading-[62px] tracking-[0.48px]
                ]'>SUPER FAN <br /> ENGAGEMENT</h1>
                <p className='font-mattersq text-base mb-10 tracking-[-0.12px] leading-[19.2px] w-[65%] text-grey.200 mt-5'>Engage with fans who attended your event through e-mail and SMS campaigns. Promote upcoming shows, contents and new merch in a click.</p>
                {data.map((_v, _i: number) => (
                    <div key={_i} className='flex gap-3'>
                        <div className='flex justify-center flex-col items-center'>
                            <div className='bg-yellow.400 w-[32px] h-[32px] rounded-full flex justify-center items-center'>
                                {_v.icon}
                            </div>
                            {_v.id === data?.length - 1 + 1 ? '' : <div className='border-l border-dashed border-yellow.400 h-7' />}
                        </div>
                        <p className='text-base leading-[19.2px] mt-1.5 tracking-[-0.12px] text-grey.200'>{_v.title}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Enagement;