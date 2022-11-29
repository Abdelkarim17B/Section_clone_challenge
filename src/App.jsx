import './App.css'
function App() {
  return (
    <div className="font-sans">
      <nav className="flex gap-[134px] items-center justify-center pt-[54px]">
        <img className="h-[62px]" src="/logo.png" alt="" />
        <ul className="flex gap-[74px] text-[28px] font-medium text-[#757575]">
          <li>Home</li>
          <li>About</li>
          <li>Agenda</li>
          <li>Speakers</li>
          <li>Sponsors</li>
        </ul>
        <div className="bg-[url('/btn.png')] w-[320px] h-[89px] flex justify-center items-center">
          <h1 className="text-[32px] font-extrabold text-white">Register</h1>
        </div>
      </nav>

      <img src="/bg.png" alt="" className="absolute w-auto h-[646px] top-[60px]" />

      <div className="absolute bg-[url('/CTA.png')] w-[420px] h-[120px] top-[872px] left-[750px] flex justify-center items-center"><h1 className="text-[40px] font-extrabold text-white ">Register</h1></div>

      <img src="/arrow_btn.png" className="absolute left-[1450px] top-[849px]" />
      <img src="/chat_bot.png" className="absolute top-[950px] left-[1747px] animate-bounce" />
      <img src="/pc.png" className="absolute top-[235px] left-[1746px] animate-fade"/>
      <img src="/tasks.png" className="absolute top-[781px] animate-fade"/>
      <img src="/slogan.png" className="absolute left-[104px] top-[1079px]" />
      <img src="/main_slogan.png" className="absolute left-[418px] top-[726px]" />
    </div>
  )
}

export default App
