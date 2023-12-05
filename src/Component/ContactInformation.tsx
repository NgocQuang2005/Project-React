type ToAssociate ={
    infomation?: string;
    content?:string;
}


const ContactInformation = ({infomation,content} : ToAssociate) => {
  return (
    <div >
        <strong className="text-[17px] text-white">{infomation}</strong>
         <p className="text-[#D6D6D6] mb-2">{content}</p>
    </div>
  )
}

export default ContactInformation