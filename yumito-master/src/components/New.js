import React,{useContext,useEffect} from 'react'
import Cart from './Cart'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
var store =require('store');

function New() {
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    let {list}=iL.state ?? orderedItems ;
    //console.log("menu rendered");
    // navbar scrollup and down logic
    //let prev= window.scrollY;
   
    useEffect(()=>{ 
        // let prev= window.scrollY;  
        // const scrolling = ()=>{
        //     let current = window.scrollY;
        //     const catBar = document.getElementById("categoryBar");
        //     //const loggedbar = document.getElementsByClassName("loggedBar");
        //     if (prev > current && current <10) {
        //         if(catBar){
        //             catBar.style.top = "85px";
        //         }
        //       } 
        //     else{
        //         if(catBar){
        //            document.getElementById('categoryBar').style.top = "0" ;
        //         }
        //     }
        //       prev = current;
        // }   
        //  document.addEventListener('scroll', scrolling)
        //  return ()=> document.removeEventListener('scroll', scrolling);
         
        },[])
    return (
        <div>
            <CategoryBar/>
            <RestaurantMenu url="https://www.reddit.com/r/programminghorror/new/.json?limit=5"/>
            {list && (list.length>0 ? <Cart/> : <></>)}
        </div>
    )
}

export default React.memo(New)
