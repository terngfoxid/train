import { useRouter } from 'next/router'
import Topbar from '../../components/Topbar'
import Main_Card from '../../components/manga/Main_Card'
import Ch_Card from '../../components/manga/Ch_Card'
import BackToTop from '../../components/overlay/BackToTop'

const Manga = () =>{
    const router = useRouter()
    const {id} = router.query

    const total_ch = 20;
    
    return (
        <div>
            <Topbar></Topbar>
            <br></br>
            <Main_Card id={id} />
            <br></br>
            <Ch_Card total_ch={total_ch} id={id}/>
            <BackToTop />
            <br></br>
            <br></br>
        </div>
    )
}

export default Manga