import {} from './header.css'

function Header (props) {


    const logoSrc = require('../../img/logoWhiteSmall.png');
    const searchSrc = require('../../img/search.png')
    return <>
    <div className="  pt-2 pb-2 bg-grad-dark-gray">
            <nav className="navbar navbar-expand-lg navbar-dark text-white   ps-4">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-12 w-100 text-center">
                            <img src={logoSrc} alt="" />
                        
                        </div>
                    </div>
                        
                       
                    
                    </div>
                </nav>
    </div>
               
    </>
}

export { Header };