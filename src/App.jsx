import Entry from "./components/entry.jsx";
import Travel from "./components/travelheader.jsx";
import data from "./data.jsx";

function App(){

  const dataelements = data.map((item) => {
    return(
      <Entry
        key={item.id}
        // entry={item}
        {...item}
      />
    )
  })

  return(
    <>
      <Travel 
        img={{ 
          src: "/globe.png",
          alt: "Globe"
        }}
        head="Travel Journal"
      />

      <main>
        {dataelements}
      </main>
    </>
  )
}

export default App;