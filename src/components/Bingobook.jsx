import { getDatabase, ref, set } from "firebase/database"
import { app } from './firebase';
import { useState } from "react";
import Nav from "./Nav"

const db = getDatabase(app);

const Bingobook = () => {
    const [book, setBook] = useState({
        name: "",
        oneword: "",
        fcolor: "",
        hobbies: "",
        strengths: "",
        weakness: "",
        ourrelation: "",
        messageforme: "",
        likes: "",
        dislikes: ""
    });

    const putData = (e) => {
        e.preventDefault();
        const time = new Date().getTime();
        const node = `bingobook/` + book.name + time;
        if(book.name.length>0 || book.oneword.length>0 || book.fcolor.length>0
            || book.hobbies.length>0
            || book.strengths.length>0
            || book.weakness.length>0
            || book.ourrelation.length>0
            || book.messageforme.length>0
            || book.likes.length>0
            || book.dislikes.length>0
            )
        {
            set(ref(db, node ), {
                name: book.name,
                oneword: book.oneword,
                fcolor: book.fcolor,
                hobbies: book.hobbies,
                strengths: book.strengths,
                weakness: book.weakness,
                ourrelation: book.ourrelation,
                messageforme: book.messageforme,
                likes: book.likes,
                dislikes: book.dislikes    
            }).then(value => alert("Data sent")).cathch(err => alert("Opps! Try again"))
        }
        else
        {
            return alert("Please Fill all the fields")
        }
        // console.log(book);
        
    }

    return <>
        <Nav />
        <div className=" bbook col-lg-8 col-md-8 p-5 col-sm-12 col-xs-12 m-auto my-5 rounded shadow-lg" style={{ backgroundColor: "#da2165" }}>
            <form action="" className="shadow">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, name: e.target.value })} class="form-control" placeholder="Your name" required />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, oneword: e.target.value })} class="form-control" placeholder="Describe me in one word" />
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, fcolor: e.target.value })} class="form-control" placeholder="Your Favourite color" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, hobbies: e.target.value })} class="form-control" placeholder="Hobbies" />
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, strengths: e.target.value })} class="form-control" placeholder="Traits you're proid of(my strengths)" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, weakness: e.target.value })} class="form-control" placeholder="Areas I need to work on(my shortcomings)" />
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, ourrelation: e.target.value })} class="form-control" placeholder="What am I to you?" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, likes: e.target.value })} class="form-control" placeholder="What do you think I like?" />
                    </div>
                </div>
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, dislikes: e.target.value })} class="form-control" placeholder="What do you think I dislike?" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <input type="text" onChange={(e) => setBook({ ...book, messageforme: e.target.value })} class="form-control" placeholder="Say something for me!" />
                    </div>
                </div>
                <div className="row">
                    <div className="contianer-fluid">
                        <button
                            onClick={putData}
                            className="btn text-danger" style={{ backgroundColor: "#f7d2e1" }}>I'm Done</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="sticky-bottom container p-3 m-auto" style={{color:"#da2165", fontFamily:"Lucida Calligraphy"}} >
            made by Anurag Kasudhan
        </div>
    </>

}

export default Bingobook;