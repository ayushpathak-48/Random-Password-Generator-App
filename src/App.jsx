import { useState } from "react";
import "./App.css";

function App() {
  const [pwd, setPwd] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";
    let password = "";
    for (let i = 0; i < 16; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      setPwd(password);
    }
  };

  const copyPwd = () => {
    try {
      navigator.clipboard.writeText(pwd);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      setCopied(false);
    }
  };
  return (
    <>
      <div className="bg-indigo-200 min-h-screen min-w-screen flex items-center justify-center">
        <div className="bg-gray-900 py-12 p-4 rounded-2xl outline-none flex flex-col items-center justify-center px-6 w-[320px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="h-6 w-6 fill-blue-300 my-4"
          >
            <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
          </svg>
          <h1 className="text-xl text-bold text-white text-center w-full mb-4">
            Password Generator
          </h1>
          <div className="relative w-full">
            <input
              type="text"
              className={`transition-all border  ${
                copied ? "border-blue-500" : "border-slate-700"
              } bg-slate-800 rounded-md p-2  px-4 w-full text-slate-400`}
              disabled
              value={pwd}
            />
            <svg
              className="h-5 w-5 fill-blue-300 absolute cursor-pointer active:scale-[0.9] top-3 right-4 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              onClick={copyPwd}
            >
              <path d="M502.6 70.63l-61.25-61.25C435.4 3.371 427.2 0 418.7 0H255.1c-35.35 0-64 28.66-64 64l.0195 256C192 355.4 220.7 384 256 384h192c35.2 0 64-28.8 64-64V93.25C512 84.77 508.6 76.63 502.6 70.63zM464 320c0 8.836-7.164 16-16 16H255.1c-8.838 0-16-7.164-16-16L239.1 64.13c0-8.836 7.164-16 16-16h128L384 96c0 17.67 14.33 32 32 32h47.1V320zM272 448c0 8.836-7.164 16-16 16H63.1c-8.838 0-16-7.164-16-16L47.98 192.1c0-8.836 7.164-16 16-16H160V128H63.99c-35.35 0-64 28.65-64 64l.0098 256C.002 483.3 28.66 512 64 512h192c35.2 0 64-28.8 64-64v-32h-47.1L272 448z" />
            </svg>
          </div>
          <button
            className="bg-blue-600 rounded-md outline-none w-full text-white my-4 p-2 active:scale-[0.9] transition-all"
            onClick={generatePassword}
          >
            Gererate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
