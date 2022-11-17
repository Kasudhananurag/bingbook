import img from "./assets/logo.png";

export default function Nav(){
    return <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 text-center">
                    <img src={img} height="100px" alt="" />
                </div>
                <div className="col-lg-11 col-md-11 col-sm-12 col-xs-12 text-center">
                    <p><h1 className="my-2" style={{color:"#da2165"}}>Bingobook</h1></p>
                    <p><small style={{color:"#da2165"}}>know your friends better</small></p>
                </div>
            </div>
        </div>
    </>
}