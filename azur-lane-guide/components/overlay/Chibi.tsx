
export default function Chibi(chibi: any) {
    
    const chibi_style = (
        {
            set_overlay: "fixed bottom-5 left-0 md:bottom-5 md:left-5 w-full",
        }
    );

    return (
        <div id="shipchibi" className={chibi_style.set_overlay}>
            <div className="flex justify-items-start w-full"> 
            <img className="w-1/6 md:w-max" src={"https://drive.google.com/uc?export=view&id=" + chibi.chibi} alt='ship chibi image' />
            </div>
        </div>
    )
}