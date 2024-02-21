const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

const doTheTrick = theClickedOne =>{
    if(good.checked && cheap.checked && fast.checked){
        if(good === theClickedOne){
            fast.checked = false;
        }
        if(cheap === theClickedOne){
            good.checked = false;
        }
        if(fast === theClickedOne){
            cheap.checked = false;
        }
    }
}

toggles.forEach(toggle => toggle.addEventListener('change',(e)=>doTheTrick(e.target)))

// Commit message, "Adds the keyframes to animated the checkbox and the javascript to/not enabled toggling"