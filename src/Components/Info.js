import './../style.css'
import {AlbumUno, AlbumDos, AlbumTres, AlbumCuatro} from './Sources'

export default function Info(){
    return(
            <section className="contenedorInfo">

                <div className="itemInfoUno">
                    <div>
                        <img src={AlbumUno} alt="" className='albumFoto'/>
                    </div>

                    <div className='divAlign'>
                        <h3> MASTER OF PUPPETS <br/> (Metallica)</h3>
                        <p>Master of Puppets is the third studio album 
                            by the American heavy metal band Metallica, 
                            released on March 3, 1986, by Elektra Records. 
                            Recorded in Denmark at Sweet Silence Studios with 
                            producer Flemming Rasmussen, it was the band's last 
                            album to feature bassist Cliff Burton, who died in a 
                            bus accident in Sweden during the album's promotional tour.  
                            <a target="_blank" href='https://en.wikipedia.org/wiki/Master_of_Puppets'> Continue reading</a></p>
                    </div>
                </div>

                <div className="itemInfoDos">
                    <div>
                        <h3>TEN <br/> (Pearl Jam)</h3>
                        <p> Ten is the debut studio album by American rock 
                            band Pearl Jam, released on August 27, 1991, 
                            through Epic Records. bassist Jeff Ament and guitarist 
                            Stone Gossard began rehearsing with new guitarist Mike 
                            McCready. The group recorded a five-song instrumental demo 
                            tape with Matt Cameron on drums. Copies of the demo were 
                            eventually given to drummer Dave Krusen and vocalist Eddie Vedder,
                            both of whom were invited to audition for the band in Seattle.  
                            <a target="_blank" href='https://en.wikipedia.org/wiki/Ten_(Pearl_Jam_album)'> Continue reading</a></p>
                    </div>

                    <div  className='divAlignDos'>
                        <img src={AlbumDos} alt="" className='albumFoto'/>
                    </div>
                </div>

                <div className="itemInfoTres">
                    <div>
                        <img src={AlbumTres} alt="" className='albumFoto'/>
                    </div>

                    <div className='divAlign'>
                        <h3>RUST IN PEACE <br/> (Megadeth)</h3>
                        <p> Rust in Peace is the fourth studio album by American heavy 
                            metal band Megadeth, released on September 24, 1990 by Capitol 
                            Records. It was the first Megadeth album to feature lead 
                            guitarist Marty Friedman and drummer Nick Menza. The songs 
                            "Hangar 18" and "Holy Wars... The Punishment Due" were released 
                            as singles. A remixed and remastered version of the album featuring 
                            four bonus tracks was released in 2004.  
                            <a target="_blank" href='https://en.wikipedia.org/wiki/Rust_in_Peace'> Continue reading</a></p>
                    </div>
                </div>

                <div className="itemInfoCuatro">
                    <div>
                        <h3>APPETITE FOR DESTRUCTION <br/> (Guns N' Roses)</h3>
                        <p> Appetite for Destruction is the debut studio album by American 
                            hard rock band Guns N' Roses. It was released on July 21, 1987, 
                            by Geffen Records. The album was released to little mainstream 
                            attention in 1987. It was not until the following year that Appetite
                            for Destruction became a commercial success, after the band had toured
                            and received significant airplay with the singles "Welcome to the Jungle",
                            "Paradise City" and "Sweet Child o' Mine".  
                            <a target="_blank" href='https://en.wikipedia.org/wiki/Appetite_for_Destruction'> Continue reading</a></p>
                        
                    </div>

                    <div  className='divAlignDos'>
                        <img src={AlbumCuatro} alt="" className='albumFoto'/>
                    </div>
                </div>

            </section>
    )

}