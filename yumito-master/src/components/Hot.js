import React,{useContext, useEffect} from 'react'
import CategoryBar from './CategoryBar'
import RestaurantMenu from './RestaurantMenu'
import {itemContext} from '../App';
var store =require('store');

function Hot() {
    const iL = useContext(itemContext);
    const orderedItems =store.get('orderedItems');
    let {list}=iL.state ?? orderedItems ;

    useEffect(()=>{ 
        let prev= window.scrollY;  
        const scrolling = ()=>{
            let current = window.scrollY;
            const catBar = document.getElementById("categoryBar");
            console.log(prev, current,"p","c")
            if (prev > current && current <10) {
                if(catBar){
                    catBar.style.top = "85px";
                }
              } 
            else{
                if(catBar){
                   document.getElementById('categoryBar').style.top = "0" ;
                }
            }
              prev = current;
        }   
         document.addEventListener('scroll', scrolling)
         return ()=> document.removeEventListener('scroll', scrolling);
         
    },[])

    return (
        <div>
            <CategoryBar/>
            <RestaurantMenu url="https://www.reddit.com/r/programminghorror/hot/.json?limit=4"/>
        </div>
    )
}

export default React.memo(Hot)
