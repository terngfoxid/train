
export default function Chibi(chibi: any) {
    
    const chibi_style = (
        {
            set_overlay: "fixed bottom-3 left-0 scale-50 md:scale-100 md:bottom-5 md:left-5 ",
        }
    );

    return (
        <div id="shipchibi" className={chibi_style.set_overlay}>
            <div className="flex justify-start"> 
            <img src={"https://drive.google.com/uc?export=view&id=" + chibi.chibi} alt='ship chibi image' />
            </div>
        </div>
    )
}