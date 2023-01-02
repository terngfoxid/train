

export default function Contact_Card (){
  
    const card_style = (
      {
        title: 'Contact',
        title_style: 'text-zinc-200 text-2xl font-bold font-serif text-center',
        shape:"w-11/12 rounded-lg shadow-md border border-gray-500 bg-neutral-800",
        position:"flex justify-center",
        body_style: "text-zinc-300 text-2xl font-serif text-center",
      }
    );
  
    return(
      <div className={card_style.position}>
        <div className={card_style.shape}>
          <br></br>
          <h1 className={card_style.title_style}>{card_style.title}</h1>
          <br></br>
          <div className={card_style.body_style}>
            <p>Framework: Next.js</p>
            <p>CSS: Tailwind CSS</p>
            <br></br>
            <p>Designed by SSTfoxide</p>
            <p>Discord: SSTfoxide#5107</p>
          </div>
          <br></br>
        </div>
      </div>
      )
  }