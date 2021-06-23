import React, { Component } from 'react';
import AllSongs from './AllSongs';
class SongList extends Component {
   
    render() {  
        return (
         <>
            <div>
             <table>
                 <tr>
                     <th>Movie </th>
                     <th> Title </th>
                     <th> SongLength </th>
                     <th> Singer </th>
                 </tr>
                 <tbody>
                     {
                         AllSongs.map((items)=>{
                             return(
                                 <tr key={items.id}>
                                    <td>{items.Movie}</td>
                                    <td>{items.Title}</td>
                                    <td>{items.Songlength}</td>
                                    <td>{items.Singer}</td>
                                 </tr>
                             )
                         })
                     }
                 </tbody>
             </table>
             </div>
             <div>
                 <form>
                    <input type="text" id="moviename"/><label for="MovieName">MovieName</label><br/>
                    <input type="text" id="songtitle"/><label for="songtitle">SongTitle</label><br/>
                    <input type="text" id="songlength"/><label for="songlength">SongLength</label><br/>
                    <input type="text" id="singer"/><label for="Singer">Singer</label><br/>
                     <input type="submit" value="Add Song"/>
                 </form>
             </div>
         </>
        )
      }
    }