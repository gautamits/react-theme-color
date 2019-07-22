import React, {useEffect} from 'react'

export default ({color, colors, random, delay, reset, children})=>{
    function getRandomRGBValue() {
        return Math.min(Math.floor(Math.random() * 255 + 1), 255);
    }
    
    function getRandomColor() {
        if(colors && Array.isArray(colors)){
            let randomIndex = Math.floor(Math.random() * (colors.length - 1));
            return colors[randomIndex]
        }
        var r = getRandomRGBValue(),
            g = getRandomRGBValue(),
            b = getRandomRGBValue();
        return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }


    function changeColor(){
        let node = document.querySelector("meta[name=theme-color]")
        if(!node) return
        if(random){
            color=getRandomColor()
        }
        if(color){
            node.setAttribute("content",color)
        }
    }

    useEffect(()=>{
        var prevColor;
        let node = document.querySelector("meta[name=theme-color]")
        if(!node) return
        prevColor = node.getAttribute("content")
        if(reset) return ()=>{
            node.setAttribute("content",prevColor)
        }
    },[])

    useEffect(()=>{
        var myInterval
        changeColor()
        if(delay){
            clearInterval(myInterval)
            myInterval = setInterval(changeColor, delay)
        }
    })
    return children
}