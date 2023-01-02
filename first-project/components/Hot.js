import Card from "./Card";

export default function Hot (){
  
    const card_style = (
      {
        title: 'ยอดนิยม',
        title_style: 'text-zinc-200 text-2xl font-bold font-serif text-center',
        shape:"w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
        position:"flex justify-center",
        body_style: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1",
      }
    );
  
    return(
      <div className={card_style.position}>
        <div className={card_style.shape}>
          <br></br>
          <h1 className={card_style.title_style}>{card_style.title}</h1>
          <br></br>
          <div className={card_style.body_style}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <br></br>
        </div>
      </div>
      )
  }