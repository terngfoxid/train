import { useRouter } from 'next/router'
import Topbar from '../../components/Topbar'
import Read_Card from '../../components/manga/Read_Card'
import BackToTop from '../../components/overlay/BackToTop'
import ChangeCh from '../../components/overlay/ChangeCh'


const Ch = () =>{
    const router = useRouter()
    const {ch} = router.query

    const total_page = 5;
    const total_ch = 20;
    
    return (
        <div>
            <Topbar></Topbar>
            <br></br>
            <Read_Card total_page={total_page} ch={ch}/>
            <BackToTop />
            <ChangeCh ch={ch} total_ch={total_ch}/>
            <br></br>
            <br></br>
        </div>
    )

}

export default Ch