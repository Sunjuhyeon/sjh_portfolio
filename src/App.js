import Hd from './layout/Hd'
import Content from './layout/Content'
// import Ft from './layout/Ft'

import hdDB from './data/linkinfo'

function App(props) {
    return (
        <>
            <Hd id="hd" hddb={hdDB}></Hd>
            <Content id="content" hddb={hdDB}></Content>
            {/* <Ft id="ft" hddb={hdDB} ></Ft> */}
        </>
    )
}

export default App
