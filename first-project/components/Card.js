import Link from "next/link";

export default function Card ({id}){

    const card_style = (
      {
        image: "",
        title: 'ทดสอบ component',
        description: "คว................................ามคิดดี น่าชื่นชมเป็นอย่างยิ่ง",
        title_style: 'w-5/6 text-zinc-200 text-2xl font-bold font-serif ',
        description_style: 'w-5/6 text-zinc-300',
        shape:"w-11/12 p-6 rounded-lg shadow-md border border-gray-500 bg-zinc-600",
        position: "flex justify-around",
      }
    );
  
    return(
      <div className="">
        <Link href={"/manga/"+id}>
          <div className={card_style.position}>
            <div className={card_style.shape}>
              <h1 className={card_style.title_style}>{card_style.title}</h1>
              <p className={card_style.description_style}>{card_style.description}</p>
            </div>
          </div>
        </Link>
      </div>
      )
  }