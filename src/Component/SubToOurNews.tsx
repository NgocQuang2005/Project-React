import { useState } from "react";

const SubToOurNews = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate Your Name
    if (name.length < 4) {
      setNameError("Your name Ít Nhất 4 Kí Tự");
      return;
    } else {
      setNameError("");
    }

    // Validate Phone
    if (phone.length !== 10) {
      setPhoneError("Phone Ít Nhất 10 Kí Tự");
      return;
    } else {
      setPhoneError("");
    }

    // Validate Email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!emailRegex.test(email)) {
      setEmailError("Địa Chỉ Email Không Hợp Lệ");
      return;
    } else {
      setEmailError("");
    }
    // If all validations pass, you can proceed with form submission
    console.log("Form submitted:", { name, email, phone });
  };

  return (
    <div className="bg-gray-200 px-[50px] py-[50px]">
      <div className="text-center text-4xl font-bold pb-[10px]">
        Subscribe to Our Newsletter
      </div>
      <div className="text-gray-500 text-center p-[20px]">
        Do not want to miss news, updates, note and any offer on our products,
        then please subscribe to our mailing list.
      </div>
      <div className="max-w-screen-xl mx-auto bg-orange-500 py-[20px] rounded">
        <form className="flex flex-col md:flex-row md:space-x-4 items-center" onSubmit={handleSubmit}>
          <label className="p-[20px] md:w-2/4">
            <input type="text" name="name" value={name} placeholder="Your name" required
              onChange={(e) => {
                setName(e.target.value);
                setNameError("");
              }}
              className="border border-gray-300 p-2 rounded w-full"/>
            <span style={{ color: "#00FFFF" }}>{nameError}</span>
          </label>

          <label className="p-[20px] md:w-2/4">
            <input type="tel" name="phone" placeholder="Your mobile number" required
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError("");
              }}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <span style={{ color: "#00FFFF" }}>{phoneError}</span>
          </label>

          <label className="p-[20px] md:w-2/4 ">
            <input type="text" name="email" value={email} placeholder="Your email" required
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
              }}
              className="border border-gray-300 p-2 rounded w-full"
            />
            <span style={{ color: "#00FFFF" }}>{emailError}</span>
          </label>

          
          <label className="p-[20px] md:w-2/4">
            <button className="bg-black text-white p-2 cursor-pointer rounded w-full" type="submit">
              Submit
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default SubToOurNews;
