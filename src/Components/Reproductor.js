import './../style.css'
import {AlbumUno, AlbumDos, AlbumTres, AlbumCuatro, LogoY, LogoS,
        Master, Orion, Heroes, Sanitarium, 
        Black, Jeremy, Even, Oceans,
        Tornado, Wars, Lucretia, Rust,
        Sweet, Jungle, City, Easy} from './Sources'

export default function ReproductorUno(){
    return(
        <div>
            <section className='contenedorReproductorUno'>

                <div className="itemReproductorUno">

                    <div className="infoReproductor">
                        <h3>Listen best of: <br/><br/>MASTER OF PUPPETS <br/>(Metallica)</h3>
                        <img src={AlbumUno} alt="" width="90px"/>
                    </div>

                    <br/>
                    <label>Master of puppets</label>
                    <audio controls className='audio'>
                        <source src={Master} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Orion</label>
                    <audio controls className='audio'>
                        <source src={Orion} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Disposable Heroes</label>
                    <audio controls className='audio'>
                        <source src={Heroes} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Welcome Home (Sanitarium)</label>
                    <audio controls className='audio'>
                        <source src={Sanitarium} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <div className="infoReproductor">
                    <h3>Listen full on:</h3>
                        <div className='tubeSpo'>
                            <a target="_blank" 
                            href='https://www.youtube.com/watch?v=17E-zFb-0aE&list=OLAK5uy_lHtcjdo7MU4A3Tt3MuErEdEOOqs4UgngE'>
                                <img src={LogoY} alt="" width="35"></img></a>
                            <a target="_blank" 
                            href='https://open.spotify.com/album/2Lq2qX3hYhiuPckC8Flj21?si=W2b7-gziT026fVCJ2a9b-g'>
                                <img src={LogoS} alt="" width="35"></img></a>
                        </div>
                    </div>

                </div>

                <div className="itemReproductorDos">

                    <div className="infoReproductor">
                        <img src={AlbumDos} alt="" width="90px"/>
                        <h3>Listen best of: <br/><br/>TEN <br/>(Pearl Jam)</h3>
                    </div>

                    <br/>
                    <label>Black</label>
                    <audio controls className='audio'>
                        <source src={Black} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Jeremy</label>
                    <audio controls className='audio'>
                        <source src={Jeremy} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Even Flow</label>
                    <audio controls className='audio'>
                        <source src={Even} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Oceans</label>
                    <audio controls className='audio'>
                        <source src={Oceans} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <div className="infoReproductor">
                    <h3>Listen full on:</h3>
                        <div className='tubeSpo'>
                            <a target="_blank" 
                            href='https://www.youtube.com/watch?v=3i575s4hbu0&list=OLAK5uy_mw4FTsQlVeKTVFhffMb2t1qIThWg3qsN4'>
                                <img src={LogoY} alt="" width="35"></img></a>
                            <a target="_blank" 
                            href='https://open.spotify.com/album/5B4PYA7wNN4WdEXdIJu58a?si=NgDI3_PwTL2dMh574KWnSw'>
                                <img src={LogoS} alt="" width="35"></img></a>
                        </div>
                    </div>
                </div>

            </section>

            <section className='contenedorReproductorDos'>
                <div className="itemReproductorTres">

                    <div className="infoReproductor">
                        <h3>Listen best of: <br/><br/>RUST IN PEACE <br/>(Megadeth)</h3>
                        <img src={AlbumTres} alt="" width="90px"/>
                    </div>
                    
                    <br/>
                    <label>Tornado Of Souls</label>
                    <audio controls className='audio'>
                        <source src={Tornado} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Holy Wars... The Punishment Due</label>
                    <audio controls className='audio'>
                        <source src={Wars} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Lucretia</label>
                    <audio controls className='audio'>
                        <source src={Lucretia} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>
                    <br/>
                    <label>Rust In Peace</label>
                    <audio controls className='audio'>
                        <source src={Rust} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>
            
                    <br/>
                    <div className="infoReproductor">
                    <h3>Listen full on:</h3>
                        <div className='tubeSpo'>
                            <a target="_blank" 
                            href='https://www.youtube.com/watch?v=9d4ui9q7eDM&list=OLAK5uy_lBLXRW43EViiE9xRRCR6l1Ghtj1Ko6Mhc'>
                                <img src={LogoY} alt="" width="35"></img></a>
                            <a target="_blank" 
                            href='https://open.spotify.com/album/4e6ML9RBhDyyKTaTwbiRZv?si=6P2ghF29Qbe5fqj8E32o2A'>
                                <img src={LogoS} alt="" width="35"></img></a>
                        </div>
                    </div>
                
                </div>
            
                <div className="itemReproductorCuatro">

                    <div className="infoReproductor">
                        <img src={AlbumCuatro} alt="" width="90px"/>
                        <h3>Listen best of: <br/>APPETITE FOR DESTRUCTION <br/>(Guns N' Roses)</h3>
                    </div>

                    <br/>
                    <label>Sweet Child O' Mine</label>
                    <audio controls className='audio'>
                        <source src={Sweet} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Welcome To The Jungle</label>
                    <audio controls className='audio'>
                        <source src={Jungle} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>Paradise City</label>
                    <audio controls className='audio'>
                        <source src={City} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <label>It's So Easy</label>
                    <audio controls className='audio'>
                        <source src={Easy} type="audio/mp3"/>
                        Tu navegador no soporta audio HTML5.
                    </audio>

                    <br/>
                    <div className="infoReproductor">
                    <h3>Listen full on:</h3>
                        <div className='tubeSpo'>
                            <a target="_blank" 
                            href='https://www.youtube.com/watch?v=xFe2vxVZWkY&list=OLAK5uy_n13hmdsIozcCRyaY4cRDuuviphpfbzPrw'>
                                <img src={LogoY} alt="" width="35"></img></a>
                            <a target="_blank" 
                            href='https://open.spotify.com/album/3I9Z1nDCL4E0cP62flcbI5?si=u8OdoxE-ROy-9UvjayBHVA'>
                                <img src={LogoS} alt="" width="35"></img></a>
                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}