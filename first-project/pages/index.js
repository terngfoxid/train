
import Topbar from '../components/Topbar'
import Update from '../components/Update'
import Hot from '../components/Hot'

export default () => {
    return (
      <div>
        <Topbar />
        <br></br>
        <div >
          <Update />
        </div>
        <br></br>
        <div >
          <Hot />
        </div>
        <br></br>
      </div>
    )
  }