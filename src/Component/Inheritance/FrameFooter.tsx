type Frame ={
    Duongdan?:string;
    tuvu:string;
}

const FrameFooter = ({Duongdan,tuvu} : Frame) => {
  return (
    <div className="">
        <a className="px-[0.6em] pt-[0.64em] pb-[0.54em] mr-[0.4rem] mb-[0.8rem] border-solid border border-gray-800 
        text-white text-[11px] inline-block no-underline" href={Duongdan}>{tuvu}</a>
    </div>
  )
}

export default FrameFooter