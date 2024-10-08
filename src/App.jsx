import SideBar from "./components/SideBar"
import TwitterPost from "./components/TwitterPost"
import RightBar from "./components/RightBar";
function App() {
  //#E7E9EA text color
  return (
    <>
    <section className="grid grid-cols-4 gap-4 max-w-7xl mx-auto sticky top-0">
      <div className="">
        <SideBar userName="Renato Herrera" nameTag="@devrena17" />
      </div>
      <div className="container col-span-2 border border-[#71767b]/50 relative">
        <div className="grid grid-cols-2 justify-items-center border border-t-0 border-[#71767b]/50 cursor-pointer sticky top-0 w-full backdrop-blur-xl">
          <div className="hover:bg-[#181818] w-full flex justify-center transition-colors duration-400">
            <h3 className="border-b-4 border-sky-400 py-3 font-semibold">For you</h3>
          </div>

          <div className="hover:bg-[#181818] w-full flex justify-center">
            <h3 className="py-3 text-[#71767B]">Following</h3>
          </div>
        </div>
        <TwitterPost 
          userName="Miguel Ángel Durán" 
          nameTag="@midudev" 
          text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏" 
          verified={true} />

        <TwitterPost 
          userName="Renato Herrera" 
          nameTag="@devrena17" 
          text="Creo que alguien anda clonando páginas web :v" 
          verified={true} />

        <TwitterPost 
          userName="Elon Musk" 
          nameTag="@elonmusk" 
          text="Well, one lesson I’ve learned is that just because I say something to a group and they laugh doesn’t mean it’s going to be all that hilarious as a post on 𝕏" 
          verified={true} />

        <TwitterPost 
          userName="Brais Moure" 
          nameTag="@MoureDev" 
          text="HOY LUNES tenemos nueva clase de lógica de programación en directo (válida para cualquier lenguaje)." 
          verified={true} />

        <TwitterPost 
          userName="FC Barcelona" 
          nameTag="@FcBarcelona" 
          text="The Wall, in black and white." 
          verified={true} />

        <TwitterPost 
          userName="GitHub" 
          nameTag="@github" 
          text="Open source software underpins all sectors of the economy, public services, and even international organizations like the United Nations. 🌐  Learn how the public and private sectors can work together to make open source more sustainable." 
          verified={true} />
      </div>
      <div className="">
        <RightBar />
      </div>
    </section>
    </>
  )
}

export default App
